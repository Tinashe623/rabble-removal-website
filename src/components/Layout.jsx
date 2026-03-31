import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import MobileQuickCall from './MobileQuickCall'

function Layout() {
  return (
    <Box>
      <Navbar />
      <Box as="main" minH="100vh">
        <Outlet />
      </Box>
      <Footer />
      <FloatingWhatsApp />
      <MobileQuickCall />
    </Box>
  )
}

export default Layout