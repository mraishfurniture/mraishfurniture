import { Box, Button, Stack, Typography } from '@mui/material'
import CallOutlined from '@mui/icons-material/CallOutlined'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { BUSINESS } from '../../global/config/business'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { colors } from '../../global/theme/theme'

const INFO = [
  {
    label: 'Phone & WhatsApp',
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.whatsappHref,
    caption: 'Photos, plans and voice notes welcome',
  },
  {
    label: 'Workshop',
    value: BUSINESS.city,
    caption: 'Serving clients across the Kingdom',
  },
  {
    label: 'Founder',
    value: BUSINESS.founder,
    caption: 'Carpenter, upholsterer, finisher',
  },
]

export function ContactSection() {
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
              Contact
            </Typography>
            <Box sx={{ width: 44, height: '1px', bgcolor: 'primary.main' }} />
          </Stack>
        </Reveal>

        <Reveal delay={80}>
          <Typography variant="h2" sx={{ mt: 3, color: colors.ivory }}>
            Let’s build something that lasts.
          </Typography>
        </Reveal>

        <Reveal delay={160}>
          <Typography sx={{ mt: 2.5, color: colors.mutedDark }}>
            Send a photo, a plan or just an idea — you’ll get a fast, honest answer about what it
            takes and what it costs.
          </Typography>
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
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp {BUSINESS.phoneDisplay}
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
              Call us
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
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {INFO.map((item) => (
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
              {item.href ? (
                <Typography
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
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
