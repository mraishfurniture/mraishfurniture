import { Fab, Fade, Tooltip, useScrollTrigger } from '@mui/material'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { whatsappHref } from '../config/business'
import { useLanguage } from '../i18n/LanguageContext'
import { colors } from '../theme/theme'

/** Floating WhatsApp shortcut; appears once the visitor scrolls past the hero. */
export function WhatsAppFab() {
  const { t } = useLanguage()
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 520 })

  return (
    <Fade in={visible}>
      <Tooltip title={t.fabLabel} placement="left">
        <Fab
          component="a"
          href={whatsappHref(t.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          aria-label={t.fabLabel}
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
