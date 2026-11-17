export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-[#00FF9C] tracking-[.15em] uppercase mb-2">// 01 — about</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">Who I Am</h2>
        <p className="font-mono text-[12px] text-[#3C4048] mb-14">/* a developer who prefers shipping over theorizing */</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Bio */}
          <div>
            <p className="text-[14px] text-[#8892B0] leading-[1.8] mb-5">
              I&apos;m a <strong className="text-[#E2E8F0]">Full Stack Developer</strong> with 2.6 years building production
              systems at a startup. My work spans the entire stack — from designing PostgreSQL schemas and Express
              APIs to building responsive React interfaces.
            </p>
            <p className="text-[14px] text-[#8892B0] leading-[1.8] mb-5">
              I&apos;ve shipped features used by real businesses: a{' '}
              <strong className="text-[#E2E8F0]">WhatsApp bulk messaging platform</strong>, an{' '}
              <strong className="text-[#E2E8F0]">AI-powered RAG auto-reply system</strong>, and a distributed
              background job architecture using BullMQ + Redis.
            </p>
            <p className="text-[14px] text-[#8892B0] leading-[1.8]">
              I&apos;m targeting <strong className="text-[#E2E8F0]">MNC engineering roles</strong> where I can work on
              larger distributed systems and grow alongside world-class teams.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[['2.6','years exp'],['10+','features shipped'],['∞','coffees']].map(([n,l]) => (
                <div key={l} className="bg-[#1E1E1E] border border-[#252525] rounded-md px-4 py-5 text-center">
                  <span className="block font-mono text-[28px] font-bold text-[#00FF9C]">{n}</span>
                  <span className="font-mono text-[10px] text-[#8892B0] mt-1 block">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div className="bg-[#1E1E1E] border border-[#252525] rounded-lg overflow-hidden">
            <div className="bg-[#252526] px-4 py-[9px] flex items-center gap-2 border-b border-[#252525]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
              <span className="font-mono text-[11px] text-[#8892B0] mx-auto">sahil@dev: ~</span>
            </div>
            <div className="p-5 font-mono text-[12.5px] leading-[1.9]">
              <div className="flex gap-3 mb-1">
                <span className="text-[#3C4048]">$</span>
                <span className="text-[#E2E8F0]">cat profile.json</span>
              </div>
              <div className="border-t border-[#252525] my-3" />
              {[
                ['name','"Sahil Thakur"'],
                ['location','"India 🇮🇳"'],
                ['experience','"2.6 years"'],
                ['current_role','"Full Stack Dev"'],
                ['target','"MNC Engineering"'],
                ['preparing','"DSA + System Design"'],
                ['email','"thakursahil29124@gmail.com"'],
              ].map(([k,v]) => (
                <div key={k} className="flex gap-2 mb-[2px]">
                  <span className="text-[#00FF9C] min-w-[130px]">{k}</span>
                  <span className="text-[#3C4048]">:</span>
                  <span className="text-[#E2E8F0]">{v}</span>
                </div>
              ))}
              <div className="border-t border-[#252525] my-3" />
              <div className="flex gap-3">
                <span className="text-[#3C4048]">$</span>
                <span className="text-[#00FF9C]">█</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
