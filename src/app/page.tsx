'use client';

import { featuredProjects, projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import ProjectsGrid from '@/components/ProjectsGrid'
import Navigation from '@/components/Navigation'
import FloatingParticles from '@/components/FloatingParticles'

export default function Home() {
  return (
    <div className="animated-gradient min-h-screen relative">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl floating" />
              <div className="w-64 h-64 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl floating-delay-1 absolute top-20 right-20" />
              <div className="w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl floating-delay-2 absolute bottom-20 left-20" />
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 glow">
                <span className="text-gradient">Eswar</span> Attuluri
              </h1>
              <p className="text-2xl md:text-3xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Data Engineer & AI Enthusiast
                <span className="block text-lg text-slate-400 mt-2">
                  Crafting innovative solutions at the intersection of data and technology
                </span>
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="glass rounded-xl px-6 py-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">26+</div>
                  <div className="text-sm text-slate-400">Repositories</div>
                </div>
                <div className="glass rounded-xl px-6 py-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">16</div>
                  <div className="text-sm text-slate-400">Featured Projects</div>
                </div>
                <div className="glass rounded-xl px-6 py-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-slate-400">Technologies</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glass-hover"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 glass text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass rounded-2xl p-8 border border-white/20">
                <p className="text-slate-200 text-lg leading-relaxed mb-6">
                  Passionate data engineer with expertise in modern web technologies. 
                  I love building innovative solutions and exploring the intersection of 
                  technology and user experience.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Currently working on AI projects and data engineering projects, with a focus on 
                  machine learning pipelines, full-stack web applications, and data analysis tools.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="glass rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    AI & Machine Learning
                  </h3>
                  <p className="text-slate-300">Building intelligent systems and data pipelines</p>
                </div>
                
                <div className="glass rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Full-Stack Development
                  </h3>
                  <p className="text-slate-300">Creating modern web applications and APIs</p>
                </div>
                
                <div className="glass rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Data Engineering
                  </h3>
                  <p className="text-slate-300">Designing scalable data architectures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-8" />
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                A showcase of my most impactful work, featuring cutting-edge technologies and innovative solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                All <span className="text-gradient">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-8" />
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Explore my complete portfolio of projects, from data analysis to full-stack applications
              </p>
            </div>
            
            <ProjectsGrid projects={projects} showFilters={true} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-12" />
            
            <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project or discuss how we can work together to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="mailto:eswarchandravidyasagar@gmail.com" 
                className="glass px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a 
                href="https://github.com/eswarchandravidyasagar" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/eswarchandravidyasagar" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            
            <div className="glass rounded-2xl p-8 border border-white/20">
              <p className="text-slate-400 text-sm">
                © 2024 Eswar Chandra. Built with Next.js & Tailwind CSS.
                <span className="block mt-2">
                  Crafted with ❤️ and lots of ☕
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fab"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
