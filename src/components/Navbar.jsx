import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { navigation, site } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      className={`site-header ${scrolled || location.pathname !== '/' ? 'site-header-solid' : ''}`}
      initial={reduceMotion ? false : { y: -76 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-word">{site.name}<small>ENGINEERING</small></span>
        </Link>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <Link className="button button-lime nav-mobile-cta" to="/contact">
            Get a quote <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>

        <Link className="button button-lime nav-cta" to="/contact">
          <span>Get a quote</span> <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </motion.header>
  )
}
