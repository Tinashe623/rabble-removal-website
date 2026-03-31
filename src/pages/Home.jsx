import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Equipment from '../components/Equipment'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import SEO from '../components/SEO'

function Home() {
  return (
    <Box>
      <SEO 
        title="Tich Rubble Removal | Professional TLB Hire & Rubble Removal South Africa"
        description="Leading rubble removal company in Johannesburg & Pretoria. We offer TLB hire, site clearing, and waste disposal. Same-day service available. Get a free quote today!"
        keywords="rubble removal Johannesburg, TLB hire Pretoria, site clearing Gauteng, waste disposal, construction debris removal, TLB machine rental"
      />
      <Hero />
      <Services />
      <Equipment />
      <WhyChooseUs />
      <Testimonials />
    </Box>
  )
}

export default Home