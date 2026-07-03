import { Box, Container, Typography } from '@mui/material'
import { BUSINESS } from '../../global/config/business'
import { Reveal } from '../../global/components/Reveal'
import { colors, serifFamily } from '../../global/theme/theme'

/** Short dark interlude with the founder’s promise. */
export function FounderQuote() {
  return (
    <Box sx={{ bgcolor: colors.espresso, color: colors.ivory, py: { xs: 9, md: 12 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Reveal>
          <Typography
            aria-hidden
            sx={{ fontFamily: serifFamily, fontSize: '5rem', lineHeight: 0.6, color: colors.brass }}
          >
            “
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontFamily: serifFamily,
              fontStyle: 'italic',
              fontWeight: 480,
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              lineHeight: 1.4,
            }}
          >
            Bring us a photo, a fabric, an idea — we will build it as if it were going into our own
            home.
          </Typography>
        </Reveal>
        <Reveal delay={140}>
          <Typography
            sx={{
              mt: 4,
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color: colors.brassLight,
            }}
          >
            {BUSINESS.founder} · Founder
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}
