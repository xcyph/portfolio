import Link from 'next/link'
import Image from 'next/image'

export default function AddOnEmergencyChip() {
  return (
    <main className="bg-bg min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-light tracking-widest text-text">
            ST<span className="text-accent">.</span>
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
          Opdracht B — 2026
        </p>
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-text leading-none mb-8">
          Add-On<br />
          <span className="italic text-accent">The Emergency Chip</span>
        </h1>
        <div className="h-px bg-accent/30 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <p className="font-body text-xs text-muted leading-relaxed max-w-md">
            Een microchip die je aan de zijkant van je hoofd plaatst. Kleiner dan een pleister,
            bijna niet voelbaar. Hij synchroniseert met je telefoon en slaat de meest essentiële
            gegevens op. Hij doet verder niets. Hij wacht.
          </p>
          <div className="flex gap-2 flex-wrap items-start">
            {['Concept', 'Design', 'Film', 'Toekomst'].map((tag) => (
              <span key={tag} className="font-body text-[10px] tracking-widest uppercase px-2 py-1 border border-border text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Visie */}
      <section className="px-8 max-w-6xl mx-auto pb-20">
        <div className="flex items-center gap-6 mb-10">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Visie</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-body text-xs text-muted leading-relaxed">
            We leven in een wereld waar de samenleving volledig afhankelijk is geworden van één
            apparaat: de telefoon. Om onszelf te identificeren, hebben we een applicatie nodig.
            Voor navigatie vertrouwen we op Google Maps. En betalen? Steeds minder plekken
            accepteren nog cash.
          </p>
          <p className="font-body text-xs text-muted leading-relaxed">
            Maar stel: je verliest je telefoon. Of erger, hij wordt gestolen, op een plek waar je
            de weg niet kent. De telefoon heeft functies overgenomen die ooit in ons zaten:
            geheugen, oriëntatie, identiteit, verbinding. We hebben ze stukje bij beetje
            uitbesteed, zonder het te merken. Daarom bedacht ik The Emergency Chip.
          </p>
        </div>
      </section>

      {/* Concept */}
      <section className="px-8 max-w-6xl mx-auto pb-20">
        <div className="flex items-center gap-6 mb-10">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Het concept</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Bereiken', desc: 'Urgente telefoonnummers altijd beschikbaar, ook zonder telefoon.' },
            { title: 'Navigeren', desc: 'Een noodroute naar huis, gesynchroniseerd bij het instellen.' },
            { title: 'Betalen', desc: 'Toegang tot je bankrekening voor noodbetalingen.' },
          ].map((item) => (
            <div key={item.title} className="border border-border p-6">
              <h3 className="font-display text-2xl font-light text-accent mb-3">{item.title}</h3>
              <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video sectie */}
      <section className="px-8 max-w-6xl mx-auto pb-20">
        <div className="flex items-center gap-6 mb-10">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">De video</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="relative aspect-video bg-surface border border-border overflow-hidden">
          {/* Vervang de src hieronder met je eigen video */}
          <video
            controls
            className="w-full h-full object-cover"
            poster="/work/emergency-chip-poster.jpg"
          >
            <source src="/work/emergency-chip.mp4" type="video/mp4" />
            Je browser ondersteunt geen video.
          </video>
        </div>
        <p className="font-body text-xs text-muted mt-4">
          The Emergency Chip — concept film, 2026
        </p>
      </section>

      {/* Storyboard */}
      <section className="px-8 max-w-6xl mx-auto pb-20">
        <div className="flex items-center gap-6 mb-10">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Storyboard</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="space-y-6">
          {[
            { scene: '01', time: '0:00 – 0:30', title: 'Het probleem', desc: 'Close-up van handen die een telefoon vasthouden. Face ID voor DigiD. Normaal. Vertrouwd.' },
            { scene: '02', time: '0:30 – 0:50', title: 'De telefoon verdwijnt', desc: 'Zakken voelen, zoeken, realisatie: hij is weg. Ergens in the middle of nowhere.' },
            { scene: '03', time: '0:50 – 1:30', title: 'Geen nummers, geen route, geen geld', desc: 'Beelden wisselen snel: lege vaste telefoon, zoekende ogen, hand die tevergeefs naar een automaat gaat.' },
            { scene: '04', time: '1:30 – 2:00', title: 'De paniek', desc: 'Stilte. Verlorenheid. Je staat stil op straat. Omgeving gaat door. Slow motion.' },
            { scene: '05', time: '2:00 – 2:40', title: 'Introductie: The Emergency Chip', desc: 'Close-up van de chip op de slaap. Strak, minimalistisch. Rustige muziek.' },
            { scene: '06', time: '2:40 – 3:30', title: 'De functies activeren', desc: 'Bellen lukt, route verschijnt, betaling werkt. Kalm contrast met de paniek eerder.' },
            { scene: '07', time: '3:30 – 4:00', title: 'De sting', desc: 'Zelfde shot als het begin, maar nu zie je ook de chip. Is dit bevrijding, of ben je nu permanent verbonden?' },
          ].map((item) => (
            <div key={item.scene} className="grid grid-cols-[auto_1fr] gap-8 border-b border-border pb-6">
              <div className="text-right">
                <span className="font-body text-xs text-accent">Scene {item.scene}</span>
                <p className="font-body text-[10px] text-muted mt-1">{item.time}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-light text-text mb-2">{item.title}</h3>
                <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiratie */}
      <section className="px-8 max-w-6xl mx-auto pb-20">
        <div className="flex items-center gap-6 mb-10">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Inspiratie</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Detroit: Become Human', desc: 'De indicator aan de zijkant van het hoofd — blauw of rood — als visuele inspiratie voor de chip.' },
            { title: 'Black Mirror', desc: '"The Entire History of You" en "Nosedive" — over geheugenimplantaten en de prijs van technologie.' },
            { title: 'Andy Clark', desc: 'Filosoof die stelt dat onze telefoon al een verlengstuk van ons brein is.' },
          ].map((item) => (
            <div key={item.title} className="border-l border-accent/30 pl-4">
              <h3 className="font-body text-xs text-accent tracking-widest uppercase mb-2">{item.title}</h3>
              <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volgende project */}
      <section className="border-t border-border py-16 px-8 max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-body text-xs tracking-widest uppercase text-muted">Next project</span>
        <Link
          href="/work/kledingstyle-paradox"
          className="group flex items-center gap-4 font-display text-3xl font-light text-text hover:text-accent transition-colors duration-300"
        >
          Kledingstyle paradox
          <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
        </Link>
      </section>

    </main>
  )
}