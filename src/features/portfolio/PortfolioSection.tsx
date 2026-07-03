import { useState } from 'react'
import { Box, Dialog, IconButton, Stack, Typography } from '@mui/material'
import CloseRounded from '@mui/icons-material/CloseRounded'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { useLanguage } from '../../global/i18n/LanguageContext'
import { colors } from '../../global/theme/theme'
import { CATEGORY_KEYS, PROJECTS, type Project } from './portfolio.data'

export function PortfolioSection() {
  const { t } = useLanguage()
  const [categoryKey, setCategoryKey] = useState('all')
  const [openProject, setOpenProject] = useState<Project | null>(null)

  const visible =
    categoryKey === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categoryKey === categoryKey)

  return (
    <Section id="work">
      <SectionHeading
        overline={t.portfolio.overline}
        title={t.portfolio.title}
        subtitle={t.portfolio.subtitle}
      />

      <Reveal>
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.25 }}>
          {['all', ...CATEGORY_KEYS].map((key) => {
            const selected = key === categoryKey
            const label = key === 'all' ? t.portfolio.all : t.portfolio.categories[key]
            return (
              <Box
                key={key}
                component="button"
                type="button"
                onClick={() => setCategoryKey(key)}
                sx={{
                  px: 2.25,
                  py: 1,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: selected ? colors.espresso : 'divider',
                  bgcolor: selected ? colors.espresso : 'transparent',
                  color: selected ? colors.ivory : 'text.secondary',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: colors.brass,
                    color: selected ? colors.ivory : 'text.primary',
                  },
                }}
              >
                {label}
              </Box>
            )
          })}
        </Stack>
      </Reveal>

      <Box
        key={categoryKey}
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
            component="button"
            type="button"
            onClick={() => setOpenProject(project)}
            aria-label={t.portfolio.projects[project.id]}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              p: 0,
              border: 'none',
              cursor: 'pointer',
              textAlign: 'inherit',
              bgcolor: colors.imgPlaceholder,
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
              alt={t.portfolio.projects[project.id]}
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
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: colors.brassLight,
                }}
              >
                {t.portfolio.categories[project.categoryKey]}
              </Typography>
              <Typography variant="h6" sx={{ mt: 0.75, color: colors.ivory }}>
                {t.portfolio.projects[project.id]}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" sx={{ mt: 4, fontStyle: 'italic', color: 'text.secondary' }}>
        {t.portfolio.caption}
      </Typography>

      <Dialog
        open={openProject !== null}
        onClose={() => setOpenProject(null)}
        maxWidth="md"
        slotProps={{ paper: { sx: { bgcolor: colors.espressoDeep, backgroundImage: 'none' } } }}
      >
        {openProject && (
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={() => setOpenProject(null)}
              aria-label="Close"
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 1,
                color: colors.ivory,
                bgcolor: 'rgba(21, 16, 9, 0.55)',
                '&:hover': { bgcolor: 'rgba(21, 16, 9, 0.8)' },
              }}
            >
              <CloseRounded />
            </IconButton>
            <Box
              component="img"
              src={openProject.img.replace('w=1100', 'w=1600')}
              alt={t.portfolio.projects[openProject.id]}
              sx={{ display: 'block', width: '100%', maxHeight: '78vh', objectFit: 'cover' }}
            />
            <Box sx={{ p: 3, color: colors.ivory }}>
              <Typography
                component="span"
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: colors.brassLight,
                }}
              >
                {t.portfolio.categories[openProject.categoryKey]}
              </Typography>
              <Typography variant="h5" sx={{ mt: 0.75 }}>
                {t.portfolio.projects[openProject.id]}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Section>
  )
}
