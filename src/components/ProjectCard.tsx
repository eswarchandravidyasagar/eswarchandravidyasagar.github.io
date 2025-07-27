import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  web: 'bg-blue-500/20 text-blue-300',
  data: 'bg-green-500/20 text-green-300',
  ai: 'bg-purple-500/20 text-purple-300',
  fullstack: 'bg-orange-500/20 text-orange-300',
  mobile: 'bg-pink-500/20 text-pink-300',
  utility: 'bg-yellow-500/20 text-yellow-300',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        {project.featured && (
          <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
            Featured
          </span>
        )}
      </div>
      
      <p className="text-slate-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${categoryColors[project.category]}`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          View Code
        </a>
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}