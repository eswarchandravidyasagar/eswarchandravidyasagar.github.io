export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'data' | 'ai' | 'fullstack' | 'mobile' | 'utility';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'cchs-analysis',
    title: 'CCHS Analysis Workflow',
    description:
      'Streamlit platform that automates Canadian Community Health Survey analysis with bootstrap methods, multi-cycle support, and Statistics Canada data-quality flags.',
    technologies: ['Python', 'Streamlit', 'Survey Statistics', 'Bootstrap'],
    liveUrl: 'https://phiz.ca/posts/2026-05-cchs-analysis-workflow/',
    category: 'data',
    featured: true,
  },
  {
    id: 'vaxlink',
    title: 'VaxLink',
    description:
      'Browser extension that captures vaccine barcodes, validates them against the National Vaccine Catalogue, and fills supported EMR fields.',
    technologies: ['Browser Extension', 'Open Data', 'Clinical Workflows'],
    liveUrl: 'https://phiz.ca/posts/2026-03-vaxlink-innovation/',
    category: 'web',
    featured: true,
  },
  {
    id: 'client-deduplication',
    title: 'Client Linkage & Deduplication',
    description:
      'Explainable AI pipeline for probabilistic client matching in public health, with audit-ready outputs and human review.',
    technologies: ['Python', 'Machine Learning', 'Record Linkage', 'XAI'],
    liveUrl: 'https://phiz.ca/posts/2026-02-client-deduplication/',
    category: 'ai',
    featured: true,
  },
  {
    id: 'data-lakehouse-delta',
    title: 'Data Lakehouses & Delta Lake',
    description:
      'Practical guide for BI analysts on using Delta Lake lakehouses with Power BI — transactions, versioning, and governed analytical tables.',
    technologies: ['Delta Lake', 'Lakehouse', 'Power BI', 'Data Engineering'],
    liveUrl: 'https://phiz.ca/posts/2026-04-power-bi-data-lakehouse/',
    category: 'data',
    featured: true,
  },
  {
    id: 'automata-agent',
    title: 'Automata Agent',
    description:
      'AI agent that turns natural-language goals into Playwright-driven browser workflows with self-healing execution.',
    technologies: ['TypeScript', 'Next.js', 'Playwright', 'AI'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/automata-agent',
    category: 'ai',
    featured: true,
  },
  {
    id: 'kfp-doctor',
    title: 'KFP Doctor',
    description:
      'Diagnostic tooling for Kubeflow Pipelines to identify and resolve common ML workflow failures faster.',
    technologies: ['Python', 'Kubeflow', 'ML Pipelines'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/kfp-doctor',
    category: 'ai',
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const projectsByCategory = projects.reduce(
  (acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  },
  {} as Record<string, Project[]>
);
