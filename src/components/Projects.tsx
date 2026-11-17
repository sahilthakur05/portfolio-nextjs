'use client'
import { useState } from 'react'

const GhIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)
const ExtIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  { name:'comdove', tags:['fullstack','backend'], featured:true, badge:'★ FEATURED',
    desc:'WhatsApp business communication platform. Bulk campaigns, real-time inbox, contact management, and subscription billing. Handles thousands of messages per day.',
    stack:['Next.js','Node.js','PostgreSQL','Redis','BullMQ','WhatsApp API','Razorpay'],
    lang:'TS', stars:12, demo:'https://comdove.com' },
  { name:'bharag / rag-autoreply', tags:['backend','ai'], featured:true, badge:'AI',
    badgeStyle:{ color:'#C792EA', border:'1px solid rgba(199,146,234,.35)' },
    desc:'RAG-based auto-reply engine for WhatsApp inbound messages. Retrieves relevant knowledge and generates context-aware responses, fired back automatically via BullMQ workers.',
    stack:['Node.js','RAG','Vector DB','BullMQ','AWS EC2','PostgreSQL'],
    lang:'JS', stars:0 },
  { name:'wat-backend / distributed', tags:['backend'], featured:true, badge:'★ FEATURED',
    desc:'Monolith → 3-process split: API / broadcast / scheduler. Outbox pattern + priority queues. Proved 1.9× broadcast throughput with horizontal scaling via BullMQ competing consumers.',
    stack:['Node.js','PM2','Redis','BullMQ','PostgreSQL','AWS'],
    lang:'TS', stars:0 },
  { name:'stacx24-outreach', tags:['backend','fullstack'], featured:false, badge:'',
    desc:'Email outreach automation with per-contact UTC send windows, n8n webhook callbacks for status sync, and throttled batch execution. Zero duplicate sends via idempotent job IDs.',
    stack:['Node.js','n8n','PostgreSQL','Cron','SMTP'],
    lang:'JS', stars:0 },
]

const filters = ['all','fullstack','backend','ai']

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = projects.filter(p => active === 'all' || p.tags.includes(active))

  return (
    <section id="projects" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-[#00FF9C] tracking-[.15em] uppercase mb-2">// 04 — projects</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">What I&apos;ve Built</h2>
        <p className="font-mono text-[12px] text-[#3C4048] mb-10">/* production work &amp; personal projects */</p>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-9">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`font-mono text-[11px] border px-4 py-[5px] rounded cursor-pointer transition-all duration-150 ${active === f ? 'text-[#00FF9C] border-[#00FF9C] bg-[rgba(0,255,156,.08)]' : 'text-[#8892B0] border-[#252525] bg-[#111111] hover:text-[#00FF9C] hover:border-[#00FF9C]'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {visible.map(p => (
            <div key={p.name}
              className="bg-[#111111] border border-[#252525] rounded-lg overflow-hidden flex flex-col transition-all duration-150 hover:border-[#00FF9C] hover:-translate-y-[2px]"
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow='0 8px 28px rgba(0,255,156,.07)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow='none')}>

              {/* Header */}
              <div className="bg-[#0D1117] px-4 py-[13px] flex items-center justify-between border-b border-[#252525]">
                <div className="flex items-center gap-2 font-mono text-[12px]">
                  <span className="text-[#3C4048]"><GhIcon /></span>
                  <span className="text-[#58A6FF] font-semibold">{p.name}</span>
                </div>
                {p.badge && (
                  <span className="font-mono text-[9px] border px-2 py-[2px] rounded-sm tracking-wide"
                    style={p.badgeStyle ?? { color:'#00FF9C', border:'1px solid rgba(0,255,156,.35)' }}>
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-4 flex-1">
                <p className="text-[13px] text-[#8892B0] leading-[1.7] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-[5px]">
                  {p.stack.map(s => (
                    <span key={s} className="font-mono text-[10px] text-[#8892B0] border border-[#2D2D2D] px-2 py-[3px] rounded-[3px]">{s}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-[#252525] flex items-center justify-between">
                <div className="flex gap-3">
                  <a href="#" className="inline-flex items-center gap-1 font-mono text-[11px] text-[#8892B0] no-underline transition-colors hover:text-[#00FF9C]">
                    <GhIcon /> source
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-[#8892B0] no-underline transition-colors hover:text-[#00FF9C]">
                      <ExtIcon /> live demo
                    </a>
                  )}
                </div>
                <div className="font-mono text-[11px] text-[#3C4048] flex items-center gap-3">
                  <span>⬡ {p.lang}</span>
                  {p.stars > 0 && <span>★ {p.stars}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
