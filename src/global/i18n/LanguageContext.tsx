import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DICTIONARIES, type Dictionary, type Language } from './translations'

interface LanguageValue {
  lang: Language
  t: Dictionary
  toggle: () => void
}

const LanguageContext = createContext<LanguageValue | null>(null)
const STORAGE_KEY = 'mraish-lang'

function initialLanguage(): Language {
  // English is the default; Arabic only when explicitly chosen before.
  try {
    return localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(initialLanguage)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* private browsing — ignore */
    }
  }, [lang])

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      t: DICTIONARIES[lang],
      toggle: () => setLang((prev) => (prev === 'en' ? 'ar' : 'en')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
