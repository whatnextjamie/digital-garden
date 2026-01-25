export const ContentType = {
  Note: "Note",
  CaseStudy: "Case Study",
  Project: "Project",
  Experiment: "Experiment",
  Essay: "Essay",
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
  DX: "DX",
  Documentation: "Documentation",
  GenerativeAI: "Generative AI",
  LLMs: "LLMs",
  ModelEvaluation: "Model Evaluation",
  MultimodalAI: "Multimodal AI",
  PromptEngineering: "Prompt Engineering",
  ResponsibleAI: "Responsible AI",
  Tokens: "Tokens",
  React: "React",
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
  image?: string;
  path: string;
  isFeatured?: boolean;
}

export interface ContentGraph {
  content: Record<string, ContentMetadata>;
  backlinks: Record<string, string[]>;
  topics: Record<Topic, string[]>;
}
