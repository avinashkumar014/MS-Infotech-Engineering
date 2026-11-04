import { ArrowUpRight, Instagram, Linkedin, MessageCircle, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigation, site } from '../data/site'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand brand-light" to="/">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-word">{site.name}<small>ENGINEERING</small></span>
          </Link>
          <p>Practical industrial solutions. Thoughtful engineering. Work built to last.</p>
          <div className="footer-socials">
            <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
            <Link to="/contact" aria-label="WhatsApp contact details"><MessageCircle size={18} /></Link>
          </div>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          {navigation.slice(0, 5).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="footer-column">
          <span className="footer-label">Our services</span>
          {services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <span className="footer-label">Say hello</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a>
          <p>{site.address}</p>
          <Link className="footer-quote" to="/contact">Start a conversation <MoveUpRight size={15} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Built with purpose <span className="footer-dot">●</span> Built to last</span>
        <a href="#top" className="back-top">Back to top <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  )
}
