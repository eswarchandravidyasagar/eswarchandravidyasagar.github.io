import { featuredProjects, projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import ProjectsGrid from '@/components/ProjectsGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Eswar Chandra
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Data Engineer & AI Enthusiast
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              26+ Repositories
            </span>
            <span>•</span>
            <span>16 Featured Projects</span>
            <span>•</span>
            <span>Multiple Technologies</span>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <p className="text-slate-200 text-lg leading-relaxed">
                Passionate data engineer with expertise in modern web technologies. 
                I love building innovative solutions and exploring the intersection of 
                technology and user experience. Currently working on AI projects and 
                data engineering projects, with a focus on machine learning pipelines, 
                full-stack web applications, and data analysis tools.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* All Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Projects</h2>
          <ProjectsGrid projects={projects.filter(p => !p.featured)} showFilters={true} />
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:your.email@example.com" className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              Email
            </a>
            <a href="https://github.com/eswarchandravidyasagar" className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              LinkedIn
            </a>
          </div>
          <p className="text-slate-400">
            © 2024 Eswar Chandra. Built with Next.js & Tailwind CSS.
          </p>
        </section>
      </div>
    </div>
  )
}
