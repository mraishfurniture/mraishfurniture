import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import CallOutlined from '@mui/icons-material/CallOutlined'
import CloseRounded from '@mui/icons-material/CloseRounded'
import MenuRounded from '@mui/icons-material/MenuRounded'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { BUSINESS, NAV_ITEMS } from '../config/business'
import { colors } from '../theme/theme'
import { useScrollSpy } from '../hooks/useScrollSpy'

const SPY_IDS = NAV_ITEMS.map((item) => item.id)

function Wordmark() {
  return (
    <Box component="a" href="#top" sx={{ textDecoration: 'none', color: 'inherit', lineHeight: 1 }}>
      <Typography variant="h5" component="span" sx={{ fontStyle: 'italic', fontWeight: 600 }}>
        Mraish
      </Typography>
      <Typography
        component="span"
        sx={{
          display: 'block',
          fontSize: '0.55rem',
          fontWeight: 700,
          letterSpacing: '0.42em',
          textTransform: 'uppercase',
          mt: 0.5,
          opacity: 0.75,
        }}
      >
        Furniture · Amman
      </Typography>
    </Box>
  )
}

export function Navbar() {
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 24 })
  const active = useScrollSpy(SPY_IDS)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(244, 238, 226, 0.9)' : 'transparent',
          color: scrolled ? 'text.primary' : colors.ivory,
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'divider' : 'rgba(244, 238, 226, 0.14)',
          transition: 'background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 78 }, justifyContent: 'space-between' }}>
            <Wordmark />

            <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.id}
                  component="a"
                  href={`#${item.id}`}
                  sx={{
                    position: 'relative',
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    py: 0.5,
                    opacity: active === item.id ? 1 : 0.82,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      height: '1px',
                      width: '100%',
                      bgcolor: 'primary.main',
                      transform: active === item.id ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': { opacity: 1, '&::after': { transform: 'scaleX(1)' } },
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Button
                href={BUSINESS.phoneHref}
                color="inherit"
                startIcon={<CallOutlined />}
                sx={{
                  display: { xs: 'none', lg: 'inline-flex' },
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'none',
                }}
              >
                {BUSINESS.phoneDisplay}
              </Button>
              <Button
                variant="contained"
                size="medium"
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noreferrer"
                startIcon={<WhatsApp />}
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                WhatsApp
              </Button>
              <IconButton
                color="inherit"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                sx={{ display: { md: 'none' } }}
              >
                <MenuRounded />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={close}
        slotProps={{
          paper: {
            sx: { width: 'min(420px, 100vw)', bgcolor: colors.espressoDeep, color: colors.ivory, p: 4 },
          },
        }}
      >
        <Stack sx={{ height: '100%' }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="span" sx={{ fontStyle: 'italic' }}>
              Mraish
            </Typography>
            <IconButton color="inherit" aria-label="Close menu" onClick={close}>
              <CloseRounded />
            </IconButton>
          </Stack>

          <Stack sx={{ mt: 5, flex: 1 }}>
            {NAV_ITEMS.map((item, index) => (
              <Box
                key={item.id}
                component="a"
                href={`#${item.id}`}
                onClick={close}
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 2,
                  py: 2.25,
                  textDecoration: 'none',
                  color: colors.ivory,
                  borderBottom: '1px solid',
                  borderColor: colors.lineDark,
                  '&:hover': { color: colors.brassLight },
                }}
              >
                <Typography component="span" sx={{ fontSize: '0.7rem', fontWeight: 700, color: colors.brass }}>
                  0{index + 1}
                </Typography>
                <Typography variant="h4" component="span">
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Stack spacing={1.5} sx={{ mt: 4 }}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              startIcon={<WhatsApp />}
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </Button>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              color="inherit"
              startIcon={<CallOutlined />}
              href={BUSINESS.phoneHref}
              sx={{ borderColor: colors.lineDark, '&:hover': { borderColor: colors.ivory } }}
            >
              {BUSINESS.phoneDisplay}
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  )
}
