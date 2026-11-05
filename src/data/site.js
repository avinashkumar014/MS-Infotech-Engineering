export const site = {
  name: 'MS INFOTECH',
  strapline: 'Built on integrity.',
  email: 'msinfotecgstesic44@gmail.com',
  phone: '9389328002',
  whatsapp: '9389328002',
  address: '115, Vaith Kuti Road, Nagla Barh, Garhmukteshwar, Hapur, Uttar Pradesh 245205, India',
  social: {
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  stats: [
    { value: '10+', label: 'Projects completed', detail: 'From planning to completion' },
    { value: '5+', label: 'Clients served', detail: 'Built on lasting partnerships' },
    { value: '4+', label: 'Years of experience', detail: 'Practical engineering expertise' },
    { value: '100+', label: 'Team members', detail: 'Working together on every project' },
  ],
}

export const image = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'PEB Structure', to: '/peb-structures' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]
