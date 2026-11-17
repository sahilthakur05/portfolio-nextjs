const groups = [
  {
    icon: '🖥',
    label: 'frontend',
    sub: 'UI layer',
    tags: [
      { name: 'React',        color: '#61DAFB' },
      { name: 'Next.js',      color: '#ffffff' },
      { name: 'TypeScript',   color: '#3178C6' },
      { name: 'JavaScript',   color: '#F7DF1E' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
      { name: 'HTML5 / CSS3', color: '#E34F26' },
    ],
  },
  {
    icon: '⚙️',
    label: 'backend',
    sub: 'API layer',
    tags: [
      { name: 'Node.js',       color: '#339933' },
      { name: 'Express.js',    color: '#888888' },
      { name: 'Prisma ORM',    color: '#5A67D8' },
      { name: 'BullMQ',        color: '#E11D48' },
      { name: 'REST APIs',     color: '#8892B0' },
      { name: 'WebSockets/SSE',color: '#8892B0' },
    ],
  },
  {
    icon: '🗄',
    label: 'databases',
    sub: 'data layer',
    tags: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'Redis',      color: '#DC382D' },
      { name: 'Supabase',   color: '#3ECF8E' },
      { name: 'SQL',        color: '#8892B0' },
    ],
  },
  {
    icon: '☁️',
    label: 'devops',
    sub: 'infra',
    tags: [
      { name: 'AWS Lightsail',   color: '#FF9900' },
      { name: 'AWS CloudWatch',  color: '#FF9900' },
      { name: 'PM2',             color: '#8892B0' },
      { name: 'Nginx',           color: '#009639' },
      { name: 'Docker',          color: '#2496ED' },
      { name: 'Git',             color: '#F05032' },
      { name: 'Linux',           color: '#8892B0' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-[#00FF9C] tracking-[.15em] uppercase mb-2">// 02 — skills</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">Tech Stack</h2>
        <p className="font-mono text-[12px] text-[#3C4048] mb-14">/* things I actually use in production */</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {groups.map(g => (
            <div key={g.label} className="bg-[#111111] border border-[#252525] rounded-lg overflow-hidden">
              <div className="bg-[#0d0d0d] border-b border-[#252525] px-4 py-3 flex items-center gap-2">
                <span className="text-[13px]">{g.icon}</span>
                <span className="font-mono text-[11px] text-[#8892B0] tracking-wide">
                  <span className="text-[#00FF9C]">{g.label}</span> / {g.sub}
                </span>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {g.tags.map(t => (
                  <span key={t.name}
                    className="inline-flex items-center gap-[6px] font-mono text-[11px] text-[#E2E8F0] bg-[#1E1E1E] border border-[#2D2D2D] px-3 py-[5px] rounded cursor-default transition-all duration-150 hover:border-[#00FF9C] hover:text-[#00FF9C] hover:bg-[rgba(0,255,156,.08)]">
                    <span className="w-[6px] h-[6px] rounded-full inline-block flex-shrink-0" style={{ background: t.color }} />
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
