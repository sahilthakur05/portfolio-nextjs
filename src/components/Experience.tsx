const jobs = [
  {
    hash: 'a3f9e21',
    branch: 'HEAD → main',
    role: 'Full Stack Developer',
    company: 'Stacx24 / ComDove',
    date: 'Aug 2022 → Present · 2.6 years',
    desc: 'Built and maintained a full-stack WhatsApp business communication platform from scratch. Architected a distributed backend split into 3 PM2 processes (API / broadcast / scheduler) using an outbox pattern and Redis-backed BullMQ queues. Integrated Meta\'s WhatsApp Business API, implemented an AI-powered RAG auto-reply engine, Razorpay subscription billing, and deployed to AWS Lightsail with CloudWatch monitoring.',
    chips: ['React','Next.js','Node.js','Express','PostgreSQL','Redis','BullMQ','AWS','PM2','Prisma'],
    accentColor: '#00FF9C',
  },
  {
    hash: '0d1f8b3',
    branch: 'origin',
    role: 'Junior Web Developer',
    company: 'Startup (Early Stage)',
    date: 'Jan 2022 → Aug 2022 · 8 months',
    desc: 'Started as a junior developer building internal tools and dashboards. Worked across the full stack, picked up PostgreSQL and Express, and quickly took ownership of features end-to-end.',
    chips: ['JavaScript','React','Node.js','PostgreSQL'],
    accentColor: '#58A6FF',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-[#00FF9C] tracking-[.15em] uppercase mb-2">// 03 — experience</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">Work History</h2>
        <p className="font-mono text-[12px] text-[#3C4048] mb-14">/* git log --format=&quot;%h %s&quot; --all */</p>

        <div className="font-mono text-[12px]">
          {jobs.map((j, idx) => (
            <div key={j.hash} className="grid gap-x-6" style={{ gridTemplateColumns: 'auto 1fr' }}>
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <div className="w-[11px] h-[11px] rounded-full border-2 flex-shrink-0 mt-1 relative z-10 bg-[#080808]"
                  style={{ borderColor: j.accentColor }} />
                {idx < jobs.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#252525] mt-1" />
                )}
              </div>

              {/* Content */}
              <div className={idx < jobs.length - 1 ? 'pb-12' : ''}>
                <p className="text-[10px] mb-1" style={{ color: j.accentColor }}>
                  commit {j.hash} · {j.branch}
                </p>
                <h3 className="text-[17px] font-bold text-[#E2E8F0] font-sans mb-[2px]">{j.role}</h3>
                <p className="text-[12px] mb-1" style={{ color: j.accentColor === '#00FF9C' ? '#58A6FF' : '#58A6FF' }}>{j.company}</p>
                <p className="text-[10px] text-[#3C4048] mb-4">{j.date}</p>
                <p className="font-sans text-[13.5px] text-[#8892B0] leading-[1.75] mb-4">{j.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {j.chips.map(c => (
                    <span key={c} className="font-mono text-[10px] px-[9px] py-[3px] rounded-[3px]"
                      style={{
                        color: j.accentColor,
                        background: j.accentColor === '#00FF9C' ? 'rgba(0,255,156,.08)' : 'rgba(88,166,255,.08)',
                        border: `1px solid ${j.accentColor === '#00FF9C' ? 'rgba(0,255,156,.2)' : 'rgba(88,166,255,.2)'}`,
                      }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
