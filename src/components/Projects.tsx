'use client'
import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

const filters = ['all', 'fullstack', 'backend', 'ai', 'frontend']
const INITIAL_SHOW = 6

export default function Projects() {
  const [active, setActive] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filtered = projects.filter(p => active === 'all' || p.tags.includes(active))
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_SHOW)

  return (
    <section id="projects" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-[#00FF9C] tracking-[.15em] uppercase mb-2">// 04 — projects</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">What I&apos;ve Built</h2>
        <p className="font-mono text-[12px] text-[#3C4048] mb-10">/* production work &amp; personal projects */</p>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-9">
          {filters.map(f => (
            <button key={f} onClick={() => { setActive(f); setShowAll(false) }}
              className={`font-mono text-[11px] border px-4 py-[5px] rounded cursor-pointer transition-all duration-150 ${active === f ? 'text-[#00FF9C] border-[#00FF9C] bg-[rgba(0,255,156,.08)]' : 'text-[#8892B0] border-[#252525] bg-[#111111] hover:text-[#00FF9C] hover:border-[#00FF9C]'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map(p => {
            const badgeStyle = p.badgeColor
              ? { color: p.badgeColor, border: `1px solid ${p.badgeBorder}` }
              : { color: '#00FF9C', border: '1px solid rgba(0,255,156,.35)' }

            return (
              <Link key={p.slug} href={`/projects/${p.slug}`}
                className="bg-[#111111] border border-[#252525] rounded-lg overflow-hidden flex flex-col no-underline transition-all duration-150 hover:border-[#00FF9C] hover:-translate-y-[2px] group"
                style={{ boxShadow: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,255,156,.07)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}>

                {/* Image banner */}
                <div className="relative h-[130px] overflow-hidden flex items-center justify-center"
                  style={{ background: p.gradient }}>
                  <span className="text-[52px] select-none opacity-80 group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                  {p.badge && (
                    <span className="absolute top-3 right-3 font-mono text-[9px] border px-2 py-[2px] rounded-sm tracking-wide backdrop-blur-sm bg-[rgba(0,0,0,.4)]"
                      style={badgeStyle}>
                      {p.badge}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-8"
                    style={{ background: 'linear-gradient(to top, #111111, transparent)' }} />
                </div>

                {/* Body */}
                <div className="p-4 flex-1">
                  <h3 className="font-sans text-[14px] font-bold text-[#E2E8F0] mb-2 group-hover:text-[#00FF9C] transition-colors">{p.name}</h3>
                  <p className="text-[12.5px] text-[#8892B0] leading-[1.65] mb-4 line-clamp-3">{p.shortDesc}</p>
                  <div className="flex flex-wrap gap-[5px]">
                    {p.stack.slice(0, 4).map(s => (
                      <span key={s} className="font-mono text-[10px] text-[#8892B0] border border-[#2D2D2D] px-2 py-[3px] rounded-[3px]">{s}</span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="font-mono text-[10px] text-[#3C4048] border border-[#252525] px-2 py-[3px] rounded-[3px]">+{p.stack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-[#252525] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#00FF9C]">View case study →</span>
                  <span className="font-mono text-[11px] text-[#3C4048]">⬡ {p.lang}</span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* See More / See Less */}
        {filtered.length > INITIAL_SHOW && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className="font-mono text-[12px] text-[#8892B0] border border-[#252525] bg-[#111111] px-7 py-3 rounded-md cursor-pointer transition-all duration-150 hover:text-[#00FF9C] hover:border-[#00FF9C] hover:bg-[rgba(0,255,156,.05)]">
              {showAll
                ? '$ collapse --projects'
                : `$ show --all (${filtered.length - INITIAL_SHOW} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
