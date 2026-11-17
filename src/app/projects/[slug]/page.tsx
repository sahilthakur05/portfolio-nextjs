import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectVideoPlayer from '@/components/ProjectVideoPlayer'

export const instant = false

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} — Sahil Thakur`,
    description: project.shortDesc,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  const badgeStyle = project.badgeColor
    ? { color: project.badgeColor, border: `1px solid ${project.badgeBorder}` }
    : { color: '#00FF9C', border: '1px solid rgba(0,255,156,.35)' }

  const related = projects
    .filter(p => p.slug !== project.slug && p.tags.some(t => project.tags.includes(t)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[#080808] text-[#E2E8F0]">

      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#252525]">
        <div className="max-w-6xl mx-auto px-6 h-[58px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="font-mono text-[17px] font-bold text-[#00FF9C]">&lt;/&gt;</span>
            <span className="font-mono text-[13px] font-semibold text-[#E2E8F0] hidden sm:block">Sahil Thakur</span>
          </Link>
          <Link href="/#projects"
            className="font-mono text-[12px] text-[#8892B0] border border-[#252525] px-4 py-[6px] rounded-md no-underline transition-all hover:text-[#00FF9C] hover:border-[#00FF9C]">
            ← Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="relative h-[220px] flex flex-col items-center justify-center gap-3 overflow-hidden pt-[58px]"
        style={{ background: project.gradient }}>
        <span className="text-[64px] select-none relative z-10">{project.icon}</span>
        {project.badge && (
          <span className="font-mono text-[10px] border px-3 py-[3px] rounded-sm tracking-widest uppercase backdrop-blur-sm bg-[rgba(0,0,0,.35)] relative z-10"
            style={badgeStyle}>
            {project.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to top, #080808, transparent)' }} />
      </div>

      {/* Two-column main */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* LEFT — narrative */}
          <div className="pt-10">
            <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-[1.08] mb-5">
              {project.name}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(t => (
                <span key={t} className="font-mono text-[10px] text-[#00FF9C] bg-[rgba(0,255,156,.08)] border border-[rgba(0,255,156,.2)] px-3 py-[3px] rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap mb-12">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[12px] font-bold text-black bg-[#00FF9C] border border-[#00FF9C] px-5 py-[9px] rounded-md no-underline transition-all hover:bg-transparent hover:text-[#00FF9C]">
                  ↗ Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[12px] text-[#8892B0] border border-[#252525] px-5 py-[9px] rounded-md no-underline transition-all hover:text-[#E2E8F0] hover:border-[#8892B0]">
                  ⬡ GitHub
                </a>
              )}
            </div>

            {/* About */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase">// About the project</span>
                <span className="flex-1 h-px bg-[#252525]" />
              </div>
              <p className="text-[14.5px] text-[#8892B0] leading-[1.85]">{project.fullDesc}</p>
            </div>

            {/* Why */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] text-[#FFBD2E] tracking-[.2em] uppercase">// Why we built it</span>
                <span className="flex-1 h-px bg-[#252525]" />
              </div>
              <div className="border-l-[3px] border-[#FFBD2E] rounded-r-lg bg-[#111111] border border-[#252525] p-5"
                style={{ borderLeft: '3px solid #FFBD2E' }}>
                <p className="text-[14px] text-[#8892B0] leading-[1.85]">{project.why}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase">// Key features</span>
                <span className="flex-1 h-px bg-[#252525]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#111111] border border-[#252525] rounded-lg p-4 transition-colors hover:border-[rgba(0,255,156,.3)]">
                    <span className="text-[#00FF9C] font-mono text-[12px] mt-[1px] flex-shrink-0">▹</span>
                    <span className="text-[13px] text-[#8892B0] leading-[1.6]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — sticky sidebar */}
          <div className="pt-10 lg:sticky lg:top-[74px] flex flex-col gap-4">

            {/* Video player */}
            <ProjectVideoPlayer />

            {/* Project meta */}
            <div className="bg-[#111111] border border-[#252525] rounded-xl p-5">
              <p className="font-mono text-[9px] text-[#00FF9C] tracking-[.2em] uppercase mb-4">// Project info</p>
              {[
                { k: 'STATUS',   v: 'Production', green: true },
                { k: 'LANGUAGE', v: `⬡ ${project.lang === 'TS' ? 'TypeScript' : 'JavaScript'}` },
                { k: 'CATEGORY', v: project.tags.join(' · ') },
                ...(project.demo ? [{ k: 'LIVE URL', v: project.demo, link: project.demo }] : []),
              ].map(row => (
                <div key={row.k} className="flex items-center justify-between py-[9px] border-b border-[#1a1a1a] last:border-0">
                  <span className="font-mono text-[9px] text-[#3C4048]">{row.k}</span>
                  {'link' in row && row.link ? (
                    <a href={row.link} target="_blank" rel="noreferrer"
                      className="font-mono text-[10px] text-[#00FF9C] no-underline hover:underline truncate max-w-[180px]">
                      {row.v}
                    </a>
                  ) : (
                    <span className={`font-mono text-[10px] ${'green' in row && row.green ? 'text-[#00FF9C]' : 'text-[#8892B0]'}`}>
                      {row.v}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="bg-[#111111] border border-[#252525] rounded-xl p-5">
              <p className="font-mono text-[9px] text-[#00FF9C] tracking-[.2em] uppercase mb-4">// Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="font-mono text-[10px] text-[#E2E8F0] bg-[#1E1E1E] border border-[#2D2D2D] px-3 py-[5px] rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[#252525]">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-[#252525]" />
              <span className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase">Related projects</span>
              <span className="flex-1 h-px bg-[#252525]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(p => (
                <Link key={p.slug} href={`/projects/${p.slug}`}
                  className="bg-[#111111] border border-[#252525] rounded-xl overflow-hidden no-underline group transition-all hover:border-[rgba(0,255,156,.4)] hover:-translate-y-[2px]">
                  <div className="h-[80px] flex items-center justify-center text-[36px]"
                    style={{ background: p.gradient }}>
                    {p.icon}
                  </div>
                  <div className="p-4">
                    <h3 className="font-sans text-[13px] font-bold text-[#E2E8F0] mb-1 group-hover:text-[#00FF9C] transition-colors">{p.name}</h3>
                    <p className="font-mono text-[10px] text-[#3C4048] line-clamp-2">{p.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
