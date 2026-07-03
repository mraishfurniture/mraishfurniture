/**
 * Single source of truth for business facts shown on the site.
 * Translatable copy lives in src/global/i18n/translations.ts.
 */
export const BUSINESS = {
  name: 'Mraish Furniture',
  established: '1993',
  phoneDisplay: '+962 7 8180 0068',
  phoneHref: 'tel:+962781800068',
  email: 'mraishfurniture@gmail.com',
  emailHref: 'mailto:mraishfurniture@gmail.com',
} as const

const WHATSAPP_BASE = 'https://wa.me/962781800068'

export function whatsappHref(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`
}

export const NAV_IDS = ['about', 'services', 'work', 'process', 'contact'] as const
export type NavId = (typeof NAV_IDS)[number]
