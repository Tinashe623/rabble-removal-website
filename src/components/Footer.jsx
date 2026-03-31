import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  Icon,
  Divider,
} from '@chakra-ui/react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const footerLinks = {
  about: [
    { label: 'About Us', href: '#' },
    { label: 'Our Fleet', href: '#equipment' },
    { label: 'Services', href: '#services' },
  ],
  services: [
    { label: 'Rubble Removal', href: '#services' },
    { label: 'Site Clearing', href: '#services' },
    { label: 'TLB Hire', href: '#services' },
    { label: 'Waste Disposal', href: '#services' },
  ],
  contact: [
    { label: '+27 12 345 6789', isContact: true, href: 'tel:+27123456789' },
    { label: '+27 12 345 6789', isWhatsApp: true, href: 'https://wa.me/27123456789' },
    { label: 'info@tichrubble.co.za', isEmail: true, href: 'mailto:info@tichrubble.co.za' },
  ],
}

function Footer() {
  return (
    <Box bg="brand.primary" pt={{ base: 10, md: 16 }} pb={8}>
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mb={10}>
          <VStack align="flex-start" spacing={4}>
            <Text
              fontFamily="heading"
              fontSize="2xl"
              color="white"
              fontWeight="bold"
            >
              TICH<span style={{ color: '#f59e0b' }}>.</span>
            </Text>
            <Text color="gray.400" fontSize="sm" lineHeight="1.7">
              Professional rubble removal and TLB hire services across South Africa. 
              Fast, reliable, and affordable.
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="1px">
              Quick Links
            </Text>
            {footerLinks.about.map((link, idx) => (
              <ChakraLink
                key={idx}
                href={link.href}
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.accent' }}
                transition="color 0.3s ease"
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="1px">
              Services
            </Text>
            {footerLinks.services.map((link, idx) => (
              <ChakraLink
                key={idx}
                href={link.href}
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.accent' }}
                transition="color 0.3s ease"
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="1px">
              Contact
            </Text>
            <HStack spacing={3}>
              <Icon as={FaPhone} color="brand.accent" fontSize="sm" />
              <ChakraLink
                href="tel:+27123456789"
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.accent' }}
              >
                +27 12 345 6789
              </ChakraLink>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaWhatsapp} color="#25D366" fontSize="sm" />
              <ChakraLink
                href="https://wa.me/27123456789"
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.accent' }}
              >
                WhatsApp
              </ChakraLink>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="brand.accent" fontSize="sm" />
              <ChakraLink
                href="mailto:info@tichrubble.co.za"
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.accent' }}
              >
                info@tichrubble.co.za
              </ChakraLink>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="gray.700" mb={8} />

        <HStack justify="space-between" flexWrap="wrap" spacing={4}>
          <Text color="gray.500" fontSize="sm">
            © 2024 Tich Rubble Removal. All rights reserved.
          </Text>

          <HStack spacing={4}>
            <ChakraLink
              href="#"
              color="gray.400"
              _hover={{ color: 'brand.accent' }}
            >
              <Icon as={FaFacebook} fontSize="lg" />
            </ChakraLink>
            <ChakraLink
              href="#"
              color="gray.400"
              _hover={{ color: 'brand.accent' }}
            >
              <Icon as={FaInstagram} fontSize="lg" />
            </ChakraLink>
            <ChakraLink
              href="#"
              color="gray.400"
              _hover={{ color: 'brand.accent' }}
            >
              <Icon as={FaLinkedin} fontSize="lg" />
            </ChakraLink>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}

export default Footer