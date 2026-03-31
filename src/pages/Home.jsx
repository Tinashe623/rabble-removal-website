import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Equipment from '../components/Equipment'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <Box>
      <Hero />
      <Services />
      <Equipment />
      <WhyChooseUs />
      <Testimonials />
    </Box>
  )
}

export default Home