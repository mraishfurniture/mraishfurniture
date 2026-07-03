import { Box, Container, Stack, Typography } from '@mui/material'
import { BUSINESS, NAV_ITEMS, SERVICE_NAMES } from '../config/business'
import { colors } from '../theme/theme'

const columnHeading = {
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: colors.brass,
  mb: 2.5,
} as const

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: colors.night, color: colors.mutedDark }}>
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 6, md: 8 },
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '4fr 3fr 2.5fr 3fr' },
          }}
        >
          <Box>
            <Typography variant="h4" component="p" sx={{ fontStyle: 'italic', color: colors.ivory }}>
              Mraish
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                mt: 0.75,
                color: colors.faintDark,
              }}
            >
              Furniture · Amman
            </Typography>
            <Typography variant="body2" sx={{ mt: 3, maxWidth: 300 }}>
              Bespoke furniture and complete interior finishing, made by one workshop in Amman — from
              first sketch to final installation.
            </Typography>
          </Box>

          <Box>
            <Typography component="p" sx={columnHeading}>
              Services
            </Typography>
            <Stack spacing={1}>
              {SERVICE_NAMES.map((name) => (
                <Typography key={name} variant="body2">
                  {name}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography component="p" sx={columnHeading}>
              Explore
            </Typography>
            <Stack spacing={1}>
              {NAV_ITEMS.map((item) => (
                <Typography
                  key={item.id}
                  component="a"
                  href={`#${item.id}`}
                  variant="body2"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    width: 'fit-content',
                    '&:hover': { color: colors.brassLight },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography component="p" sx={columnHeading}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Typography
                component="a"
                href={BUSINESS.phoneHref}
                variant="body2"
                sx={{ color: colors.ivory, textDecoration: 'none', width: 'fit-content', '&:hover': { color: colors.brassLight } }}
              >
                {BUSINESS.phoneDisplay}
              </Typography>
              <Typography
                component="a"
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noreferrer"
                variant="body2"
                sx={{ color: 'inherit', textDecoration: 'none', width: 'fit-content', '&:hover': { color: colors.brassLight } }}
              >
                WhatsApp — photos &amp; voice notes welcome
              </Typography>
              <Typography variant="body2">{BUSINESS.city}</Typography>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Box sx={{ borderTop: '1px solid', borderColor: colors.lineDark }}>
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{
              py: 3,
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
            }}
          >
            <Typography variant="caption" sx={{ color: colors.faintDark }}>
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </Typography>
            <Typography variant="caption" sx={{ color: colors.faintDark }}>
              Crafted in {BUSINESS.city}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
