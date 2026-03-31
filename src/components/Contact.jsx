import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
} from '@chakra-ui/react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <Box id="contact" py={{ base: '60px', md: '100px' }} bg="brand.dark">
      <Container maxW="1200px">
        <SectionHeading
          title="Contact Us"
          subtitle="Ready to get started? Reach out today!"
          alignment="center"
        />

        <VStack spacing={8} mt={12}>
          <Text color="gray.400" fontSize="lg" textAlign="center" maxW="600px">
            Whether you need a quote or have questions about our services, 
            we're here to help. Choose your preferred way to reach us.
          </Text>

          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Button
              leftIcon={<FaPhone size={16} />}
              bg="white"
              color="brand.dark"
              size="lg"
              px={8}
              as="a"
              href="tel:+27123456789"
              _hover={{ bg: 'brand.accent', color: 'white', transform: 'translateY(-3px)' }}
              transition="all 0.3s ease"
            >
              Call Now
            </Button>
            <Button
              leftIcon={<FaWhatsapp size={18} />}
              bg="#25D366"
              color="white"
              size="lg"
              px={8}
              as="a"
              href="https://wa.me/27123456789?text=Hi, I need rubble removal services"
              _hover={{ bg: '#128C7E', transform: 'translateY(-3px)' }}
              transition="all 0.3s ease"
            >
              WhatsApp
            </Button>
            <Button
              leftIcon={<FaEnvelope size={16} />}
              variant="secondary"
              size="lg"
              px={8}
              as="a"
              href="mailto:info@tichrubble.co.za"
              _hover={{ bg: 'white', color: 'brand.dark', transform: 'translateY(-3px)' }}
              transition="all 0.3s ease"
            >
              Email Us
            </Button>
          </HStack>

          <Box
            bg="brand.primary"
            p={8}
            borderRadius="8px"
            maxW="500px"
            w="100%"
          >
            <HStack spacing={4} justify="center">
              <Icon as={FaMapMarkerAlt} color="brand.accent" fontSize="xl" />
              <VStack align="flex-start" spacing={0}>
                <Text color="white" fontWeight="600">Service Area</Text>
                <Text color="gray.400" fontSize="sm">
                  Johannesburg & Pretoria, Gauteng
                </Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact