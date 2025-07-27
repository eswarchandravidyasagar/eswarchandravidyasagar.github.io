import { featuredProjects, projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

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
                data engineering projects.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.filter(p => !p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
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
