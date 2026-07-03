import { Box, Typography } from '@mui/material'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { colors, serifFamily } from '../../global/theme/theme'

const STEPS = [
  {
    title: 'Consult & measure',
    text: 'We visit, listen, measure and advise — bring photos, plans or just an idea.',
  },
  {
    title: 'Design & materials',
    text: 'You approve the design, fabrics, woods and finishes before anything is cut.',
  },
  {
    title: 'Craft in our workshop',
    text: 'Joinery, upholstery, glass and finishing happen under one roof, under our eyes.',
  },
  {
    title: 'Deliver & install',
    text: 'We deliver, install, light and paint — then hand over a finished space, not a kit.',
  },
]

export function ProcessSection() {
  return (
    <Section id="process" dark>
      <SectionHeading
        dark
        overline="How we work"
        title="From first visit to final polish"
        subtitle="A simple, predictable path — you always know what happens next and who is responsible. (Hint: it’s us.)"
      />

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 4 },
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        }}
      >
        {STEPS.map((step, index) => (
          <Reveal key={step.title} delay={index * 90}>
            <Box
              sx={{
                position: 'relative',
                borderTop: '1px solid',
                borderColor: 'rgba(201, 168, 116, 0.28)',
                pt: 3.5,
                pr: { lg: 2 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -4,
                  left: 0,
                  width: 7,
                  height: 7,
                  transform: 'rotate(45deg)',
                  bgcolor: 'primary.main',
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: serifFamily,
                  fontStyle: 'italic',
                  fontSize: '3.2rem',
                  lineHeight: 1,
                  color: 'rgba(201, 168, 116, 0.42)',
                }}
              >
                0{index + 1}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1.5, color: colors.ivory }}>
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1.25, color: colors.mutedDark }}>
                {step.text}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  )
}
