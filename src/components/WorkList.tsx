'use client';

import { useState } from 'react';
import type { Project } from '@/data/projects';

type Filter = 'all' | 'ai' | 'data' | 'web';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'data', label: 'Data' },
  { id: 'web', label: 'Web' },
];

function bucket(category: Project['category']): Exclude<Filter, 'all'> {
  switch (category) {
    case 'ai':
      return 'ai';
    case 'data':
      return 'data';
    case 'web':
    case 'fullstack':
    case 'mobile':
    case 'utility':
      return 'web';
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

export default function WorkList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = projects.filter(
    (p) => filter === 'all' || bucket(p.category) === filter
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`cursor-pointer bg-transparent p-0 ${
              filter === f.id ? 'text-black underline underline-offset-[3px]' : ''
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
        {visible.map((project) => (
          <li
            key={project.id}
            className="grid grid-cols-[minmax(160px,220px)_1fr_auto] items-baseline gap-x-6 text-sm max-md:grid-cols-1 max-md:gap-y-0.5"
          >
            <span className="font-medium">{project.title}</span>
            <span className="min-w-0 truncate text-[var(--muted)] max-md:whitespace-normal">
              {project.description}
            </span>
            <span className="flex shrink-0 gap-3 text-[var(--muted)]">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.githubUrl ? 'Live' : 'Write-up'}
                </a>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
