import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, CircleAlert } from 'lucide-react'
import { services } from '../data/services'

const serviceOptions = [...services.map((service) => service.title), 'PEB Structures']

export default function ContactForm() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    const form = event.currentTarget

    const apiUrl = import.meta.env.VITE_API_URL?.trim()
    if (!apiUrl) {
      setStatus({
        type: 'error',
        message: 'Enquiry submission is not connected yet. Please use the contact details on this page or configure VITE_API_URL.',
      })
      return
    }

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    setSubmitting(true)

    try {
      const response = await fetch(`${apiUrl.replace(/\/$/, '')}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        const detail = await response.text()
        throw new Error(detail || `Request failed with status ${response.status}`)
      }
      form.reset()
      setStatus({ type: 'success', message: 'Your enquiry has been sent. We’ll be in touch soon.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: `We couldn’t send your enquiry. ${error.message || 'Please try again later.'}`,
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name<input name="fullName" autoComplete="name" placeholder="Your name" required /></label>
        <label>Company name<input name="companyName" autoComplete="organization" placeholder="Company" /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@company.com" /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+00 000 000 0000" required /></label>
        <label>Service required
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Project location<input name="projectLocation" placeholder="City, region" required /></label>
        <label className="form-full">Tell us about your project<textarea name="requirement" rows="4" placeholder="A few details about your scope, timeline or requirements..." required /></label>
      </div>
      <div className="form-footer">
        <p>We’ll only use your information to respond to this enquiry.</p>
        <button className="button button-lime" type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Submit enquiry'} <ArrowUpRight size={17} />
        </button>
      </div>
      {status.message && (
        <p className={`form-status form-status-${status.type}`} role="status">
          {status.type === 'success' ? <CheckCircle2 size={18} /> : <CircleAlert size={18} />}
          {status.message}
        </p>
      )}
    </form>
  )
}
