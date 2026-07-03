import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  /** Extra transition delay in ms, for staggering siblings. */
  delay?: number
  sx?: SxProps<Theme>
}

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ children, delay = 0, sx }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Box
      ref={ref}
      sx={[
        {
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(26px)',
          transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
            transform: 'none',
            opacity: 1,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  )
}
