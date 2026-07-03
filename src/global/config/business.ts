/**
 * Single source of truth for business facts shown on the site.
 * Translatable copy lives in src/global/i18n/translations.ts.
 */
export const BUSINESS = {
  name: 'Mraish Furniture',
  founder: 'Omar Mraish',
  phoneDisplay: '+962 7 8180 0068',
  phoneHref: 'tel:+962781800068',
} as const

const WHATSAPP_BASE = 'https://wa.me/962781800068'

export function whatsappHref(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`
}

export const NAV_IDS = ['about', 'services', 'work', 'process', 'contact'] as const
export type NavId = (typeof NAV_IDS)[number]
