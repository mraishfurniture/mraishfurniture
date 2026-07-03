import { Box, Button, Stack, Typography } from '@mui/material'
import CallOutlined from '@mui/icons-material/CallOutlined'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { BUSINESS, whatsappHref } from '../../global/config/business'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { useLanguage } from '../../global/i18n/LanguageContext'
import { colors } from '../../global/theme/theme'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <Section id="contact" deep>
      <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
        <Reveal>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
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
              {t.contact.overline}
            </Typography>
            <Box sx={{ width: 44, height: '1px', bgcolor: 'primary.main' }} />
          </Stack>
        </Reveal>

        <Reveal delay={80}>
          <Typography variant="h2" sx={{ mt: 3, color: colors.ivory }}>
            {t.contact.title}
          </Typography>
        </Reveal>

        <Reveal delay={160}>
          <Typography sx={{ mt: 2.5, color: colors.mutedDark }}>{t.contact.sub}</Typography>
        </Reveal>

        <Reveal delay={240}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 5, justifyContent: 'center' }}
          >
            <Button
              size="large"
              variant="contained"
              startIcon={<WhatsApp />}
              href={whatsappHref(t.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.whatsappButton}
              &nbsp;
              <Box component="span" dir="ltr">
                {BUSINESS.phoneDisplay}
              </Box>
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="inherit"
              startIcon={<CallOutlined />}
              href={BUSINESS.phoneHref}
              sx={{
                borderColor: 'rgba(244, 238, 226, 0.35)',
                '&:hover': { borderColor: colors.ivory, bgcolor: 'rgba(244, 238, 226, 0.06)' },
              }}
            >
              {t.callUs}
            </Button>
          </Stack>
        </Reveal>
      </Box>

      <Reveal delay={200}>
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            pt: { xs: 6, md: 7 },
            borderTop: '1px solid',
            borderColor: colors.lineDark,
            display: 'grid',
            gap: { xs: 4, sm: 3 },
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            textAlign: { xs: 'center', sm: 'start' },
          }}
        >
          {t.contact.info.map((item) => (
            <Box key={item.label}>
              <Typography
                component="p"
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: colors.brass,
                }}
              >
                {item.label}
              </Typography>
              {item.isPhone ? (
                <Typography
                  component="a"
                  href={whatsappHref(t.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  sx={{
                    display: 'inline-block',
                    mt: 1.25,
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: colors.ivory,
                    textDecoration: 'none',
                    '&:hover': { color: colors.brassLight },
                  }}
                >
                  {item.value}
                </Typography>
              ) : (
                <Typography sx={{ mt: 1.25, fontSize: '1.05rem', fontWeight: 600, color: colors.ivory }}>
                  {item.value}
                </Typography>
              )}
              <Typography variant="body2" sx={{ mt: 0.5, color: colors.faintDark }}>
                {item.caption}
              </Typography>
            </Box>
          ))}
        </Box>
      </Reveal>
    </Section>
  )
}
