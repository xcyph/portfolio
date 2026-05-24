'use client'
import Link from 'next/link'

const projects = [
  {
    number: '01',
    title: 'Kledingstyle paradox',
    slug: 'kledingstyleparadox',
    category: 'Photography',
    year: '2026',
    tags: ['Queer', 'Lesbian'],
    description: 'My first photo series, exploring the paradox of clothing styles in queer and lesbian communities.',
  },
  {
    number: '02',
    title: 'Ik, mijzelf en anderen',
    category: 'Opdracht B',
    year: '2026',
    tags: ['Portrait', 'Editorial', 'Film'],
    description: 'A series of analog portraits shot on 35mm. Exploring light and shadow in urban spaces.',
  },
  {
    number: '03',
    title: 'Add On - The emergency chip',
    category: 'Opdracht B',
    slug: 'addon',
    year: '2026',
    tags: ['Editorial', 'Film', 'Sound'],
    description: 'Short documentary following underground electronic artists across Rotterdam and Berlin.',
  },
  {
    number: '04',
    title: 'Forma',
    category: 'Branding & Identity',
    year: '2026',
    tags: ['Identity', 'Print', 'Type'],
    description: 'Complete brand identity for a minimalist furniture label. Logotype, collateral, and web.',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-32 px-8 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-6 mb-20">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Selected work</span>
        <div className="flex-1 h-px bg-border" />
        <span className="font-body text-xs text-muted">2026</span>
      </div>

      {/* Project list */}
      <div className="divide-y divide-border">
        {projects.map((project) => {
          const sharedClass = "group grid grid-cols-[auto_1fr_auto] gap-8 items-start py-10 cursor-pointer hover:bg-surface/50 px-4 -mx-4 transition-colors duration-300"

          const inner = (
            <>
              <span className="font-body text-xs text-muted pt-1">{project.number}</span>
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="font-display text-4xl font-light text-text group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-body text-xs text-muted tracking-widest uppercase">{project.category}</span>
                </div>
                <p className="font-body text-xs text-muted leading-relaxed max-w-md mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-body text-[10px] tracking-widest uppercase px-2 py-1 border border-border text-muted group-hover:border-accent/30 group-hover:text-accent/60 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-4 pt-1">
                <span className="font-body text-xs text-muted">{project.year}</span>
                <span className="text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform">↗</span>
              </div>
            </>
          )

          return project.slug ? (
            <Link key={project.number} href={`/work/${project.slug}`} className={sharedClass}>
              {inner}
            </Link>
          ) : (
            <div key={project.number} className={sharedClass}>
              {inner}
            </div>
          )
        })}
      </div>
    </section>
  )
}