import { Box, Typography } from '@mui/material'
import { SERVICE_NAMES } from '../../global/config/business'
import { colors, serifFamily } from '../../global/theme/theme'

/** Slow scrolling band of the eight trades, bridging the hero into the page. */
export function TradesMarquee() {
  return (
    <Box
      sx={{
        bgcolor: colors.espressoDeep,
        color: colors.brassLight,
        borderBottom: '1px solid',
        borderColor: 'rgba(201, 168, 116, 0.18)',
        py: 2.5,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: 'trades-marquee 48s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
          '@keyframes trades-marquee': { to: { transform: 'translateX(-50%)' } },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        {[0, 1].map((copy) => (
          <Box key={copy} aria-hidden={copy === 1} sx={{ display: 'flex', alignItems: 'center' }}>
            {SERVICE_NAMES.map((name) => (
              <Box key={name} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: serifFamily,
                    fontSize: '0.95rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    px: 3.5,
                  }}
                >
                  {name}
                </Typography>
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    transform: 'rotate(45deg)',
                    bgcolor: 'rgba(201, 168, 116, 0.55)',
                    flexShrink: 0,
                  }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
