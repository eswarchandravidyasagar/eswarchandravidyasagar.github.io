export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'data' | 'ai' | 'fullstack' | 'mobile' | 'utility';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'kfp-doctor',
    title: 'KFP Doctor',
    description: 'Kubeflow Pipelines diagnostic and troubleshooting tool for ML workflows. Helps identify and resolve common pipeline issues.',
    technologies: ['Python', 'Kubeflow', 'ML Pipelines'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/kfp-doctor',
    category: 'ai',
    featured: true
  },
  {
    id: 'flight-tracker',
    title: 'Flight Tracker',
    description: 'Modern flight tracking application built with TypeScript. Track flights in real-time with a clean, intuitive interface.',
    technologies: ['TypeScript', 'React', 'API Integration'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/flight-tracker',
    category: 'fullstack',
    featured: true
  },
  {
    id: 'immigration-analysis',
    title: 'Immigration Data Analysis',
    description: 'Comprehensive analysis of immigration patterns using data science techniques and visualization tools.',
    technologies: ['Jupyter Notebook', 'Python', 'Data Visualization', 'Pandas'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/immigration_analysis',
    category: 'data',
    featured: true
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation',
    description: 'Machine learning project for customer segmentation using clustering algorithms and data analysis.',
    technologies: ['Jupyter Notebook', 'Python', 'Scikit-learn', 'ML'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/Customer-Segmentation',
    category: 'ai',
    featured: true
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    description: 'Interactive BMI calculator web application with modern UI and health recommendations.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/BMI-calculator',
    liveUrl: 'https://bmi-calculator-zeta-red.vercel.app',
    category: 'web'
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'Responsive admin dashboard with data visualization and management features.',
    technologies: ['JavaScript', 'React', 'Dashboard'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/admindashboard',
    liveUrl: 'https://eswarchandravidyasagar.github.io/admindashboard',
    category: 'web'
  },
  {
    id: 'dice-game',
    title: 'Dice Game',
    description: 'Interactive dice game built with vanilla JavaScript. Fun and engaging gameplay experience.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/dicegame',
    liveUrl: 'https://eswarchandravidyasagar.github.io/dicegame',
    category: 'web'
  },
  {
    id: 'notes-app',
    title: 'Full-Stack Notes App',
    description: 'Complete notes application with user authentication, CRUD operations, and responsive design.',
    technologies: ['HTML', 'Node.js', 'Express', 'Database'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/NodeFullstacKNotesApp',
    category: 'fullstack'
  },
  {
    id: 'training-tribe',
    title: 'Training Tribe',
    description: 'Training management platform for organizing and tracking educational programs.',
    technologies: ['JavaScript', 'Web Development'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/Trainingtribe',
    liveUrl: 'https://eswarchandravidyasagar.github.io/Trainingtribe',
    category: 'web'
  },
  {
    id: 'movie-zone',
    title: 'Movie Zone',
    description: 'Movie discovery and rating platform with search functionality and user ratings.',
    technologies: ['CSS', 'JavaScript', 'API'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/moviezone',
    liveUrl: 'https://eswarchandravidyasagar.github.io/moviezone',
    category: 'web'
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    description: 'Fast and reliable URL shortening service built with TypeScript for better performance.',
    technologies: ['TypeScript', 'Node.js', 'API'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/urlShortner',
    category: 'utility'
  },
  {
    id: 'job-scraper',
    title: 'Job Scraper',
    description: 'Automated job listing scraper that collects job postings from multiple sources.',
    technologies: ['Python', 'Web Scraping', 'Automation'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/Job_scraper',
    category: 'utility'
  },
  {
    id: 'pdf-extraction',
    title: 'PDF Extraction App',
    description: 'Application for extracting text and data from PDF documents using advanced parsing techniques.',
    technologies: ['Python', 'PDF Processing', 'Data Extraction'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/pdf-extraction-app',
    category: 'utility'
  },
  {
    id: 'bookstore',
    title: 'Bookstore App',
    description: 'Online bookstore application with inventory management and shopping cart functionality.',
    technologies: ['JavaScript', 'E-commerce', 'Web App'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/bookstore',
    category: 'fullstack'
  },
  {
    id: 'groceries-tracker',
    title: 'Groceries Tracker',
    description: 'Smart grocery tracking application to manage shopping lists and track expenses.',
    technologies: ['JavaScript', 'Local Storage', 'PWA'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/GroceriesTracker',
    liveUrl: 'https://eswarchandravidyasagar.github.io/GroceriesTracker',
    category: 'utility'
  },
  {
    id: 'score-keeper',
    title: 'Score Keeper',
    description: 'Digital score tracking application for games and competitions with modern interface.',
    technologies: ['CSS', 'JavaScript', 'Game Tools'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/Newscorekeeper',
    liveUrl: 'https://eswarchandravidyasagar.github.io/Newscorekeeper',
    category: 'utility'
  },
  {
    id: 'crewai-research-assistant',
    title: 'CrewAI Research Assistant',
    description: 'A powerful Streamlit application that leverages CrewAI\'s multi-agent framework to create an intelligent research assistant with web search, file analysis, and code execution capabilities.',
    technologies: ['Python', 'Streamlit', 'CrewAI', 'OpenAI', 'Multi-Agent AI'],
    githubUrl: 'https://github.com/eswarchandravidyasagar/data-science',
    category: 'data',
    featured: true
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export const projectsByCategory = projects.reduce((acc, project) => {
  if (!acc[project.category]) {
    acc[project.category] = [];
  }
  acc[project.category].push(project);
  return acc;
}, {} as Record<string, Project[]>);