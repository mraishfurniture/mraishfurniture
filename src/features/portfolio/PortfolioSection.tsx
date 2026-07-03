import { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { colors } from '../../global/theme/theme'
import { PROJECTS } from './portfolio.data'

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))]

export function PortfolioSection() {
  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === category)

  return (
    <Section id="work">
      <SectionHeading
        overline="Selected work"
        title="The proof is in the pieces"
        subtitle="A glimpse of the joinery, upholstery and finishing that leaves our Amman workshop."
      />

      <Reveal>
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.25 }}>
          {CATEGORIES.map((cat) => {
            const selected = cat === category
            return (
              <Box
                key={cat}
                component="button"
                type="button"
                onClick={() => setCategory(cat)}
                sx={{
                  px: 2.25,
                  py: 1,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: selected ? colors.espresso : 'divider',
                  bgcolor: selected ? colors.espresso : 'transparent',
                  color: selected ? colors.ivory : 'text.secondary',
                  transition: 'all 0.25s ease',
                  '&:hover': { borderColor: colors.brass, color: selected ? colors.ivory : 'text.primary' },
                }}
              >
                {cat}
              </Box>
            )
          })}
        </Stack>
      </Reveal>

      <Box
        key={category}
        sx={{
          mt: 5,
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gridAutoRows: { xs: 280, md: 300 },
          gridAutoFlow: 'dense',
        }}
      >
        {visible.map((project, index) => (
          <Box
            key={project.id}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              gridRow: { xs: 'span 1', md: project.tall ? 'span 2' : 'span 1' },
              animation: 'portfolio-in 0.55s ease both',
              animationDelay: `${index * 60}ms`,
              '@keyframes portfolio-in': {
                from: { opacity: 0, transform: 'translateY(18px)' },
                to: { opacity: 1, transform: 'none' },
              },
              '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
              '&:hover img': { transform: 'scale(1.05)' },
              '&:hover .frame': { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src={project.img}
              alt={project.title}
              loading="lazy"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(21, 16, 9, 0.85) 0%, rgba(21, 16, 9, 0.14) 46%, transparent 70%)',
              }}
            />
            <Box
              className="frame"
              aria-hidden
              sx={{
                position: 'absolute',
                inset: 12,
                border: '1px solid rgba(244, 238, 226, 0.35)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
              }}
            />
            <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 3 }}>
              <Typography
                component="span"
                sx={{
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: colors.brassLight,
                }}
              >
                {project.category}
              </Typography>
              <Typography variant="h6" sx={{ mt: 0.75, color: colors.ivory }}>
                {project.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" sx={{ mt: 4, fontStyle: 'italic', color: 'text.secondary' }}>
        Representative imagery. Full project photography is available on WhatsApp — ask to see work
        similar to yours.
      </Typography>
    </Section>
  )
}
