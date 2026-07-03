import { Box, Stack, Typography } from '@mui/material'
import { BUSINESS } from '../../global/config/business'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { useLanguage } from '../../global/i18n/LanguageContext'
import { colors } from '../../global/theme/theme'

const WORKSHOP_IMG =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&h=1125&q=80'
const DETAIL_IMG =
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=560&h=560&q=80'

export function AboutSection() {
  const { lang, t } = useLanguage()
  const founderName = lang === 'ar' ? 'عمر مريش' : BUSINESS.founder

  return (
    <Section id="about">
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 7, md: 10 },
          gridTemplateColumns: { xs: '1fr', md: '5fr 6fr' },
          alignItems: 'center',
        }}
      >
        <Reveal>
          <Box sx={{ position: 'relative', mr: { md: 3 }, pb: { sm: 7 } }}>
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                top: -18,
                left: -18,
                width: '70%',
                height: '55%',
                border: '1px solid',
                borderColor: colors.lineBrass,
                display: { xs: 'none', sm: 'block' },
              }}
            />
            <Box
              component="img"
              src={WORKSHOP_IMG}
              alt={t.about.imgMainAlt}
              loading="lazy"
              sx={{
                position: 'relative',
                display: 'block',
                width: '100%',
                aspectRatio: '4 / 5',
                objectFit: 'cover',
                bgcolor: colors.imgPlaceholder,
              }}
            />
            <Box
              component="img"
              src={DETAIL_IMG}
              alt={t.about.imgDetailAlt}
              loading="lazy"
              sx={{
                position: 'absolute',
                right: { sm: -14, lg: -34 },
                bottom: 0,
                width: '46%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                border: '10px solid',
                borderColor: 'background.default',
                bgcolor: colors.imgPlaceholder,
                display: { xs: 'none', sm: 'block' },
              }}
            />
          </Box>
        </Reveal>

        <Box>
          <SectionHeading overline={t.about.overline} title={t.about.title} />
          <Reveal delay={120}>
            <Typography sx={{ color: 'text.secondary' }}>{t.about.p1}</Typography>
          </Reveal>
          <Reveal delay={200}>
            <Typography sx={{ mt: 2.5, color: 'text.secondary' }}>{t.about.p2}</Typography>
          </Reveal>

          <Stack spacing={2} sx={{ mt: 4.5 }}>
            {t.about.highlights.map((item, index) => (
              <Reveal key={item.lead} delay={260 + index * 80}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      mt: 1.4,
                      flexShrink: 0,
                      transform: 'rotate(45deg)',
                      bgcolor: 'primary.main',
                    }}
                  />
                  <Typography sx={{ color: 'text.secondary' }}>
                    <Box component="strong" sx={{ color: 'text.primary', fontWeight: 700 }}>
                      {item.lead} —{' '}
                    </Box>
                    {item.rest}
                  </Typography>
                </Stack>
              </Reveal>
            ))}
          </Stack>

          <Reveal delay={420}>
            <Stack
              direction="row"
              spacing={2.5}
              sx={{ mt: 5, pt: 4, borderTop: '1px solid', borderColor: 'divider', alignItems: 'center' }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  flexShrink: 0,
                  bgcolor: colors.espresso,
                  color: colors.brassLight,
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: (theme) => theme.typography.h5.fontFamily,
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                }}
              >
                OM
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700 }}>{founderName}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t.about.founderRole} ·{' '}
                  <Box component="span" dir="ltr">
                    {BUSINESS.phoneDisplay}
                  </Box>
                </Typography>
              </Box>
            </Stack>
          </Reveal>
        </Box>
      </Box>
    </Section>
  )
}
