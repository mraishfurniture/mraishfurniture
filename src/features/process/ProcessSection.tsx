import { Box, Typography } from '@mui/material'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { useLanguage } from '../../global/i18n/LanguageContext'
import { colors } from '../../global/theme/theme'

export function ProcessSection() {
  const { lang, t } = useLanguage()

  return (
    <Section id="process" dark>
      <SectionHeading
        dark
        overline={t.process.overline}
        title={t.process.title}
        subtitle={t.process.subtitle}
      />

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 4 },
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        }}
      >
        {t.process.steps.map((step, index) => (
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
                '&:hover .step-number': { color: 'rgba(201, 168, 116, 0.75)' },
              }}
            >
              <Typography
                component="span"
                className="step-number"
                dir="ltr"
                sx={{
                  display: 'inline-block',
                  fontFamily: (theme) => theme.typography.h1.fontFamily,
                  fontStyle: lang === 'ar' ? 'normal' : 'italic',
                  fontSize: '3.2rem',
                  lineHeight: 1,
                  color: 'rgba(201, 168, 116, 0.42)',
                  transition: 'color 0.35s ease',
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
