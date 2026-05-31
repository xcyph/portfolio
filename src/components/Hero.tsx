'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (lineRef.current) {
        lineRef.current.style.transform = 'scaleX(1)'
      }
    }, 300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-end pb-24 px-8 max-w-6xl mx-auto relative">
   <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />


      <div className="relative z-10">
        {/* Label */}
        <p
          className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          Creative &amp; Web Developer
        </p>

        {/* Headline */}
        <h1 className="font-display font-light leading-[0.9] mb-12">
          <span
            className="block text-[clamp(4rem,12vw,10rem)] text-text opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            Sarah
          </span>
          <span
            className="block text-[clamp(4rem,12vw,10rem)] text-text opacity-0 animate-fade-up"
            style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}
          >
            &nbsp;
            <span className="italic text-accent">Teixeira</span>
          </span>
        </h1>

        {/* Divider line */}
        <div
          ref={lineRef}
          className="h-px bg-accent/40 mb-12 origin-left transition-transform duration-[1200ms] ease-out"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Bottom row */}
        <div
          className="flex items-end justify-between opacity-0 animate-fade-in"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <p className="font-body text-xs text-muted max-w-xs leading-relaxed tracking-wide">
            Design, code, film &amp; photography.<br />
            Rotterdam based — available worldwide.
          </p>
          <a
            href="#work"
            className="group flex items-center gap-3 font-body text-xs tracking-widest uppercase text-text hover:text-accent transition-colors duration-300"
          >
            View work
            <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted rotate-90 origin-center">scroll</span>
        <div className="w-px h-12 bg-muted/40" />
      </div>
    </section>
  )
}
