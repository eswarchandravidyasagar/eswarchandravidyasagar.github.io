import { projects } from '@/data/projects'
import WorkList from '@/components/WorkList'

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[880px] bg-white px-8 pb-24 pt-16 max-sm:px-5 max-sm:pt-12">
      <h1 className="mb-3 text-[32px] font-semibold leading-tight tracking-tight">
        Eswar Attuluri
      </h1>
      <p className="mb-6 max-w-[54ch] text-[var(--muted)]">
        Health Data Analyst at Wellington-Dufferin-Guelph Public Health.
        Building data and AI tools that make health systems work better for people.
      </p>
      <p className="mb-16 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--muted)]">
        <a href="https://github.com/eswarchandravidyasagar" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://phiz.ca/contributors/eswar-attuluri/" target="_blank" rel="noopener noreferrer">
          Phiz
        </a>
        <a href="https://linkedin.com/in/eswarchandravidyasagar" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:eswarchandravidyasagar@gmail.com">Email</a>
      </p>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-medium">About</h2>
        <p className="max-w-[62ch] text-[var(--muted)]">
          Current work spans survey analytics tooling, vaccine workflow automation,
          explainable record linkage, and lakehouse architecture for public health BI.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-medium">Work</h2>
        <WorkList projects={projects} />
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium">Contact</h2>
        <p className="mb-3 max-w-[62ch] text-[var(--muted)]">
          Open to collaboration on public health data systems, AI tooling, and related problems.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--muted)]">
          <a href="mailto:eswarchandravidyasagar@gmail.com">Email</a>
          <a href="https://github.com/eswarchandravidyasagar" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://phiz.ca/contributors/eswar-attuluri/" target="_blank" rel="noopener noreferrer">
            Phiz
          </a>
          <a href="https://linkedin.com/in/eswarchandravidyasagar" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  )
}
