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
  Image,
} from '@chakra-ui/react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

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
    { label: '+27 84 666 6978', isContact: true, href: 'tel:+27846666978' },
    { label: '+27 84 666 6978', isWhatsApp: true, href: 'https://wa.me/27846666978' },
    { label: 'exerstel@gmail.com', isEmail: true, href: 'mailto:exerstel@gmail.com' },
  ],
}

function Footer() {
  return (
    <Box bg="brand.primary" pt={{ base: 10, md: 16 }} pb={8} position="relative" overflow="hidden">
      {/* Background accent */}
      <Box
        position="absolute"
        top={0}
        right={0}
        w="400px"
        h="400px"
        borderRadius="full"
        bg="rgba(245, 158, 11, 0.03)"
        filter="blur(80px)"
        transform="translate(30%, -30%)"
      />
      
      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} mb={12}>
          <VStack align="flex-start" spacing={5}>
            <HStack spacing={3} align="center">
              <Image
                src="/logo.png"
                alt="Exquisite Energies Logo"
                h="60px"
                w="60px"
                objectFit="contain"
              />
              <Text
                fontFamily="heading"
                fontSize="xl"
                color="white"
                fontWeight="bold"
                letterSpacing="-0.5px"
              >
                EXQUISITE <span style={{ color: '#f59e0b' }}>ENERGIES</span>
              </Text>
            </HStack>
            <Text color="gray.400" fontSize="sm" lineHeight="1.8">
              Professional rubble removal and TLB hire services across South Africa. 
              Fast, reliable, and affordable.
            </Text>
            <HStack spacing={3} pt={2}>
              {[
                { icon: FaFacebook, href: '#', color: '#1877F2' },
                { icon: FaInstagram, href: '#', color: '#E4405F' },
                { icon: FaLinkedin, href: '#', color: '#0A66C2' },
              ].map((social, idx) => (
                <ChakraLink
                  key={idx}
                  href={social.href}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="rgba(255, 255, 255, 0.05)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  _hover={{ 
                    bg: social.color, 
                    borderColor: social.color,
                    boxShadow: `0 8px 20px ${social.color}40`
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={social.icon} color="white" fontSize="lg" />
                </ChakraLink>
              ))}
            </HStack>
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Text color="white" fontWeight="700" fontSize="sm" textTransform="uppercase" letterSpacing="1.5px">
              Quick Links
            </Text>
            {footerLinks.about.map((link, idx) => (
              <ChakraLink
                key={idx}
                href={link.href}
                color="gray.400"
                fontSize="sm"
                fontWeight="500"
                _hover={{ color: 'brand.accent', pl: 2 }}
                transition="all 0.3s ease"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  w: '0px',
                  h: '2px',
                  bg: 'brand.accent',
                  transition: 'width 0.3s ease',
                }}
                sx={{
                  '&:hover::before': {
                    w: '6px',
                  },
                }}
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Text color="white" fontWeight="700" fontSize="sm" textTransform="uppercase" letterSpacing="1.5px">
              Services
            </Text>
            {footerLinks.services.map((link, idx) => (
              <ChakraLink
                key={idx}
                href={link.href}
                color="gray.400"
                fontSize="sm"
                fontWeight="500"
                _hover={{ color: 'brand.accent', pl: 2 }}
                transition="all 0.3s ease"
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Text color="white" fontWeight="700" fontSize="sm" textTransform="uppercase" letterSpacing="1.5px">
              Contact
            </Text>
            <HStack spacing={3}>
              <Icon as={FaPhone} color="brand.accent" fontSize="sm" />
              <ChakraLink
                href="tel:+27846666978"
                color="gray.400"
                fontSize="sm"
                fontWeight="500"
                _hover={{ color: 'brand.accent' }}
                transition="color 0.3s ease"
              >
                +27 84 666 6978
              </ChakraLink>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaWhatsapp} color="#25D366" fontSize="sm" />
              <ChakraLink
                href="https://wa.me/27123456789"
                color="gray.400"
                fontSize="sm"
                fontWeight="500"
                _hover={{ color: 'brand.accent' }}
                transition="color 0.3s ease"
              >
                WhatsApp
              </ChakraLink>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="brand.accent" fontSize="sm" />
              <ChakraLink
                href="mailto:exerstel@gmail.com"
                color="gray.400"
                fontSize="sm"
                fontWeight="500"
                _hover={{ color: 'brand.accent' }}
                transition="color 0.3s ease"
              >
                exerstel@gmail.com
              </ChakraLink>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaMapMarkerAlt} color="brand.accent" fontSize="sm" />
              <Text color="gray.400" fontSize="sm" fontWeight="500">
                Johannesburg, SA
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="rgba(255, 255, 255, 0.08)" mb={8} />

        <HStack justify="space-between" flexWrap="wrap" spacing={4}>
          <Text color="gray.500" fontSize="sm" fontWeight="500">
            © 2026 Exquisite Energies. All rights reserved.
          </Text>

          <HStack spacing={6}>
            <ChakraLink
              href="#"
              color="gray.500"
              fontSize="sm"
              fontWeight="500"
              _hover={{ color: 'brand.accent' }}
              transition="color 0.3s ease"
            >
              Privacy Policy
            </ChakraLink>
            <ChakraLink
              href="#"
              color="gray.500"
              fontSize="sm"
              fontWeight="500"
              _hover={{ color: 'brand.accent' }}
              transition="color 0.3s ease"
            >
              Terms of Service
            </ChakraLink>
          </HStack>
        </HStack>

        <Text color="gray.600" fontSize="xs" textAlign="center" mt={4}>
          Designed and developed by{' '}
          <ChakraLink
            href="https://tinashe-mundieta.vercel.app"
            color="brand.accent"
            _hover={{ textDecoration: 'underline' }}
            isExternal
          >
            Tinashe Web Solutions
          </ChakraLink>
        </Text>
      </Container>
    </Box>
  )
}

export default Footer