/**
 * Single source of truth for business facts shown on the site.
 * Edit here — every section reads from this file.
 */
export const BUSINESS = {
  name: 'Mraish Furniture',
  founder: 'Omar Mraish',
  city: 'Amman, Jordan',
  phoneDisplay: '+962 7 8180 0068',
  phoneHref: 'tel:+962781800068',
  whatsappHref:
    'https://wa.me/962781800068?text=' +
    encodeURIComponent('Hello Mraish Furniture — I found your website and would like to discuss a project.'),
} as const

export const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
] as const

export const SERVICE_NAMES = [
  'Carpentry',
  'Upholstery',
  'Interior & Exterior Design',
  'Glass Works',
  'Aluminum Works',
  'Drapery',
  'Painting',
  'Lighting Works',
] as const
