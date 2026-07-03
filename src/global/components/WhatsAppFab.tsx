import { Fab, Fade, Tooltip, useScrollTrigger } from '@mui/material'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { BUSINESS } from '../config/business'
import { colors } from '../theme/theme'

/** Floating WhatsApp shortcut; appears once the visitor scrolls past the hero. */
export function WhatsAppFab() {
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 520 })

  return (
    <Fade in={visible}>
      <Tooltip title="Chat on WhatsApp" placement="left">
        <Fab
          component="a"
          href={BUSINESS.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          sx={{
            position: 'fixed',
            right: { xs: 18, md: 28 },
            bottom: { xs: 18, md: 28 },
            zIndex: 1200,
            bgcolor: colors.espresso,
            color: colors.brassLight,
            border: '1px solid',
            borderColor: colors.lineBrass,
            boxShadow: '0 14px 32px -12px rgba(0, 0, 0, 0.55)',
            '&:hover': { bgcolor: colors.espressoDeep },
          }}
        >
          <WhatsApp />
        </Fab>
      </Tooltip>
    </Fade>
  )
}
