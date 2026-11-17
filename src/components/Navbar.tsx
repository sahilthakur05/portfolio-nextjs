'use client'
import { useEffect, useState } from 'react'

const links = ['home','about','skills','experience','projects','contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

        {/* Desktop Links */}
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

        {/* Status — desktop only */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-[#8892B0] bg-[#111111] border border-[#252525] px-3 py-[5px] rounded-full">
          <span className="w-[7px] h-[7px] rounded-full bg-[#00FF9C] status-dot inline-block" />
          Available for opportunities
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-md border border-[#252525] bg-[#111111] cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-[#E2E8F0] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#E2E8F0] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#E2E8F0] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-md border-b border-[#252525]">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 list-none">
            {links.map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-mono text-[13px] no-underline tracking-wide py-3 border-b border-[#1a1a1a] transition-colors duration-150 ${active === id ? 'text-[#00FF9C]' : 'text-[#8892B0]'}`}
                >
                  {id === 'home' ? '~/home' : `~/${id}`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
