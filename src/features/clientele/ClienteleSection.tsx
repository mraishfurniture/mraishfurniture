import { Box, Typography } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'
import AccountBalanceOutlined from '@mui/icons-material/AccountBalanceOutlined'
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined'
import VillaOutlined from '@mui/icons-material/VillaOutlined'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'
import { useLanguage } from '../../global/i18n/LanguageContext'

/** Ordered to match `clientele.items` in the translation dictionaries. */
const CLIENT_ICONS: SvgIconComponent[] = [AccountBalanceOutlined, VillaOutlined, StorefrontOutlined]

export function ClienteleSection() {
  const { t } = useLanguage()

  return (
    <Section id="clients">
      <SectionHeading
        overline={t.clientele.overline}
        title={t.clientele.title}
        subtitle={t.clientele.subtitle}
      />

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 4 },
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        }}
      >
        {t.clientele.items.map((client, index) => {
          const Icon = CLIENT_ICONS[index]
          return (
            <Reveal key={client.title} delay={index * 100}>
              <Box
                sx={{
                  position: 'relative',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  pt: 3.5,
                  pr: { md: 3 },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    left: 0,
                    width: 7,
                    height: 7,
                    transform: 'rotate(45deg)',
                    bgcolor: 'primary.main',
                  },
                }}
              >
                <Icon sx={{ fontSize: 30, color: 'primary.main' }} />
                <Typography variant="h5" sx={{ mt: 2 }}>
                  {client.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1.5, color: 'text.secondary' }}>
                  {client.text}
                </Typography>
              </Box>
            </Reveal>
          )
        })}
      </Box>
    </Section>
  )
}
