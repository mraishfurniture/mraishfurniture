import { Footer } from './global/components/Footer'
import { Navbar } from './global/components/Navbar'
import { ScrollProgress } from './global/components/ScrollProgress'
import { WhatsAppFab } from './global/components/WhatsAppFab'
import { AboutSection } from './features/about/AboutSection'
import { FounderQuote } from './features/about/FounderQuote'
import { ClienteleSection } from './features/clientele/ClienteleSection'
import { ContactSection } from './features/contact/ContactSection'
import { HeroSection } from './features/hero/HeroSection'
import { TradesMarquee } from './features/hero/TradesMarquee'
import { PortfolioSection } from './features/portfolio/PortfolioSection'
import { ProcessSection } from './features/process/ProcessSection'
import { ServicesSection } from './features/services/ServicesSection'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TradesMarquee />
        <AboutSection />
        <ServicesSection />
        <FounderQuote />
        <PortfolioSection />
        <ProcessSection />
        <ClienteleSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
