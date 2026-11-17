'use client'
import { useState, FormEvent } from 'react'

const contactItems = [
  { icon:'📧', label:'email', value:'thakursahil29124@gmail.com', href:'mailto:thakursahil29124@gmail.com' },
  { icon:'🐙', label:'github', value:'github.com/sahilthakur05', href:'https://github.com/sahilthakur05' },
  { icon:'💼', label:'linkedin', value:'linkedin.com/in/sahilthakur', href:'https://linkedin.com/in/sahilthakur' },
  { icon:'📍', label:'location', value:'Bhogal, Jungpura, New Delhi 110014', href:null },
]

const WHATSAPP_LINK = 'https://wa.me/918595565275?text=Hi%20Sahil%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!'

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

            {/* WhatsApp CTA */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-md no-underline transition-all duration-150 hover:-translate-y-[1px]"
              style={{ background: 'linear-gradient(135deg, #1a2e1a 0%, #111111 100%)', border: '1px solid rgba(37,211,102,.3)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(37,211,102,.7)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(37,211,102,.3)')}>
              {/* WhatsApp icon */}
              <div className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,.12)', border: '1px solid rgba(37,211,102,.3)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] mb-[2px]" style={{ color: 'rgba(37,211,102,.6)' }}>whatsapp</p>
                <p className="font-mono text-[12px] font-semibold" style={{ color: '#25D366' }}>Message me on WhatsApp →</p>
              </div>
            </a>
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
