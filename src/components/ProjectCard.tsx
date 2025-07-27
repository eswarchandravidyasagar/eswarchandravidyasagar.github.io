'use client';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  web: 'from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30',
  data: 'from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30',
  ai: 'from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30',
  fullstack: 'from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30',
  mobile: 'from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30',
  utility: 'from-yellow-500/20 to-amber-500/20 text-yellow-300 border-yellow-500/30',
};

const categoryIcons = {
  web: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
    </svg>
  ),
  data: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  ai: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  fullstack: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  mobile: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  utility: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="project-card glass rounded-xl p-6 relative overflow-hidden group cursor-pointer"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category]} border`}>
          {categoryIcons[project.category]}
          <span className="text-xs font-medium capitalize">{project.category}</span>
        </div>
        {project.featured && (
          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
            <span className="text-xs text-purple-300 font-medium">Featured</span>
          </div>
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
        {project.title}
      </h3>
      
      {/* Project Description */}
      <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
        {project.description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-slate-300 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-slate-400">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400/50 hover:text-indigo-200 transition-all duration-300 group/btn"
        >
          <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Code</span>
        </a>
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 hover:text-emerald-200 transition-all duration-300 group/btn"
          >
            <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="text-sm font-medium">Live</span>
          </a>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}