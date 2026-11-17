import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'

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

  const relatedProjects = projects
    .filter(p => p.slug !== project.slug && p.tags.some(t => project.tags.includes(t)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[#080808] text-[#E2E8F0]">

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#252525]">
        <div className="max-w-4xl mx-auto px-6 h-[58px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="font-mono text-[17px] font-bold text-[#00FF9C]">&lt;/&gt;</span>
            <span className="font-mono text-[13px] font-semibold text-[#E2E8F0] hidden sm:block">Sahil Thakur</span>
          </Link>
          <Link href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[12px] text-[#8892B0] border border-[#252525] px-4 py-[6px] rounded-md no-underline transition-all hover:text-[#00FF9C] hover:border-[#00FF9C]">
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative h-[280px] sm:h-[340px] flex flex-col items-center justify-center overflow-hidden pt-[58px]"
        style={{ background: project.gradient }}>
        <span className="text-[80px] mb-4 select-none">{project.icon}</span>
        {project.badge && (
          <span className="font-mono text-[10px] border px-3 py-[3px] rounded-sm tracking-widest uppercase backdrop-blur-sm bg-[rgba(0,0,0,.35)]"
            style={badgeStyle}>
            {project.badge}
          </span>
        )}
        {/* fade to background */}
        <div className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(to top, #080808, transparent)' }} />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24">

        {/* Title + tags */}
        <div className="mb-10">
          <h1 className="text-[clamp(28px,5vw,48px)] font-extrabold tracking-tight mb-4">{project.name}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(t => (
              <span key={t} className="font-mono text-[11px] text-[#00FF9C] bg-[rgba(0,255,156,.08)] border border-[rgba(0,255,156,.2)] px-3 py-[4px] rounded-full">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[13px] font-bold text-black bg-[#00FF9C] border border-[#00FF9C] px-5 py-[9px] rounded-md no-underline transition-all hover:bg-transparent hover:text-[#00FF9C]">
                ↗ Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[13px] text-[#8892B0] border border-[#252525] px-5 py-[9px] rounded-md no-underline transition-all hover:text-[#E2E8F0] hover:border-[#8892B0]">
                ⬡ GitHub
              </a>
            )}
          </div>
        </div>

        {/* Two column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">

          {/* Main content */}
          <div className="flex flex-col gap-10">

            {/* About */}
            <div>
              <p className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase mb-4">// About the project</p>
              <p className="text-[15px] text-[#8892B0] leading-[1.85]">{project.fullDesc}</p>
            </div>

            {/* Why */}
            <div className="bg-[#111111] border border-[#252525] rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#FFBD2E] rounded-l-lg" />
              <p className="font-mono text-[10px] text-[#FFBD2E] tracking-[.2em] uppercase mb-4">// Why we built it</p>
              <p className="text-[14.5px] text-[#8892B0] leading-[1.85]">{project.why}</p>
            </div>

            {/* Features */}
            <div>
              <p className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase mb-5">// Key features</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#111111] border border-[#252525] rounded-md p-4">
                    <span className="text-[#00FF9C] font-mono text-[12px] mt-[1px] flex-shrink-0">▹</span>
                    <span className="text-[13.5px] text-[#8892B0] leading-[1.6]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">

            {/* Tech stack */}
            <div className="bg-[#111111] border border-[#252525] rounded-lg p-5">
              <p className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase mb-4">// Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="font-mono text-[11px] text-[#E2E8F0] bg-[#1E1E1E] border border-[#2D2D2D] px-3 py-[5px] rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="bg-[#111111] border border-[#252525] rounded-lg p-5">
              <p className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase mb-4">// Info</p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-mono text-[9px] text-[#3C4048] mb-1">LANGUAGE</p>
                  <p className="font-mono text-[12px] text-[#E2E8F0]">⬡ {project.lang === 'TS' ? 'TypeScript' : 'JavaScript'}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-[#3C4048] mb-1">CATEGORY</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] text-[#8892B0]">{t}</span>
                    ))}
                  </div>
                </div>
                {project.demo && (
                  <div>
                    <p className="font-mono text-[9px] text-[#3C4048] mb-1">LIVE URL</p>
                    <a href={project.demo} target="_blank" rel="noreferrer"
                      className="font-mono text-[11px] text-[#00FF9C] no-underline hover:underline break-all">
                      {project.demo}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#252525]">
            <p className="font-mono text-[10px] text-[#00FF9C] tracking-[.2em] uppercase mb-6">// Related projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProjects.map(p => (
                <Link key={p.slug} href={`/projects/${p.slug}`}
                  className="bg-[#111111] border border-[#252525] rounded-lg overflow-hidden no-underline group transition-all hover:border-[#00FF9C] hover:-translate-y-[2px]">
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
