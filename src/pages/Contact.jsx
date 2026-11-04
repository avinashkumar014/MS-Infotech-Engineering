import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

export default function Contact() {
  const whatsappDigits = site.whatsapp.replace(/\D/g, '')
  const whatsappNumber = whatsappDigits.length === 10 ? `91${whatsappDigits}` : whatsappDigits

  return (
    <>
      <PageHero eyebrow="Contact / Start a conversation" title={<>Let’s build<br /><em>something strong.</em></>} copy="Share a little about your project and we’ll get back to you to discuss the next steps." background="photo-1504917595217-d4dc5ebe6122" />
      <section className="contact-page section-pad"><div className="container contact-layout">
        <Reveal className="contact-side">
          <span className="eyebrow">Get in touch</span>
          <h2>Every good project<br /><em>starts somewhere.</em></h2>
          <p>Tell us what you need, where the work is and how we can reach you. We’ll follow up to understand your requirements.</p>
          <div className="contact-details">
            <a href={`mailto:${site.email}`}><span><Mail size={18} /></span><div><small>Email</small><strong>{site.email}</strong></div><ArrowUpRight size={16} /></a>
            <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}><span><Phone size={18} /></span><div><small>Phone</small><strong>{site.phone}</strong></div><ArrowUpRight size={16} /></a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label={`Chat with ${site.name} on WhatsApp`}>
              <span><MessageCircle size={18} /></span><div><small>WhatsApp</small><strong>{site.whatsapp}</strong></div><ArrowUpRight size={16} />
            </a>
            <div><span><MapPin size={18} /></span><div><small>Address</small><strong>{site.address}</strong></div></div>
          </div>
          <div className="contact-availability"><span className="availability-dot" /> Enquiries welcome <span>Share your scope and we’ll respond.</span></div>
        </Reveal>
        <Reveal className="contact-form-wrap"><div className="contact-form-heading"><span className="eyebrow">Project enquiry</span><h3>Tell us about it.</h3></div><ContactForm /></Reveal>
      </div></section>
    </>
  )
}
