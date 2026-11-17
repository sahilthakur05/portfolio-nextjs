'use client'
import { useEffect, useRef, useState } from 'react'

export default function ProjectVideoPlayer() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const frameRef   = useRef(0)
  const pausedRef  = useRef(false)
  const [paused, setPaused] = useState(false)

  function toggle() {
    pausedRef.current = !pausedRef.current
    setPaused(p => !p)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const messages = [
      { text: 'Hey, got your message!',       t: 0,   side: 'left'  },
      { text: 'Thanks for reaching out 👋',   t: 70,  side: 'right' },
      { text: 'Can you share more info?',      t: 140, side: 'left'  },
      { text: 'Sure! Sending the deck now…',   t: 210, side: 'right' },
    ]
    const TOTAL = 320

    function rr(x: number, y: number, w: number, h: number, r: number, fill?: string, stroke?: string) {
      ctx.beginPath()
      ctx.roundRect(x, y, w, h, r)
      if (fill)   { ctx.fillStyle = fill;   ctx.fill()   }
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1; ctx.stroke() }
    }

    let raf: number

    function draw() {
      raf = requestAnimationFrame(draw)
      if (pausedRef.current) return          // freeze frame, keep RAF alive

      const W = canvas.width, H = canvas.height
      if (!W || !H) return
      const f = frameRef.current % TOTAL

      ctx.fillStyle = '#080808'
      ctx.fillRect(0, 0, W, H)

      const grd = ctx.createRadialGradient(W*.18, H*.5, 0, W*.18, H*.5, W*.4)
      grd.addColorStop(0, 'rgba(0,255,156,.04)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, W, H)

      const left    = { x:.03*W, y:.07*H, w:.28*W, h:.86*H }
      const inbox   = { x:.33*W, y:.07*H, w:.64*W, h:.56*H }
      const compose = { x:.33*W, y:.65*H, w:.64*W, h:.28*H }

      rr(left.x,    left.y,    left.w,    left.h,    6, '#0d1117', '#252525')
      rr(inbox.x,   inbox.y,   inbox.w,   inbox.h,   6, '#0d1117', '#252525')
      rr(compose.x, compose.y, compose.w, compose.h, 6, '#0a1a0a', '#252525')

      ;[left, inbox].forEach((p, i) => {
        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(p.x, p.y, p.w, 22)
        ctx.font = 'bold 8px monospace'
        ctx.fillStyle = '#3C4048'
        ctx.fillText(i === 0 ? 'CONTACTS' : 'INBOX — comdove.com', p.x + 10, p.y + 14)
      })

      for (let i = 0; i < 7; i++) {
        const ry = left.y + 28 + i * 32
        const isActive = i === 1
        if (isActive) rr(left.x+5, ry-4, left.w-10, 28, 4, 'rgba(0,255,156,.08)', 'rgba(0,255,156,.2)')
        ctx.beginPath()
        ctx.arc(left.x+18, ry+10, 9, 0, Math.PI*2)
        ctx.fillStyle = isActive ? 'rgba(0,255,156,.2)' : '#1E1E1E'
        ctx.fill()
        ctx.fillStyle = isActive ? '#E2E8F0' : '#252525'
        ctx.fillRect(left.x+32, ry+4,  left.w*.5, 5)
        ctx.fillStyle = '#252525'
        ctx.fillRect(left.x+32, ry+13, left.w*.35, 4)
      }

      messages.forEach(msg => {
        const progress = Math.max(0, Math.min(1, (f - msg.t) / 20))
        if (progress === 0) return
        const idx = messages.indexOf(msg)
        const my = inbox.y + 30 + idx * 34
        const isRight = msg.side === 'right'
        const mx = isRight ? inbox.x + inbox.w*.28 : inbox.x + 8
        const mw = inbox.w * .66
        ctx.globalAlpha = progress
        rr(mx, my, mw, 24, 5,
          isRight ? 'rgba(0,255,156,.12)' : '#1a1a1a',
          isRight ? 'rgba(0,255,156,.25)' : '#2d2d2d')
        ctx.font = '8px system-ui'
        ctx.fillStyle = isRight ? '#00FF9C' : '#8892B0'
        ctx.fillText(msg.text, mx+8, my+15)
        ctx.globalAlpha = 1
      })

      if (Math.floor(f / 25) % 2 === 0) {
        ctx.fillStyle = '#00FF9C'
        ctx.fillRect(compose.x+14, compose.y+H*.08, 1.5, 11)
      }

      const sentCount = 1200 + Math.floor((f / TOTAL) * 47)
      rr(W*.57, H*.01, W*.4, H*.055, 4, '#0d1117', '#252525')
      ctx.font = 'bold 7px monospace'
      ctx.fillStyle = '#00FF9C'
      ctx.fillText(`Campaign: ${sentCount} sent  ✓`, W*.58, H*.048)

      frameRef.current++
    }

    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return (
    <div className="rounded-[10px] overflow-hidden border border-[#2D2D2D]" style={{ background: '#0d1117' }}>

      {/* browser chrome */}
      <div className="flex items-center gap-3 px-3 py-[9px] border-b border-[#252525]" style={{ background: '#1a1a1a' }}>
        <div className="flex gap-[5px] flex-shrink-0">
          <span className="block w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
          <span className="block w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
          <span className="block w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-[#080808] border border-[#252525] rounded px-2 py-[3px]">
          <span className="font-mono text-[9px] text-[#3C4048]">🔒</span>
          <span className="font-mono text-[9px] text-[#8892B0] truncate">comdove.com/dashboard</span>
        </div>
        <div className="flex items-center gap-[5px] flex-shrink-0">
          <span className="block w-[6px] h-[6px] rounded-full bg-[#ff4444]"
            style={{ animation: paused ? 'none' : 'recPulse 1.4s ease-in-out infinite', opacity: paused ? .3 : 1 }} />
          <span className="font-mono text-[9px]" style={{ color: paused ? '#3C4048' : '#ff4444' }}>
            {paused ? 'PAUSED' : 'REC'}
          </span>
        </div>
      </div>

      {/* canvas */}
      <div className="relative" style={{ aspectRatio: '16/9' }}>
        <canvas ref={canvasRef} className="w-full h-full block" />
        <button
          onClick={toggle}
          className="absolute inset-0 w-full h-full flex items-center justify-center group"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label={paused ? 'Resume' : 'Pause'}>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,.6)', border: '1px solid rgba(255,255,255,.18)', backdropFilter: 'blur(4px)' }}>
            {paused
              ? <span style={{ width:0, height:0, borderTop:'7px solid transparent', borderBottom:'7px solid transparent', borderLeft:'12px solid #fff', marginLeft:3 }} />
              : <span className="font-mono text-white font-bold" style={{ fontSize: 9, letterSpacing: 1 }}>❚❚</span>
            }
          </span>
        </button>
      </div>

      {/* caption */}
      <div className="flex items-center justify-between px-3 py-[9px] border-t border-[#252525]" style={{ background: '#111111' }}>
        <span className="font-mono text-[9px] text-[#3C4048]">
          Demo · <span className="text-[#8892B0]">Project walkthrough</span>
        </span>
        <span className="font-mono text-[9px] text-[#00FF9C] opacity-40">drop .mp4 to replace</span>
      </div>

      <style>{`@keyframes recPulse { 0%,100%{opacity:1} 50%{opacity:.25} }`}</style>
    </div>
  )
}
