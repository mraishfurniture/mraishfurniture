import { createTheme, type Theme } from '@mui/material/styles'
import type { Language } from '../i18n/translations'

/**
 * Design tokens for the Mraish Furniture brand:
 * warm espresso darks, ivory lights and a brass accent —
 * the palette of wood, linen and metal fittings.
 */
export const colors = {
  ink: '#221B14',
  espresso: '#231C13',
  espressoDeep: '#1B150C',
  night: '#151009',
  ivory: '#F4EEE2',
  ivoryPaper: '#FBF8F1',
  card: '#FDFBF5',
  imgPlaceholder: '#E9E1D2',
  brass: '#B08D57',
  brassLight: '#C9A874',
  brassDark: '#8F6F3E',
  mutedLight: '#6E6353',
  mutedDark: 'rgba(240, 232, 218, 0.72)',
  faintDark: 'rgba(240, 232, 218, 0.45)',
  lineLight: 'rgba(34, 27, 20, 0.14)',
  lineDark: 'rgba(240, 232, 218, 0.16)',
  lineBrass: 'rgba(176, 141, 87, 0.4)',
} as const

export function createAppTheme(lang: Language): Theme {
  const isAr = lang === 'ar'

  // Latin fonts carry no Arabic glyphs, so Arabic leads its own stacks.
  const serif = isAr
    ? 'Amiri, "Fraunces Variable", Georgia, serif'
    : '"Fraunces Variable", Fraunces, Georgia, "Times New Roman", serif'
  const sans = isAr
    ? 'Almarai, "Manrope Variable", "Helvetica Neue", Arial, sans-serif'
    : '"Manrope Variable", Manrope, "Helvetica Neue", Arial, sans-serif'

  // Connected Arabic script must never be letter-spaced; Amiri also needs
  // taller lines for its ascenders and diacritics.
  const track = (value: string) => (isAr ? 'normal' : value)
  const headingLine = (latin: number) => (isAr ? Math.max(latin, 1.45) : latin)

  return createTheme({
    direction: isAr ? 'rtl' : 'ltr',
    palette: {
      mode: 'light',
      primary: { main: colors.brass, light: colors.brassLight, dark: colors.brassDark, contrastText: '#241D12' },
      secondary: { main: colors.espresso, contrastText: colors.ivory },
      background: { default: colors.ivory, paper: colors.ivoryPaper },
      text: { primary: colors.ink, secondary: colors.mutedLight },
      divider: colors.lineLight,
    },
    shape: { borderRadius: 0 },
    typography: {
      fontFamily: sans,
      h1: {
        fontFamily: serif,
        fontWeight: isAr ? 700 : 500,
        fontSize: 'clamp(2.7rem, 6vw, 5rem)',
        lineHeight: headingLine(1.04),
        letterSpacing: track('-0.015em'),
      },
      h2: {
        fontFamily: serif,
        fontWeight: isAr ? 700 : 500,
        fontSize: 'clamp(2rem, 3.6vw, 3.1rem)',
        lineHeight: headingLine(1.1),
        letterSpacing: track('-0.01em'),
      },
      h3: {
        fontFamily: serif,
        fontWeight: isAr ? 700 : 500,
        fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)',
        lineHeight: headingLine(1.2),
      },
      h4: { fontFamily: serif, fontWeight: isAr ? 700 : 540, fontSize: '1.5rem', lineHeight: headingLine(1.28) },
      h5: { fontFamily: serif, fontWeight: isAr ? 700 : 560, fontSize: '1.3rem', lineHeight: headingLine(1.32) },
      h6: { fontFamily: serif, fontWeight: isAr ? 700 : 580, fontSize: '1.18rem', lineHeight: headingLine(1.35) },
      body1: { fontSize: '1.0625rem', lineHeight: isAr ? 2 : 1.8 },
      body2: { fontSize: '0.9375rem', lineHeight: isAr ? 1.95 : 1.72 },
      button: { fontFamily: sans, fontWeight: 700, letterSpacing: track('0.14em'), fontSize: '0.8125rem' },
      caption: { fontSize: '0.8125rem', lineHeight: 1.6 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html { scroll-behavior: smooth; }
          body { overflow-x: hidden; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
          ::selection { background: ${colors.brass}; color: #16110A; }
          [dir='rtl'] * { letter-spacing: normal !important; }
          .flip-rtl { transform: ${isAr ? 'scaleX(-1)' : 'none'}; }
          * { scrollbar-width: thin; scrollbar-color: ${colors.brass} ${colors.ivory}; }
          ::-webkit-scrollbar { width: 10px; }
          ::-webkit-scrollbar-track { background: ${colors.ivory}; }
          ::-webkit-scrollbar-thumb { background: #C4B69E; border-radius: 5px; border: 2px solid ${colors.ivory}; }
          ::-webkit-scrollbar-thumb:hover { background: ${colors.brass}; }
        `,
      },
      MuiContainer: { defaultProps: { maxWidth: 'lg' } },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          sizeLarge: { padding: '15px 34px', fontSize: isAr ? '0.9375rem' : '0.8125rem' },
          sizeMedium: { padding: '10px 22px', fontSize: isAr ? '0.875rem' : undefined },
        },
        variants: [
          {
            props: { variant: 'contained', color: 'primary' },
            style: { '&:hover': { backgroundColor: colors.brassLight } },
          },
        ],
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
  })
}
