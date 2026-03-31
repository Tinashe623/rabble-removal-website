import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import theme from './theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import EquipmentPage from './pages/EquipmentPage'
import QuotePage from './pages/QuotePage'
import Analytics from './components/Analytics'

// Replace with your actual tracking IDs when ready
// Get GA4 ID from: https://analytics.google.com
// Get Facebook Pixel ID from: https://business.facebook.com
const GA4_ID = null // e.g., 'G-XXXXXXXXXX'
const FACEBOOK_PIXEL_ID = null // e.g., '1234567890'

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Analytics ga4Id={GA4_ID} facebookPixelId={FACEBOOK_PIXEL_ID} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="equipment" element={<EquipmentPage />} />
              <Route path="quote" element={<QuotePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App