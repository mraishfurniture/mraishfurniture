import { Box, Typography } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'
import AccountBalanceOutlined from '@mui/icons-material/AccountBalanceOutlined'
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined'
import VillaOutlined from '@mui/icons-material/VillaOutlined'
import { Reveal } from '../../global/components/Reveal'
import { Section } from '../../global/components/Section'
import { SectionHeading } from '../../global/components/SectionHeading'

interface Client {
  title: string
  text: string
  Icon: SvgIconComponent
}

const CLIENTS: Client[] = [
  {
    title: 'Diplomatic missions & embassies',
    Icon: AccountBalanceOutlined,
    text: 'Discreet, punctual and precise — from reupholstering a residence’s sofas to fitting out reception rooms that host the world.',
  },
  {
    title: 'Private homes & villas',
    Icon: VillaOutlined,
    text: 'Bespoke pieces and full interior refits for families who want furniture made for their rooms, not for a showroom.',
  },
  {
    title: 'Hotels, offices & commercial',
    Icon: StorefrontOutlined,
    text: 'Durable, repairable furnishing and finishing for spaces that have to work hard, every single day.',
  },
]

export function ClienteleSection() {
  return (
    <Section id="clients">
      <SectionHeading
        overline="Who we serve"
        title="At home in demanding rooms"
        subtitle="From diplomatic residences to family villas, our work lives in rooms where the standard is non-negotiable."
      />

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 4 },
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        }}
      >
        {CLIENTS.map((client, index) => (
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
              <client.Icon sx={{ fontSize: 30, color: 'primary.main' }} />
              <Typography variant="h5" sx={{ mt: 2 }}>
                {client.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1.5, color: 'text.secondary' }}>
                {client.text}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  )
}
