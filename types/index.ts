import React from "react";

export const ContentType = {
  Note: "note",
  CaseStudy: "case-study",
  Experiment: "experiment",
  Essay: "essay",
} as const;

export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const Topic = {
  AITrust: "AI Trust",
  AIUXPatterns: "AI UX Patterns",
  DevTools: "Dev Tools",
  DesignSystems: "Design Systems",
  IntentShift: "Intent Shift",
  CostAwareAIUX: "Cost-Aware AI UX",
  Claude: "Claude",
  Dashboards: "Dashboards",
  DeveloperExperience: "Developer Experience",
  Documentation: "Documentation",
  GenerativeAI: "Generative AI",
  LLMs: "LLMs",
  ModelEvaluation: "Model Evaluation",
  MultimodalAI: "Multimodal AI",
  PromptEngineering: "Prompt Engineering",
  ResponsibleAI: "Responsible AI",
  TokenArchitecture: "Token Architecture",
  ReactComponents: "React Components",
  ModernCSS: "Modern CSS",
} as const;

export type Topic = (typeof Topic)[keyof typeof Topic];

export interface ContentMetadata {
  id: string;
  title: string;
  type: ContentType;
  created: string;
  updated: string;
  topics: Topic[];
  links: string[];
  description?: string;
  path: string;
}

export interface ContentGraph {
  content: Record<string, ContentMetadata>;
  backlinks: Record<string, string[]>;
  topics: Record<Topic, string[]>;
}
