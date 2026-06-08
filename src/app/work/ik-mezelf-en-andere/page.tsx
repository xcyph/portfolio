import Link from 'next/link'

export default function IkMezelfEnAndere() {
  return (
    <main className="min-h-screen bg-bg">
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

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-8 max-w-6xl mx-auto">
        <div className="flex items-start justify-between border-b border-border pb-8 mb-12">
          <span className="font-body text-xs tracking-widest uppercase text-muted">WDKA — Toelatingsopdracht</span>
          <span className="font-body text-xs text-muted">2026</span>
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-light text-text mb-10 leading-none">
          Ik, Mezelf<br />en Andere
        </h1>
        <div className="flex gap-4 flex-wrap">
          {['Videotriptiek', 'Zelfportret', 'Film & Montage'].map((tag) => (
            <span
              key={tag}
              className="font-body text-xs tracking-widest uppercase border border-border px-4 py-2 text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Cover image ───────────────────────────────────── */}
      <section className="px-8 max-w-6xl mx-auto pb-20">
        <div className="w-full aspect-video bg-surface overflow-hidden">
          <img
            src="/work/DSC_0070.JPG"
            alt="Ik, Mezelf en Andere — Sarah Teixeira Barroso"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Inleiding ─────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-6xl mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-body text-xs tracking-widest uppercase text-accent mb-6">Inleiding</h2>
            <p className="font-display text-2xl md:text-3xl font-light text-text leading-snug">
              "Ik ben iemand die niet vaak naar mezelf kijkt. Maar ik zit in een periode van helen, van loslaten, van uitvinden wat ik eigenlijk wil."
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <p className="font-body text-xs text-muted leading-relaxed">
              Deze opdracht was confronterend om te maken. Ze dwong mij om naar drie dingen te kijken: wie ik nu ben, wat mijn gekozen familie van mij denkt, en waar ik uiteindelijk wil zijn.
            </p>
            <p className="font-body text-xs text-muted leading-relaxed">
              Als inspiratiebron koos ik de Britse kunstenares{' '}
              <span className="text-text">Tracey Emin</span>, bekend om haar rauw autobiografische werk
              waarin ze zichzelf zonder filter laat zien — inclusief de minder mooie kanten.
            </p>
          </div>
        </div>
      </section>

      {/* ── Inspiratie ────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-6xl mx-auto border-t border-border">
        <h2 className="font-body text-xs tracking-widest uppercase text-accent mb-10">Inspiratie</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Tracey Emin — My Bed',
              desc: '1998. Haar onopgemaakte bed omringd door persoonlijke spullen. Een eerlijk beeld van haar mentale toestand na een depressieve periode. Dat bed kende ik.',
            },
            {
              title: 'De kameleon',
              desc: 'Mijn hele leven werd ik beschreven als stil, makkelijk, niet moeilijk. Ik observeer, ik pas me aan. Maar voor het eerst stel ik de vraag: wat wil ik eigenlijk zelf?',
            },
            {
              title: 'Gekozen familie',
              desc: 'Shaniqua en Lara. Twee mensen die mij goed genoeg kennen om eerlijk te zijn — en die bereid waren dat op camera te doen.',
            },
          ].map((item) => (
            <div key={item.title} className="border-l border-accent/30 pl-6">
              <h3 className="font-body text-xs text-accent tracking-widest uppercase mb-3">{item.title}</h3>
              <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Deel 1 ────────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-6xl mx-auto border-t border-border">
        <div className="mb-12 flex items-baseline gap-6">
          <span className="font-body text-xs tracking-widest uppercase text-muted">01</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-text">Hoe zie ik mijzelf?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5">
            <p className="font-body text-xs text-muted leading-relaxed">
              Ik film mezelf in mijn bed. Korte momenten wisselen af — ik maak me klaar, ik kijk in de
              spiegel, ik kleed me vrouwelijk en mannelijk. Twee kanten van wie ik ben.
            </p>
            <p className="font-body text-xs text-muted leading-relaxed">
              Er is een moment waarop ik in de spiegel kijk en mezelf de vraag stel: wat denken anderen
              eigenlijk van mij? Dat is het punt waarop ik de woorden van Shaniqua en Lara binnenlaat.
            </p>
            <p className="font-body text-xs text-muted leading-relaxed">
              De video sluit af met een minuut van glimlachen. Van klein en ingehouden naar voluit lachen.
              Een knuffel aan mezelf.
            </p>
          </div>
          <div className="border-l border-accent/30 pl-8">
            <p className="font-display text-xl font-light text-text/80 leading-relaxed italic">
              "Ik ben een vrouw die vloeiend omgaat met zowel mannelijke als vrouwelijke energie. Die
              twijfel is niet van mij — die heb ik overgenomen van mensen die mij altijd hebben beoordeeld."
            </p>
          </div>
        </div>
        {/* VIDEO DEEL 1 — vervang JOUW_VIDEO_ID_DEEL1 door je YouTube video-ID */}
        <div className="w-full aspect-video bg-surface">
          <iframe
            src="https://www.youtube.com/embed/3_RG_4_hU5c"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Ik, Mezelf en Andere — Deel 1"
          />
        </div>
      </section>

      {/* ── Deel 2 ────────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-6xl mx-auto border-t border-border">
        <div className="mb-12 flex items-baseline gap-6">
          <span className="font-body text-xs tracking-widest uppercase text-muted">02</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-text">Mezelf in relatie tot andere</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5">
            <p className="font-body text-xs text-muted leading-relaxed">
              Ik breng de laatste tijd veel tijd door met Shaniqua en Lara, dus heb ik hen gevraagd wat zij
              van mij vinden. Ik vond het heel bijzonder om dit terug te kijken en te bewerken.
            </p>
            <p className="font-body text-xs text-muted leading-relaxed">
              Het liefst had ik nog meer mensen opgenomen, maar ik merkte dat het voor velen moeilijk is
              om voor de camera zo'n confronterende vraag eerlijk te beantwoorden.
            </p>
          </div>
          <div className="border-l border-accent/30 pl-8">
            <p className="font-display text-xl font-light text-text/80 leading-relaxed italic">
              "Wat zegt mijn sociale kring over mij?"
            </p>
          </div>
        </div>
        {/* VIDEO DEEL 2 — vervang JOUW_VIDEO_ID_DEEL2 door je YouTube video-ID */}
        <div className="w-full aspect-video bg-surface">
          <iframe
            src="https://www.youtube.com/embed/sC0IwRPP70g"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Ik, Mezelf en Andere — Deel 2"
          />
        </div>
      </section>

      {/* ── Deel 3 ────────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-6xl mx-auto border-t border-border">
        <div className="mb-12 flex items-baseline gap-6">
          <span className="font-body text-xs tracking-widest uppercase text-muted">03</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-text">Mezelf in relatie tot mijn wensbeeld</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5">
            <p className="font-body text-xs text-muted leading-relaxed">
              Mijn wensbeeld is niet per se om over 10 jaar alles op orde te hebben. Ik wil gewoon verder
              zijn. Verder in mezelf kennen, verder op een pad waar ik energie van krijg.
            </p>
            <p className="font-body text-xs text-muted leading-relaxed">
              Ik wil verhalen vertellen — van mezelf, maar ook voor anderen. Werken met mensen die hun
              creativiteit met mij willen delen, zodat ik die in beelden kan brengen waar kijkers zich in
              herkennen of door worden geïnspireerd.
            </p>
          </div>
          <div className="border-l border-accent/30 pl-8">
            <p className="font-display text-xl font-light text-text/80 leading-relaxed italic">
              "Ik hoop dat ik over 10 jaar nog steeds aan het leren ben. Dat voelt voor mij meer als slagen
              dan een eindbestemming bereiken."
            </p>
          </div>
        </div>
        {/* VIDEO DEEL 3 */}
        <div className="w-full aspect-video bg-surface">
          <iframe
            src="https://www.youtube.com/embed/3_RG_4_hU5c"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Ik, Mezelf en Andere — Deel 3"
          />
        </div>
      </section>

      {/* ── Reflectie ─────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-6xl mx-auto border-t border-border">
        <h2 className="font-body text-xs tracking-widest uppercase text-accent mb-10">Reflectie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-5">
            <p className="font-body text-xs text-muted leading-relaxed">
              Uiteindelijk heb ik het anders gedaan dan ik had gepland. Het storyboard, de shots, de
              verschillende kleding — ik heb dat allemaal losgelaten. Ik heb besloten om gewoon voor de
              camera te gaan zitten en te praten. De ruwe versie. Niet een versie die ik wilde presenteren,
              maar wie ik op dat moment was.
            </p>
            <p className="font-body text-xs text-muted leading-relaxed">
              Deel 2 heb ik apart gehouden. Shaniqua en Lara die over mij praten, is een eigen video
              geworden. Deel 1 en 3 heb ik zelf gefilmd, improviserend en opzeggend wat er in me opkwam.
              Ik heb meerdere pogingen gedaan, want ik vind het moeilijk om over mezelf te praten.
              Maar ik heb het gedaan.
            </p>
          </div>
          <div className="space-y-5">
            <p className="font-body text-xs text-muted leading-relaxed">
              Als je goed kijkt naar de video, zie je hoe mijn stem verandert. Ik begin enthousiast, maar
              word daarna stiller en verdrietiger. Aan het einde is er een soort frustratie — niet omdat
              het misging, maar omdat dit onderwerp mij raakt. Omdat ik het moeilijk vind om mezelf
              echt te zien.
            </p>
            <p className="font-body text-xs text-muted leading-relaxed">
              Ik weet niet of mijn boodschap volledig duidelijk is. Maar ik ben er trots op dat ik dit heb
              ingediend. Dat ik het toch heb afgemaakt, zegt misschien meer over mij dan de video zelf.
            </p>
          </div>
        </div>
      </section>

      {/* ── Volgende project ──────────────────────────────── */}
      <section className="border-t border-border py-16 px-8 max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-body text-xs tracking-widest uppercase text-muted">Next project</span>
        <Link
          href="/work/addon"
          className="group flex items-center gap-4 font-display text-3xl font-light text-text hover:text-accent transition-colors duration-300"
        >
          Add On — The Urgent Chip
          <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            ↗
          </span>
        </Link>
      </section>

    </main>
  )
}