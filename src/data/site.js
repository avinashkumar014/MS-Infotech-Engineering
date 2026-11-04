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
    { value: '00+', label: 'Projects completed' },
    { value: '00+', label: 'Clients served' },
    { value: '00+', label: 'Years of experience' },
    { value: '00+', label: 'Team members' },
  ],
}

export const image = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Steel Structures', to: '/peb-structures' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]
