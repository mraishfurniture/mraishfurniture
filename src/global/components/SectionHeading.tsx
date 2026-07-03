import { Box, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { colors } from '../theme/theme'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  overline: string
  title: ReactNode
  subtitle?: ReactNode
  dark?: boolean
  align?: 'left' | 'center'
}

/** Overline + rule, serif title and optional subtitle — the heading of every section. */
export function SectionHeading({ overline, title, subtitle, dark, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Box
      sx={{
        mb: { xs: 6, md: 8 },
        textAlign: align,
        maxWidth: centered ? 780 : 860,
        mx: centered ? 'auto' : 0,
      }}
    >
      <Reveal>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: centered ? 'center' : 'flex-start' }}
        >
          <Box sx={{ width: 44, height: '1px', bgcolor: 'primary.main' }} />
          <Typography
            component="span"
            sx={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color: 'primary.main',
            }}
          >
            {overline}
          </Typography>
          {centered && <Box sx={{ width: 44, height: '1px', bgcolor: 'primary.main' }} />}
        </Stack>
      </Reveal>
      <Reveal delay={80}>
        <Typography variant="h2" sx={{ mt: 2.5, color: dark ? colors.ivory : 'text.primary' }}>
          {title}
        </Typography>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <Typography
            sx={{
              mt: 2.5,
              maxWidth: 640,
              mx: centered ? 'auto' : 0,
              color: dark ? colors.mutedDark : 'text.secondary',
            }}
          >
            {subtitle}
          </Typography>
        </Reveal>
      )}
    </Box>
  )
}
