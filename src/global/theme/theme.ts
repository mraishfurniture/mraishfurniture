import { createTheme } from '@mui/material/styles'

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

export const serifFamily = '"Fraunces Variable", Fraunces, Georgia, "Times New Roman", serif'
export const sansFamily = '"Manrope Variable", Manrope, "Helvetica Neue", Arial, sans-serif'

export const theme = createTheme({
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
    fontFamily: sansFamily,
    h1: {
      fontFamily: serifFamily,
      fontWeight: 500,
      fontSize: 'clamp(2.7rem, 6vw, 5rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.015em',
    },
    h2: {
      fontFamily: serifFamily,
      fontWeight: 500,
      fontSize: 'clamp(2rem, 3.6vw, 3.1rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
    },
    h3: { fontFamily: serifFamily, fontWeight: 500, fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', lineHeight: 1.2 },
    h4: { fontFamily: serifFamily, fontWeight: 540, fontSize: '1.5rem', lineHeight: 1.28 },
    h5: { fontFamily: serifFamily, fontWeight: 560, fontSize: '1.3rem', lineHeight: 1.32 },
    h6: { fontFamily: serifFamily, fontWeight: 580, fontSize: '1.18rem', lineHeight: 1.35 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.8 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.72 },
    button: { fontFamily: sansFamily, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.8125rem' },
    caption: { fontSize: '0.8125rem', lineHeight: 1.6 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
        ::selection { background: ${colors.brass}; color: #16110A; }
      `,
    },
    MuiContainer: { defaultProps: { maxWidth: 'lg' } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        sizeLarge: { padding: '15px 34px', fontSize: '0.8125rem' },
        sizeMedium: { padding: '10px 22px' },
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
