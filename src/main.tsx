import { StrictMode, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from '@mui/stylis-plugin-rtl'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource-variable/fraunces/opsz-italic.css'
import '@fontsource-variable/manrope/wght.css'
import '@fontsource/amiri/400.css'
import '@fontsource/amiri/700.css'
import '@fontsource/almarai/400.css'
import '@fontsource/almarai/700.css'
import '@fontsource/almarai/800.css'
import App from './App'
import { LanguageProvider, useLanguage } from './global/i18n/LanguageContext'
import { createAppTheme } from './global/theme/theme'

const cacheLtr = createCache({ key: 'mui' })
const cacheRtl = createCache({ key: 'mui-rtl', stylisPlugins: [prefixer, rtlPlugin] })

function ThemedApp() {
  const { lang } = useLanguage()
  const theme = useMemo(() => createAppTheme(lang), [lang])

  return (
    <CacheProvider value={lang === 'ar' ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemedApp />
    </LanguageProvider>
  </StrictMode>,
)
