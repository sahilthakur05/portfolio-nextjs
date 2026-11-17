'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const MatrixRain = dynamic(() => import('./MatrixRain'), { ssr: false })

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <MatrixRain />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT — Terminal intro */}
          <div className="flex flex-col gap-6 order-1 lg:order-1">
            <p className="font-mono text-[12px] text-[#8892B0]">
              <span className="text-[#00FF9C]">sahil@dev</span>:~$ whoami
            </p>

            <div>
              <p className="font-mono text-[13px] text-[#3C4048] mb-3">// Hello, World 👋</p>
              <h1 className="text-[clamp(38px,5.5vw,64px)] font-extrabold leading-[1.08] tracking-tight">
                Sahil<br /><span className="text-[#00FF9C]">Thakur.</span>
              </h1>
            </div>

            <div className="flex items-center gap-3 font-mono text-[clamp(13px,1.8vw,17px)] text-[#8892B0]">
              <span className="inline-block w-5 h-[2px] bg-[#00FF9C]" />
              Full Stack Developer
            </div>

            <p className="text-[14px] text-[#8892B0] leading-[1.75] max-w-[440px]">
              I build scalable backend systems and clean frontend interfaces. 2.6 years crafting
              production-grade web apps — from real-time WhatsApp messaging platforms to AI-powered RAG pipelines.
            </p>

            {/* Social links */}
            <div className="flex gap-3 flex-wrap">
              {[
                { href: 'https://github.com/sahilthakur05', label: 'github', icon: <GithubIcon /> },
                { href: 'https://linkedin.com/in/sahilthakur', label: 'linkedin', icon: <LinkedinIcon /> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[12px] text-[#8892B0] border border-[#252525] px-4 py-2 rounded-md no-underline transition-all duration-150 hover:text-[#00FF9C] hover:border-[#00FF9C] hover:bg-[#00FF9C]/[0.08]">
                  {icon}{label}
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 flex-wrap">
              <a href="#projects"
                className="inline-flex items-center gap-2 font-mono text-[13px] font-bold text-black bg-[#00FF9C] border border-[#00FF9C] px-6 py-[10px] rounded-md no-underline transition-all duration-150 hover:bg-transparent hover:text-[#00FF9C]">
                View Projects
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 font-mono text-[13px] text-[#8892B0] border border-[#252525] px-6 py-[10px] rounded-md no-underline transition-all duration-150 hover:text-[#E2E8F0] hover:border-[#8892B0]">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT — Photo display */}
          <div className="flex justify-center items-center min-h-[300px] lg:min-h-[460px] relative px-6 lg:px-14 py-6 lg:py-10 order-2 lg:order-2">
            {/* Dot grids — desktop only */}
            <div className="hidden lg:block absolute top-0 right-0 w-40 h-40 opacity-50 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #2D2D2D 1.5px, transparent 1.5px)', backgroundSize: '17px 17px' }} />
            <div className="hidden lg:block absolute bottom-0 left-0 w-28 h-28 opacity-40 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #1a2a1a 1.5px, transparent 1.5px)', backgroundSize: '17px 17px' }} />

            {/* Main photo */}
            <div className="relative w-[220px] h-[285px] lg:w-[290px] lg:h-[375px] rounded-[18px] overflow-hidden z-10 flex-shrink-0"
              style={{ border: '2.5px solid #00FF9C', boxShadow: '0 0 0 8px rgba(0,255,156,.04), 0 0 60px rgba(0,255,156,.2), 0 24px 70px rgba(0,0,0,.6)' }}>
              <Image src="/profile.jpg" alt="Sahil Thakur" fill className="object-cover object-top transition-transform duration-500 hover:scale-105" />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8"
                style={{ background: 'linear-gradient(to top, rgba(8,8,8,.95) 0%, transparent 100%)' }}>
                <span className="block font-sans text-[15px] font-bold text-[#E2E8F0] mb-[2px]">Sahil Thakur</span>
                <span className="font-mono text-[11px] text-[#00FF9C]">Full Stack Developer</span>
              </div>
            </div>

            {/* Floating: available badge — desktop only */}
            <div className="hidden lg:flex float-card absolute bottom-8 left-2 items-center gap-2 bg-[rgba(18,18,18,0.97)] border border-[#2D2D2D] rounded-[9px] px-4 py-[10px] z-20"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,.5)' }}>
              <span className="w-[7px] h-[7px] rounded-full bg-[#00FF9C] inline-block status-dot flex-shrink-0" />
              <span className="font-mono text-[11px] text-[#EEFFFF] whitespace-nowrap">
                const <span className="text-[#82AAFF]">available</span>
                <span className="text-[#89DDFF]"> = </span>
                <span className="text-[#00FF9C]">true</span>
              </span>
            </div>

            {/* Floating tech badges — desktop only */}
            <div className="hidden lg:block float-badge absolute top-14 right-0 font-mono text-[11px] text-[#E2E8F0] bg-[rgba(16,16,16,.95)] border border-[#2D2D2D] px-3 py-[6px] rounded-full z-20 whitespace-nowrap"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,.35)' }}>⚛ React &amp; Next.js</div>
            <div className="hidden lg:block float-badge-2 absolute top-40 -left-4 font-mono text-[11px] text-[#E2E8F0] bg-[rgba(16,16,16,.95)] border border-[#2D2D2D] px-3 py-[6px] rounded-full z-20 whitespace-nowrap"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,.35)' }}>▶ Node.js</div>
            <div className="hidden lg:block float-badge-3 absolute bottom-24 right-0 font-mono text-[11px] text-[#E2E8F0] bg-[rgba(16,16,16,.95)] border border-[#2D2D2D] px-3 py-[6px] rounded-full z-20 whitespace-nowrap"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,.35)' }}>🗄 PostgreSQL</div>

            {/* Exp pill — desktop only */}
            <div className="hidden lg:block float-card absolute top-8 left-2 text-center bg-[#00FF9C] text-black rounded-[11px] px-4 py-3 z-20"
              style={{ boxShadow: '0 8px 28px rgba(0,255,156,.4)' }}>
              <span className="block font-mono text-[22px] font-extrabold leading-tight">2.6*</span>
              <span className="font-mono text-[9px] font-bold tracking-wide">YRS EXP</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
