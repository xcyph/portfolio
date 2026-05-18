'use client'

type FlipCardProps = {
  src: string
  alt: string
  caption: string
}

export default function FlipCard({ src, alt, caption }: FlipCardProps) {
  return (
    <div className="group aspect-square" style={{ perspective: '1000px' }}>
      {/* De kaart die omdraait */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* VOORKANT — de foto */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ACHTERKANT — tekst */}
        <div
          className="absolute inset-0 bg-bg border border-border flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="font-body text-xs text-muted text-center leading-relaxed tracking-wide">
            {caption}
          </p>
        </div>
      </div>

      {/* Flip trigger via CSS — geen JS nodig */}
      <style jsx>{`
        .group:hover > div {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}