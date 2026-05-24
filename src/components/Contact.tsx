export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 max-w-6xl mx-auto">
      {/* Label */}
      <div className="flex items-center gap-6 mb-20">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Contact</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Big CTA */}
      <div className="text-center py-20 relative">
        <div className="absolute inset-0 bg-accent/3 rounded-2xl pointer-events-none" />
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-6">Let's build something</p>
        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-text leading-none mb-12">
          Start a <span className="italic text-accent">project</span>
        </h2>
        <a
          href="mailto:booking@itsarahteixeira.nl"
          className="inline-block font-body text-xs tracking-widest uppercase px-10 py-4 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-300"
        >
          Get in touch
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-20 pt-8 flex items-center justify-between">
        <span className="font-display text-lg font-light text-muted">
          Sarah Teixeira<span className="text-accent">.</span>
        </span>
        <div className="flex gap-8">
          {[
  { label: 'Instagram', url: 'https://www.instagram.com/itssarah.mov' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarah-teixeira-barroso-283295195/' },
  { label: 'GitHub', url: 'https://github.com/xcyph' },
].map((s) => (
  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300">
    {s.label}
  </a>
))}
        </div>
        <span className="font-body text-[10px] text-muted">© 2026</span>
      </div>
    </section>
  )
}
