'use client'
import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    const chars = '01アイウエオカキクケコ{}[]<>/\\=+-*&%#!?'
    let W: number, H: number, cols: number, drops: number[]

    function resize() {
      W = c.width = c.offsetWidth
      H = c.height = c.offsetHeight
      cols = Math.floor(W / 14)
      drops = Array(cols).fill(1)
    }
    resize()
    window.addEventListener('resize', resize)

    const id = setInterval(() => {
      ctx.fillStyle = 'rgba(8,8,8,0.05)'
      ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = '#00FF9C'
      ctx.font = '12px monospace'
      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 14, y * 14)
        if (y * 14 > H && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }, 55)

    return () => { clearInterval(id); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" />
}
