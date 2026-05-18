export default function About() {
  const skills = [
    { label: 'Frontend', items: 'Next.js, React, TypeScript, Tailwind' },
    { label: 'Motion', items: 'After Effects, Framer Motion, GSAP' },
    { label: 'Visual', items: 'Photography, Film, Color Grading' },
    { label: 'Design', items: 'Figma, Branding, Typography' },
  ]

  return (
    <section id="about" className="py-32 px-8 max-w-6xl mx-auto">
      {/* Label */}
      <div className="flex items-center gap-6 mb-20">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">About</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left: text */}
        <div>
          <h2 className="font-display text-5xl font-light text-text leading-tight mb-8">
            Making things that feel<br />
            <span className="italic text-accent">alive.</span>
          </h2>
          <div className="space-y-4 font-body text-xs text-muted leading-relaxed">
            <p>
              I'm a Rotterdam-based creative who works across design, development, photography, and film.
              I believe the best work happens at the intersection of disciplines.
            </p>
            <p>
              With a background in both engineering and visual arts, I bring a systems-thinking
              approach to creative problems — and a creative eye to technical ones.
            </p>
            <p>
              Currently available for freelance projects and collaborations.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a href="mailto:hello@jandevries.com" className="font-body text-xs tracking-widest uppercase text-text hover:text-accent transition-colors duration-300 flex items-center gap-3 group">
              sitb00@icloud.com
              <span className="block w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Right: skills */}
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <div key={skill.label} className="border-b border-border pb-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent w-24 shrink-0">{skill.label}</span>
                <span className="font-body text-xs text-muted">{skill.items}</span>
              </div>
            </div>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-6">
            {[['5+', 'Years exp.'], ['40+', 'Projects'], ['3', 'Disciplines']].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-4xl font-light text-accent mb-1">{num}</div>
                <div className="font-body text-[10px] tracking-widest uppercase text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
