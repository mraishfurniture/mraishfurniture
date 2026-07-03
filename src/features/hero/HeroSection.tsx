import { Box, Button, Container, Stack, Typography } from '@mui/material'
import NorthEast from '@mui/icons-material/NorthEast'
import { BUSINESS } from '../../global/config/business'
import { Reveal } from '../../global/components/Reveal'
import { colors } from '../../global/theme/theme'

const HERO_IMG =
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2400&q=80'

export function HeroSection() {
  return (
    <Box
      id="top"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: '94svh', md: '100svh' },
        display: 'flex',
        alignItems: 'center',
        bgcolor: colors.night,
        color: colors.ivory,
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to top, rgba(21, 16, 9, 0.92) 0%, rgba(21, 16, 9, 0.2) 32%, rgba(21, 16, 9, 0.38) 100%),
            linear-gradient(97deg, rgba(21, 16, 9, 0.95) 0%, rgba(21, 16, 9, 0.66) 46%, rgba(21, 16, 9, 0.24) 100%),
            url(${HERO_IMG})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 55%',
        }}
      />

      <Container sx={{ position: 'relative', pt: { xs: 16, md: 14 }, pb: { xs: 14, md: 12 } }}>
        <Reveal>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Box sx={{ width: 44, height: '1px', bgcolor: 'primary.main' }} />
            <Typography
              component="span"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.34em',
                textTransform: 'uppercase',
                color: colors.brassLight,
              }}
            >
              Bespoke furniture &amp; interior craft — {BUSINESS.city}
            </Typography>
          </Stack>
        </Reveal>

        <Reveal delay={90}>
          <Typography variant="h1" sx={{ mt: 3.5, maxWidth: 940 }}>
            Everything a beautiful space needs — crafted by{' '}
            <Box component="em" sx={{ color: colors.brassLight, fontWeight: 400 }}>
              one workshop.
            </Box>
          </Typography>
        </Reveal>

        <Reveal delay={180}>
          <Typography sx={{ mt: 3.5, maxWidth: 580, color: 'rgba(240, 232, 218, 0.8)' }}>
            Carpentry, upholstery, glass, aluminum, drapery, painting and lighting — Mraish Furniture
            takes your space from first sketch to final installed detail, under one roof in Amman.
          </Typography>
        </Reveal>

        <Reveal delay={270}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5.5 }}>
            <Button
              size="large"
              variant="contained"
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noreferrer"
              endIcon={<NorthEast />}
            >
              Start your project
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="inherit"
              href="#work"
              sx={{
                borderColor: 'rgba(244, 238, 226, 0.4)',
                '&:hover': { borderColor: colors.ivory, bgcolor: 'rgba(244, 238, 226, 0.06)' },
              }}
            >
              See the craft
            </Button>
          </Stack>
        </Reveal>
      </Container>

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          width: '1px',
          height: 54,
          overflow: 'hidden',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(244, 238, 226, 0.55)',
            animation: 'hero-drip 2.4s ease-in-out infinite',
            '@keyframes hero-drip': {
              '0%': { transform: 'translateY(-100%)' },
              '55%': { transform: 'translateY(0)' },
              '100%': { transform: 'translateY(100%)' },
            },
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }}
        />
      </Box>
    </Box>
  )
}
