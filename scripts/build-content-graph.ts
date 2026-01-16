import fs from "fs";
import path from "path";
import { glob } from "glob";
import { pathToFileURL } from "url";
import { createRequire } from "module";
import type { ContentMetadata, ContentGraph } from "../types";

// Mock CSS module imports so tsx can handle component files
const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Module = require("module") as any;

const originalLoad = Module._load;
Module._load = function (request: string, parent: unknown, isMain: boolean) {
  if (request.endsWith(".css") || request.endsWith(".module.css")) {
    return {}; // Return empty object for CSS imports
  }
  return originalLoad(request, parent, isMain);
};

async function buildContentGraph() {
  // Find all content pages, excluding the garden index page
  const contentFiles = await glob("app/garden/**/page.tsx", {
    ignore: ["app/garden/page.tsx"],
  });

  const content: Record<string, ContentMetadata> = {};
  const backlinks: Record<string, string[]> = {};
  const topics: Record<string, string[]> = {};

  console.log(`Found ${contentFiles.length} content files`);

  for (const file of contentFiles) {
    try {
      const absolutePath = path.resolve(process.cwd(), file);
      const fileUrl = pathToFileURL(absolutePath).href;

      const module = await import(fileUrl);
      const metadata = module.contentMetadata;

      if (!metadata?.id) {
        console.warn(`⚠ No contentMetadata.id found in ${file}`);
        continue;
      }

      const urlPath = file.replace("app/", "/").replace("/page.tsx", "");

      content[metadata.id] = {
        id: metadata.id,
        title: metadata.title,
        type: metadata.type,
        created: metadata.created,
        updated: metadata.updated,
        topics: metadata.topics || [],
        links: metadata.links || [],
        description: metadata.description,
        path: urlPath,
      };

      if (!backlinks[metadata.id]) {
        backlinks[metadata.id] = [];
      }

      if (metadata.links && Array.isArray(metadata.links)) {
        for (const linkedId of metadata.links) {
          if (!backlinks[linkedId]) {
            backlinks[linkedId] = [];
          }
          if (!backlinks[linkedId].includes(metadata.id)) {
            backlinks[linkedId].push(metadata.id);
          }
        }
      }

      if (metadata.topics && Array.isArray(metadata.topics)) {
        for (const topic of metadata.topics) {
          if (!topics[topic]) {
            topics[topic] = [];
          }
          if (!topics[topic].includes(metadata.id)) {
            topics[topic].push(metadata.id);
          }
        }
      }

      console.log(`✓ Processed: ${metadata.id}`);
    } catch (err) {
      console.error(`✗ Error processing ${file}:`, err);
    }
  }

  const graph: ContentGraph = {
    content,
    backlinks,
    topics,
  };

  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, "content-graph.json");
  fs.writeFileSync(outputPath, JSON.stringify(graph, null, 2));

  console.log("");
  console.log(
    `✓ Built content graph with ${Object.keys(content).length} content items`
  );
  console.log(
    `✓ Computed backlinks for ${Object.keys(backlinks).length} items`
  );
  console.log(`✓ Found ${Object.keys(topics).length} unique topics`);
  console.log(`✓ Written to ${outputPath}`);
}

buildContentGraph().catch(console.error);
