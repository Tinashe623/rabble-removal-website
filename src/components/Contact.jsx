import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaHeadset } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const phoneNumbers = [
  { label: 'Main Office', number: '+27 12 345 6789', icon: FaHeadset, available: 'Mon-Sat 7AM-6PM' },
  { label: 'Mobile', number: '+27 82 345 6789', icon: FaMobileAlt, available: 'Available for urgent calls' },
  { label: 'WhatsApp', number: '+27 72 345 6789', icon: FaWhatsapp, available: 'Text us anytime' },
]

function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCall = (number) => {
    window.location.href = number.replace(/\s/g, '')
  }

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
              onClick={onOpen}
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

      {/* Call Now Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />
        <ModalContent bg="brand.dark" border="1px" borderColor="gray.700" borderRadius="xl" mx={4}>
          <ModalHeader color="white" textAlign="center" pt={8}>
            <Icon as={FaPhone} color="brand.accent" fontSize="2xl" mb={2} />
            <Text fontSize="xl" fontWeight="600">Call Us</Text>
            <Text fontSize="sm" color="gray.400" fontWeight="400" mt={1}>
              Choose a number to call
            </Text>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={8}>
            <VStack spacing={4}>
              {phoneNumbers.map((item, idx) => (
                <Button
                  key={idx}
                  w="100%"
                  h="auto"
                  py={4}
                  px={6}
                  bg="brand.primary"
                  color="white"
                  borderRadius="lg"
                  onClick={() => handleCall(item.number)}
                  _hover={{ bg: 'brand.accent', transform: 'translateY(-2px)' }}
                  transition="all 0.3s ease"
                  leftIcon={<Icon as={item.icon} color="brand.accent" />}
                >
                  <VStack align="flex-start" spacing={0}>
                    <Text fontWeight="600">{item.label}</Text>
                    <Text fontSize="lg" fontWeight="700" color="brand.accent">
                      {item.number}
                    </Text>
                    <Text fontSize="xs" color="gray.400" fontWeight="400">
                      {item.available}
                    </Text>
                  </VStack>
                </Button>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Contact