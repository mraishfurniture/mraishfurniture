import { Box, Container, Typography } from '@mui/material'
import { Reveal } from '../../global/components/Reveal'
import { useLanguage } from '../../global/i18n/LanguageContext'
import { colors } from '../../global/theme/theme'

/** Short dark interlude with the founder’s promise. */
export function FounderQuote() {
  const { lang, t } = useLanguage()

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: colors.espresso,
        color: colors.ivory,
        py: { xs: 9, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Typography
        aria-hidden
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: (theme) => theme.typography.h1.fontFamily,
          fontStyle: 'italic',
          fontSize: 'clamp(16rem, 40vw, 30rem)',
          lineHeight: 1,
          color: 'rgba(201, 168, 116, 0.05)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        M
      </Typography>

      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <Reveal>
          <Typography
            aria-hidden
            sx={{
              fontFamily: (theme) => theme.typography.h1.fontFamily,
              fontSize: '5rem',
              lineHeight: 0.6,
              color: colors.brass,
            }}
          >
            “
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontFamily: (theme) => theme.typography.h3.fontFamily,
              fontStyle: lang === 'ar' ? 'normal' : 'italic',
              fontWeight: lang === 'ar' ? 700 : 480,
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              lineHeight: lang === 'ar' ? 1.8 : 1.4,
            }}
          >
            {t.quote.text}
          </Typography>
        </Reveal>
        <Reveal delay={140}>
          <Typography
            sx={{
              mt: 4,
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color: colors.brassLight,
            }}
          >
            {t.quote.attribution}
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}
