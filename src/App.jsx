import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import theme from './theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import EquipmentPage from './pages/EquipmentPage'
import QuotePage from './pages/QuotePage'

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
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