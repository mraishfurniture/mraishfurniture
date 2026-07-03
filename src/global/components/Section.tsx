import { Box, Container } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { colors } from '../theme/theme'

interface SectionProps {
  id?: string
  /** Espresso background with ivory text. */
  dark?: boolean
  /** Deeper espresso, for the closing contact block. */
  deep?: boolean
  /** Skip the inner Container for full-bleed content. */
  bleed?: boolean
  sx?: SxProps<Theme>
  children: ReactNode
}

/** Standard page section: vertical rhythm, background tone and anchor offset. */
export function Section({ id, dark, deep, bleed, sx, children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={[
        {
          py: { xs: 10, md: 14 },
          scrollMarginTop: { xs: 64, md: 80 },
          bgcolor: deep ? colors.espressoDeep : dark ? colors.espresso : 'background.default',
          color: dark || deep ? colors.ivory : 'text.primary',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {bleed ? children : <Container>{children}</Container>}
    </Box>
  )
}
