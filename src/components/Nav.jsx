import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { CloseIcon, MenuIcon } from './Icons.jsx'

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack', label: 'Stack' },
  { href: '#certificacoes', label: 'Certificações' },
  { href: '#sobre', label: 'Sobre' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-logo" onClick={close}>
          {profile.name}
        </a>

        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-primary btn-sm" onClick={close}>
            Contato
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
