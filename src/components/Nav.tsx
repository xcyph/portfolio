'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 border-b border-border bg-bg/80 backdrop-blur-md' : 'py-8'}`}>
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-light tracking-widest text-text">
          ST<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-10">
          <a href="#work" className="font-body text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300">work</a>
          <a href="#about" className="font-body text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300">about</a>
          <a href="#contact" className="font-body text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300">contact</a>
          <a href="/code" className="font-body text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300">code</a>
        <button
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  className="font-body text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300"
>
  {theme === 'dark' ? 'light' : 'dark'}
</button>
        </div>
      </div>
    </nav>
  )
}