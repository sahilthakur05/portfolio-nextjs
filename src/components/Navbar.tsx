'use client'
import { useEffect, useState } from 'react'

const links = ['home','about','skills','experience','projects','contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY
      for (const id of links) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop - 80
        if (y >= top && y < top + el.offsetHeight) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-[#252525] transition-all duration-300 ${scrolled ? 'bg-[#080808]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-[58px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 no-underline">
          <span className="font-mono text-[17px] font-bold text-[#00FF9C]">&lt;/&gt;</span>
          <span className="font-mono text-[13px] font-semibold text-[#E2E8F0] hidden sm:block">Sahil Thakur</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {links.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono text-[12px] no-underline tracking-wide transition-colors duration-150 ${active === id ? 'text-[#00FF9C]' : 'text-[#8892B0] hover:text-[#00FF9C]'}`}
              >
                {id === 'home' ? '~/home' : id}
              </a>
            </li>
          ))}
        </ul>

        {/* Status */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#8892B0] bg-[#111111] border border-[#252525] px-3 py-[5px] rounded-full">
          <span className="w-[7px] h-[7px] rounded-full bg-[#00FF9C] status-dot inline-block" />
          Available for opportunities
        </div>
      </div>
    </nav>
  )
}
