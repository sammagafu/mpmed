/**
 * Site-wide config. Replace VITE_CONTACT_PHONE in .env with real number before launch.
 * @see MPMED-SEZ QA Report — placeholder phone damages investor trust.
 */
export const siteConfig = {
  contact: {
    email: 'invest@mpmedsez.go.tz',
    phone: import.meta.env.VITE_CONTACT_PHONE ?? '+255 22 000 0000',
    address: 'MPMED-SEZ Investment Facilitation Desk, Mloganzila, Dar es Salaam, Tanzania',
  },
  externalLinks: {
    tmda: 'https://www.tmda.go.tz',
    tiseza: 'https://www.epza.go.tz',
    brela: 'https://www.brela.go.tz',
  },
  responseTime: '48 working hours',
}
