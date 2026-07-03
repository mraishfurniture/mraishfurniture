import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded'
import { BUSINESS, NAV_IDS, whatsappHref } from '../config/business'
import { useLanguage } from '../i18n/LanguageContext'
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
  const { lang, t } = useLanguage()

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
            <Typography
              variant="h4"
              component="p"
              sx={{ fontStyle: lang === 'ar' ? 'normal' : 'italic', color: colors.ivory }}
            >
              {t.brand.name}
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
              {t.brand.tag}
            </Typography>
            <Typography variant="body2" sx={{ mt: 3, maxWidth: 300 }}>
              {t.footer.blurb}
            </Typography>
          </Box>

          <Box>
            <Typography component="p" sx={columnHeading}>
              {t.footer.servicesHeading}
            </Typography>
            <Stack spacing={1}>
              {t.services.items.map((service) => (
                <Typography key={service.title} variant="body2">
                  {service.title}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography component="p" sx={columnHeading}>
              {t.footer.exploreHeading}
            </Typography>
            <Stack spacing={1}>
              {NAV_IDS.map((id) => (
                <Typography
                  key={id}
                  component="a"
                  href={`#${id}`}
                  variant="body2"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    width: 'fit-content',
                    '&:hover': { color: colors.brassLight },
                  }}
                >
                  {t.nav[id]}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography component="p" sx={columnHeading}>
              {t.footer.contactHeading}
            </Typography>
            <Stack spacing={1}>
              <Typography
                component="a"
                href={BUSINESS.phoneHref}
                dir="ltr"
                variant="body2"
                sx={{
                  color: colors.ivory,
                  textDecoration: 'none',
                  width: 'fit-content',
                  '&:hover': { color: colors.brassLight },
                }}
              >
                {BUSINESS.phoneDisplay}
              </Typography>
              <Typography
                component="a"
                href={whatsappHref(t.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                variant="body2"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  width: 'fit-content',
                  '&:hover': { color: colors.brassLight },
                }}
              >
                {t.footer.whatsappLine}
              </Typography>
              <Typography variant="body2">{t.city}</Typography>
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
              py: 2.5,
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
            }}
          >
            <Typography variant="caption" sx={{ color: colors.faintDark }}>
              © {new Date().getFullYear()} {BUSINESS.name}. {t.footer.rights}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <Typography variant="caption" sx={{ color: colors.faintDark }}>
                {t.footer.craftedIn}
              </Typography>
              <IconButton
                component="a"
                href="#top"
                size="small"
                aria-label={t.footer.backToTop}
                sx={{
                  color: colors.brassLight,
                  border: '1px solid',
                  borderColor: colors.lineBrass,
                  '&:hover': { bgcolor: 'rgba(201, 168, 116, 0.12)' },
                }}
              >
                <ArrowUpwardRounded fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
