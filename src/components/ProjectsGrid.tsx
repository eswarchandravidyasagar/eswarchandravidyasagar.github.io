'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
  showFilters?: boolean;
}

const categories = [
  { id: 'all', name: 'All Projects', color: 'bg-slate-500/20 text-slate-300' },
  { id: 'ai', name: 'AI & ML', color: 'bg-purple-500/20 text-purple-300' },
  { id: 'data', name: 'Data Science', color: 'bg-green-500/20 text-green-300' },
  { id: 'fullstack', name: 'Full-Stack', color: 'bg-orange-500/20 text-orange-300' },
  { id: 'web', name: 'Web Apps', color: 'bg-blue-500/20 text-blue-300' },
  { id: 'utility', name: 'Utilities', color: 'bg-yellow-500/20 text-yellow-300' },
];

export default function ProjectsGrid({ projects, showFilters = false }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? category.color + ' ring-2 ring-white/20'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}