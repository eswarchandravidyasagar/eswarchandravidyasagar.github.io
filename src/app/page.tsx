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

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">AI Portfolio</h3>
              <p className="text-slate-300 mb-4">
                Modern portfolio website built with Next.js and Tailwind CSS
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Tailwind</span>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Web Application</h3>
              <p className="text-slate-300 mb-4">
                Full-stack web application with modern UI/UX design
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Node.js</span>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">AI Project</h3>
              <p className="text-slate-300 mb-4">
                Machine learning project with data visualization
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">TensorFlow</span>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>
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
