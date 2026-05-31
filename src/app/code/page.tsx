import Link from 'next/link'

async function getRepos() {
  const res = await fetch(
    'https://api.github.com/users/xcyph/repos?sort=updated&per_page=12',
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) return []
  return res.json()
}

export default async function Code() {
  const repos = await getRepos()

  return (
    <main className="bg-bg min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-light tracking-widest text-text">
            ST<span className="text-accent">.</span>
          </Link>
          <Link href="/" className="font-body text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300 flex items-center gap-3 group">
            <span className="block w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            Back
          </Link>
        </div>
      </nav>

      <section className="pt-48 pb-20 px-8 max-w-6xl mx-auto">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">Open source</p>
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-text leading-none mb-8">
          Code &amp;<br />
          <span className="italic text-accent">Repositories</span>
        </h1>
        <div className="h-px bg-accent/30 mb-12" />
        <p className="font-body text-xs text-muted leading-relaxed max-w-md">
          Een overzicht van mijn publieke projecten op GitHub.
        </p>
      </section>

      <section className="px-8 max-w-6xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo: any) => (
            <Link
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border p-6 hover:border-accent/40 transition-all duration-300 hover:bg-surface"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-light text-text group-hover:text-accent transition-colors duration-300">
                  {repo.name}
                </h3>
                <span className="text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform text-sm">
                  &uarr;
                </span>
              </div>
              {repo.description && (
                <p className="font-body text-xs text-muted leading-relaxed mb-4">
                  {repo.description}
                </p>
              )}
              <div className="flex items-center gap-4">
                {repo.language && (
                  <span className="font-body text-[10px] tracking-widest uppercase px-2 py-1 border border-border text-muted">
                    {repo.language}
                  </span>
                )}
                <span className="font-body text-[10px] text-muted">
                  {repo.stargazers_count} stars
                </span>
                <span className="font-body text-[10px] text-muted ml-auto">
                  {new Date(repo.updated_at).toLocaleDateString('nl-NL', { month: 'short', year: 'numeric' })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}