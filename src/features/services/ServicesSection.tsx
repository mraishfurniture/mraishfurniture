import { Box, Typography } from '@mui/material'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { colors } from '../../global/theme/theme'
import { SERVICES } from './services.data'

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeading
        overline="What we do"
        title="Every craft a finished room needs"
        subtitle="No subcontractors and no hand-offs — each trade is done by our own hands, so the details line up and the timeline holds."
      />

      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        }}
      >
        {SERVICES.map((service, index) => (
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
                },
              }}
            >
              <service.Icon sx={{ fontSize: 30, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2.5 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1.25, color: 'text.secondary' }}>
                {service.blurb}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  )
}
