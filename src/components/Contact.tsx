'use client'
import { useState, FormEvent } from 'react'

const contactItems = [
  { icon:'📧', label:'email', value:'sahil@stacx24.com', href:'mailto:sahil@stacx24.com' },
  { icon:'🐙', label:'github', value:'github.com/sahilthakur05stacx', href:'https://github.com/sahilthakur05stacx' },
  { icon:'💼', label:'linkedin', value:'linkedin.com/in/sahilthakur', href:'https://linkedin.com/in/sahilthakur' },
  { icon:'📍', label:'location', value:'India — open to remote', href:null },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1100)
  }

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-[#00FF9C] tracking-[.15em] uppercase mb-2">// 05 — contact</p>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">Get In Touch</h2>
        <p className="font-mono text-[12px] text-[#3C4048] mb-14">/* open to MNC roles and interesting problems */</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {contactItems.map(c => (
              <div key={c.label} className="flex items-start gap-4 p-4 bg-[#1E1E1E] border border-[#252525] rounded-md">
                <div className="w-9 h-9 rounded-md flex items-center justify-center text-[14px] flex-shrink-0 bg-[rgba(0,255,156,.08)] border border-[rgba(0,255,156,.18)]">
                  {c.icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#3C4048] mb-[3px]">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="font-mono text-[12px] text-[#E2E8F0] no-underline transition-colors hover:text-[#00FF9C]">{c.value}</a>
                  ) : (
                    <span className="font-mono text-[12px] text-[#E2E8F0]">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal form */}
          <div className="bg-[#1E1E1E] border border-[#252525] rounded-lg overflow-hidden">
            <div className="bg-[#252526] px-4 py-[9px] flex items-center gap-2 border-b border-[#252525]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
              <span className="font-mono text-[11px] text-[#8892B0] mx-auto">bash — contact --init</span>
            </div>

            <div className="p-6 font-mono text-[12.5px]">
              <p className="text-[#3C4048] text-[11px] mb-5">
                $ contact --init<br />
                <span className="text-[#00FF9C]">▶</span> Starting new conversation...
              </p>

              {!sent ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { prompt:'name:', placeholder:'Your name', type:'text' },
                    { prompt:'email:', placeholder:'your@email.com', type:'email' },
                    { prompt:'subject:', placeholder:'Job opportunity / Collaboration', type:'text' },
                  ].map(f => (
                    <div key={f.prompt} className="flex items-start gap-2">
                      <span className="text-[#00FF9C] flex-shrink-0 leading-[1.6] pt-[2px]">$</span>
                      <div className="flex-1">
                        <label className="block text-[10px] text-[#8892B0] mb-[5px]">{f.prompt}</label>
                        <input type={f.type} required placeholder={f.placeholder}
                          className="w-full bg-[#111111] border border-[#2D2D2D] rounded px-3 py-[9px] font-mono text-[12px] text-[#E2E8F0] outline-none transition-all duration-150 focus:border-[#00FF9C] focus:shadow-[0_0_0_2px_rgba(0,255,156,.07)]" />
                      </div>
                    </div>
                  ))}

                  <div className="flex items-start gap-2">
                    <span className="text-[#00FF9C] flex-shrink-0 leading-[1.6] pt-[2px]">$</span>
                    <div className="flex-1">
                      <label className="block text-[10px] text-[#8892B0] mb-[5px]">message:</label>
                      <textarea required placeholder="Tell me about the role or project..." rows={4}
                        className="w-full bg-[#111111] border border-[#2D2D2D] rounded px-3 py-[9px] font-mono text-[12px] text-[#E2E8F0] outline-none transition-all duration-150 focus:border-[#00FF9C] resize-y" />
                    </div>
                  </div>

                  <button type="submit" disabled={sending}
                    className="w-full bg-[#00FF9C] text-black border border-[#00FF9C] py-3 font-mono text-[12px] font-bold rounded tracking-wide cursor-pointer transition-all duration-150 hover:bg-transparent hover:text-[#00FF9C] disabled:opacity-60 disabled:cursor-not-allowed">
                    {sending ? '$ sending...' : '$ send --message ↵'}
                  </button>
                </form>
              ) : (
                <div className="text-[12px]">
                  <span className="text-[#3C4048]">$</span> Message sent!<br />
                  <span className="text-[#3C4048]">&gt;</span> I&apos;ll reply within 24h.<br />
                  <span className="cursor" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
