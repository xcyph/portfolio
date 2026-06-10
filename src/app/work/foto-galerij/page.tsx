import Link from 'next/link'
import Image from 'next/image'

const fotos = [
  { src: '/work/LARA1.JPG', alt: 'Lara 1', caption: '' },
  { src: '/work/LARA2.JPG', alt: 'Lara 2', caption: '' },
  { src: '/work/LARA3.JPG', alt: 'Lara 3', caption: '' },
  { src: '/work/LARA4.JPG', alt: 'Lara 4', caption: '' },
  { src: '/work/LARA5.JPG', alt: 'Lara 5', caption: '' },
  { src: '/work/LARA6.JPG', alt: 'Lara 6', caption: '' },
  { src: '/work/LARA7.JPG', alt: 'Lara 7', caption: '' },
]

export default function FotoGalerij() {
  return (
    <main className="bg-bg min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-light tracking-widest text-text">
            SITB<span className="text-accent">.</span>
          </Link>
          <Link
            href="/#work"
            className="font-body text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
          >
            <span className="block w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            Back to work
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-48 pb-20 px-8 max-w-6xl mx-auto">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
          Photography — 2026
        </p>
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-text leading-none mb-8">
          Foto<br />
          <span className="italic text-accent">galerij</span>
        </h1>
        <div className="h-px bg-accent/30 mb-12" />
        <p className="font-body text-xs text-muted leading-relaxed max-w-md">
          Een selectie portretten.
        </p>
      </section>

      {/* Instagram grid */}
      <section className="px-8 max-w-6xl mx-auto pb-32">
        <div className="grid grid-cols-3 gap-1">
          {fotos.map((foto, index) => (
            <div key={index} className="group relative aspect-square bg-surface overflow-hidden">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {foto.caption && (
                <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="font-body text-xs text-text">{foto.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}