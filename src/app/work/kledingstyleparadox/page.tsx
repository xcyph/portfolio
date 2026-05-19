// src/app/work/kledingstyle-paradox/page.tsx

import Link from 'next/link'
import Image from 'next/image'
import FlipCard from '@/components/FlipCard'

export default function KledingstyleParadox() {
  const images = [
    { id: 1, aspect: 'tall' },
    { id: 2, aspect: 'wide' },
    { id: 3, aspect: 'tall' },
    { id: 4, aspect: 'wide' },
  ]

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
          Kledingstyle<br />
          <span className="italic text-accent">paradox</span>
        </h1>
        <div className="h-px bg-accent/30 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <p className="font-body text-xs text-muted leading-relaxed max-w-md">
            My first photo series, exploring the paradox of clothing styles
            in queer and lesbian communities. Shot on 35mm film across Rotterdam,
            this series investigates how fashion becomes identity, resistance, and belonging.
          </p>
          <div className="flex gap-2 flex-wrap items-start">
            {['Queer', 'Lesbian', 'Photography', '35mm', 'Rotterdam'].map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-widest uppercase px-2 py-1 border border-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Concept tekst */}
<section className="px-8 max-w-6xl mx-auto pb-20">

  {/* CONCEPT */}
  <div className="mb-16">
    <div className="flex items-center gap-6 mb-10">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Concept / idee</span>
      <div className="flex-1 h-px bg-border" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <p className="font-body text-xs text-muted leading-relaxed">
        De kledingstijl Paradox begint bij mijn eigen verhaal. Al vanaf jonge leeftijd voelde ik een
        spanning tussen wie ik ben en wat de wereld van mij verwacht. Ik identificeer me als vrouw,
        maar voel me comfortabel in kleding die als 'mannelijk' wordt gelabeld, en soms ook juist in
        wat 'vrouwelijk' wordt gezien. Die vrijheid voelt voor mij vanzelfsprekend, maar de wereld om
        mij heen reageert daar niet altijd zo op.
      </p>
      <p className="font-body text-xs text-muted leading-relaxed">
        De paradox zit hem in het idee dat een stuk stof een gender zou hebben. Een broek is een broek.
        Inmiddels heb ik die drempel overwonnen. De fotoserie Kledingstijl Paradox is een visueel
        statement over identiteit in een wereld die graag etiketten plakt en over de mensen die daar
        bewust of onbewust buiten vallen.
      </p>
    </div>
  </div>

  {/* REFERENTIE KADER */}
  <div className="mb-16">
    <div className="flex items-center gap-6 mb-10">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Referentie kader</span>
      <div className="flex-1 h-px bg-border" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {[
          'Gender fluid fashion photography',
          'Androgynous portrait photography',
          'Fashion as identity art',
          'Non-binary representation in visual art',
        ].map((item) => (
          <p key={item} className="font-body text-xs text-muted italic tracking-wide border-l border-accent/30 pl-4">
            {item}
          </p>
        ))}
      </div>
      <div className="space-y-6">
        <div>
          <p className="font-body text-xs text-text mb-1">Nan Goldin</p>
          <p className="font-body text-xs text-muted leading-relaxed italic">The Ballad of Sexual Dependency</p>
          <p className="font-body text-xs text-muted leading-relaxed">
            Mensen die gender en identiteit op hun eigen manier leefden, ver buiten de norm. Rauw, intiem en persoonlijk.
          </p>
        </div>
        <div>
          <p className="font-body text-xs text-text mb-1">Del LaGrace Volcano</p>
          <p className="font-body text-xs text-muted leading-relaxed italic">Sublime Mutations</p>
          <p className="font-body text-xs text-muted leading-relaxed">
            Fotografeert lichamen en identiteiten die buiten het binaire systeem vallen.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* IDEEONTWIKKELING */}
  <div className="mb-16">
    <div className="flex items-center gap-6 mb-10">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">De ideeontwikkeling</span>
      <div className="flex-1 h-px bg-border" />
    </div>
    <p className="font-body text-xs text-muted leading-relaxed max-w-2xl">
      Mijn eerste gedachte was om de fotoserie puur over mezelf te maken, een soort zelfportretreeks.
      Maar al snel realiseerde ik me dat het thema groter is dan alleen mijn eigen ervaring. Door andere
      mensen te betrekken die hetzelfde hebben meegemaakt, wordt het een gedeeld verhaal in plaats van
      een persoonlijk één.
    </p>
  </div>

{/* Proces van de shooting */}
<div className="mb-16">
  <div className="flex items-center gap-6 mb-10">
    <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Proces van de shooting</span>
    <div className="flex-1 h-px bg-border" />
  </div>

  {/* Tekst in twee kolommen */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
    <div className="space-y-6">
      <p className="font-body text-xs text-muted leading-relaxed">
        Voor deze shooting nodigde ik mensen uit die dichtbij mij staan en zich identificeren met het
        thema van de Kledingstijl Paradox. Het was belangrijk voor mij dat de mensen voor de camera
        zich op hun gemak voelden.
      </p>
      <p className="font-body text-xs text-muted leading-relaxed">
        Ik stuurde ze een persoonlijke digitale uitnodiging met praktische informatie over de studio,
        de tijden en wat ze mee moesten nemen. Ook voegde ik een moodboard toe zodat ze een idee
        hadden van de sfeer en energie die ik wilde vastleggen niet als strikte richtlijn, maar als
        inspiratie.
      </p>
      <p className="font-body text-xs text-muted leading-relaxed">
        Ik had bewust geen outfits van tevoren geselecteerd of gestyled. Ik wilde dat iedereen zijn of
        haar eigen kleding meebracht, stukken die voor hen persoonlijk betekenis hebben. Dat voelde
        eerlijker en authentieker dan een gecreëerde look. Ter plekke gingen we samen experimenteren
        met combinaties, wat zorgde voor een spontaan en natuurlijk proces.
      </p>
    </div>
    <div className="space-y-6">
      <p className="font-body text-xs text-muted leading-relaxed">
        Een van de uitgenodigden had een plus-één meegenomen. De afspraak was dat ik deze persoon
        alleen zou fotograferen als er na de shoot tijd over was. Maar al snel bleek dat vier uur voor
        drie mensen met elk vier outfits te krap was zeker voor iemand die voor het eerst een shoot
        aanstuurt. Dit realiseerde ik me een dag van tevoren en heb ik eerlijk aangegeven.
      </p>
      <p className="font-body text-xs text-muted leading-relaxed">
        Ondertussen had de plus-één al van alles geregeld zonder dat ik daarom had gevraagd, wat de
        situatie onnodig ingewikkeld maakte. Het was een leerzaam moment: er was een reden waarom ik
        specifiek die ene vriend had uitgenodigd, en ik had bij dat plan moeten blijven. Uiteindelijk
        besloot hij zelf de shoot te skippen vanwege de situatie.
      </p>
      <p className="font-body text-xs text-muted leading-relaxed">
        De tweede persoon belde me op de dag zelf in tranen ze voelde zich niet comfortabel in haar
        lichaam en kon niet komen. Uiteindelijk kwamen alleen mijn vriendin en ik op de studio.
      </p>
    </div>
  </div>

  {/* Uitnodiging afbeeldingen */}
  <div className="grid grid-cols-3 gap-4">
    <div className="relative aspect-[3/4] bg-surface border border-border overflow-hidden">
      <Image
        src="/work/uitnodiging1.JPG"
        alt="Uitnodiging voorpagina"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative aspect-[3/4] bg-surface border border-border overflow-hidden">
      <Image
        src="/work/uitnodiging2.JPG"
        alt="Uitnodiging algemene info"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative aspect-[3/4] bg-surface border border-border overflow-hidden">
      <Image
        src="/work/uitnodiging3.JPG"
        alt="Moodboard"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

{/* Eindresultaat + Reflectie */}
<div className="mb-16">
  <div className="flex items-center gap-6 mb-10">
    <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">Eindresultaat & reflectie</span>
    <div className="flex-1 h-px bg-border" />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div className="space-y-6">
      <p className="font-body text-xs text-muted leading-relaxed">
        Het eindresultaat is niet precies wat ik voor ogen had, maar dat is oké. Ik was tijdens de
        shoot nog aan het experimenteren met het licht, met statief versus handheld en je ziet
        duidelijk een verschil op het moment dat ik de camera in mijn hand pakte en gewoon begon te
        bewegen. Dat was het kantelpunt.
      </p>
      <p className="font-body text-xs text-muted leading-relaxed">
        Het was ook de eerste keer dat ik zelf voor de camera stond. Ik ontdekte dat zitten voor mij
        veel beter werkt dan staan staand voel ik me onzeker, maar zittend kom ik natuurlijker en
        comfortabeler over. Iets wat ik meeneem naar de volgende shoot.
      </p>
    </div>
    <div className="space-y-6">
      <p className="font-body text-xs text-muted leading-relaxed">
        Mijn vriendin was blij met de foto's en heeft een aantal geselecteerd voor haar perskit als DJ.
        Dat ze deze beelden professioneel wil gebruiken, maakt me trots zeker omdat ik geen formele
        fotografieopleiding heb. Binnenkort staat er een nieuwe shoot gepland, en een vriendin heeft
        zelfs een shoot in Amsterdam gecanceld om het bij mij in de studio te doen.
      </p>
      <p className="font-body text-xs text-muted leading-relaxed">
        Ik hoop mijn passie verder te blijven ontwikkelen en te groeien als fotograaf.
      </p>
    </div>
  </div>
</div>

</section>

      {/* Image grid — vervang de gekleurde vlakken met echte <Image /> zodra je foto's hebt */}
      <section className="px-8 max-w-6xl mx-auto pb-32">
        <div className="grid grid-cols-3 gap-1">

          {/* Grote foto — bovenaan volle breedte */}
          <FlipCard
            src="/work/foto1.JPG"
            alt="Kledingstyle paradox foto 1"
            caption="This was the first time I posed lol"
          />

          {/* Twee naast elkaar */}
          <FlipCard
            src="/work/foto2.JPG"
            alt="Kledingstyle paradox foto 2"
            caption="This was the first time I posed lol"
          />
          <FlipCard
            src="/work/foto3.JPG"
            alt="Kledingstyle paradox foto 3"
            caption="This was the first time I posed lol"
          />
          
          <FlipCard
            src="/work/foto4.JPG"
            alt="Kledingstyle paradox foto 4"
            caption="This was the first time I posed lol"
          />

          <FlipCard
            src="/work/foto5.JPG"
            alt="Kledingstyle paradox foto 5"
            caption="This was the first time I posed lol"   
          />

          <FlipCard
            src="/work/foto6.JPG"
            alt="Kledingstyle paradox foto 6"
            caption="This was the first time I posed lol"
          />

          <FlipCard
            src="/work/foto7.JPG"
            alt="Kledingstyle paradox foto 7"
            caption="This was the first time I posed lol"
          />

        </div>
      </section>

      {/* Volgende project link */}
      <section className="border-t border-border py-16 px-8 max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-body text-xs tracking-widest uppercase text-muted">Next project</span>
        <Link
          href="/work/reverie"
          className="group flex items-center gap-4 font-display text-3xl font-light text-text hover:text-accent transition-colors duration-300"
        >
          Reverie
          <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
        </Link>
      </section>

    </main>
  )
}