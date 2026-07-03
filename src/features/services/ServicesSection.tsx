import { Box, Typography } from '@mui/material'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { useLanguage } from '../../global/i18n/LanguageContext'
import { colors } from '../../global/theme/theme'
import { SERVICE_ICONS } from './services.data'

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <Section id="services">
      <SectionHeading
        overline={t.services.overline}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />

      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        }}
      >
        {t.services.items.map((service, index) => {
          const Icon = SERVICE_ICONS[index]
          return (
            <Reveal key={service.title} delay={(index % 4) * 70} sx={{ height: '100%' }}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  p: { xs: 3.5, md: 4 },
                  bgcolor: colors.card,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    right: -1,
                    height: 2,
                    bgcolor: 'primary.main',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.45s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: colors.lineBrass,
                    boxShadow: '0 18px 40px -18px rgba(34, 27, 20, 0.28)',
                    '&::before': { transform: 'scaleX(1)' },
                    '& .icon-tile': { bgcolor: 'primary.main', color: colors.card },
                  },
                }}
              >
                <Box
                  className="icon-tile"
                  sx={{
                    width: 52,
                    height: 52,
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid',
                    borderColor: colors.lineBrass,
                    color: 'primary.main',
                    transition: 'background-color 0.35s ease, color 0.35s ease',
                  }}
                >
                  <Icon sx={{ fontSize: 26 }} />
                </Box>
                <Typography variant="h6" sx={{ mt: 2.5 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1.25, color: 'text.secondary' }}>
                  {service.blurb}
                </Typography>
              </Box>
            </Reveal>
          )
        })}
      </Box>
    </Section>
  )
}
