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
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaHeadset, FaClock, FaArrowRight } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const MotionBox = motion(Box)

const phoneNumbers = [
  { label: 'Main Office', number: '+27 12 345 6789', icon: FaHeadset, available: 'Mon-Sat 7AM-6PM' },
  { label: 'Mobile', number: '+27 82 345 6789', icon: FaMobileAlt, available: 'Available for urgent calls' },
  { label: 'WhatsApp', number: '+27 72 345 6789', icon: FaWhatsapp, available: 'Text us anytime' },
]

const contactMethods = [
  {
    icon: FaPhone,
    label: 'Call Us',
    value: '+27 12 345 6789',
    description: 'Mon-Sat 7AM-6PM',
    action: 'call',
    color: 'brand.accent',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+27 72 345 6789',
    description: 'Text us anytime',
    action: 'whatsapp',
    color: '#25D366',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'info@tichrubble.co.za',
    description: 'We reply within 24hrs',
    action: 'email',
    color: 'brand.accent',
  },
]

function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCall = (number) => {
    window.location.href = number.replace(/\s/g, '')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/27123456789?text=Hi, I need rubble removal services', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:info@tichrubble.co.za'
  }

  const handleAction = (action) => {
    switch (action) {
      case 'call':
        onOpen()
        break
      case 'whatsapp':
        handleWhatsApp()
        break
      case 'email':
        handleEmail()
        break
    }
  }

  return (
    <Box id="contact" py={{ base: '60px', md: '100px' }} bg="brand.dark">
      <Container maxW="1200px">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Ready to get started? Reach out today!" 
          alignment="center" 
          highlightWord="Contact Us" 
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
            {contactMethods.map((method, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box
                  bg="brand.primary"
                  p={8}
                  borderRadius="16px"
                  textAlign="center"
                  cursor="pointer"
                  onClick={() => handleAction(method.action)}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                  position="relative"
                  overflow="hidden"
                  border="1px"
                  borderColor="gray.700"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    h: '3px',
                    bgGradient: 'linear(to-r, brand.accent, #ff8c00)',
                  }}
                >
                  <VStack spacing={4}>
                    <Box
                      w="64px"
                      h="64px"
                      borderRadius="full"
                      bg="brand.dark"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      flexShrink={0}
                    >
                      <Box
                        position="absolute"
                        inset={0}
                        borderRadius="full"
                        bg={method.color}
                        opacity={0.2}
                      />
                      <Icon 
                        as={method.icon} 
                        color={method.color} 
                        fontSize="24px" 
                      />
                    </Box>
                    
                    <VStack spacing={1}>
                      <Text color="white" fontWeight="600" fontSize="lg">
                        {method.label}
                      </Text>
                      <Text 
                        color={method.color} 
                        fontWeight="700" 
                        fontSize="md"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        {method.value}
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        {method.description}
                      </Text>
                    </VStack>

              <HStack
                spacing={3}
                justify="center"
              >
                <Box
                  w="48px"
                  h="48px"
                  borderRadius="full"
                  bg="brand.accent"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                      <Text>Get in touch</Text>
                      <Icon as={FaArrowRight} />
                    </HStack>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Service Area Card */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          mt={10}
        >
          <Box
            bg="brand.primary"
            p={6}
            borderRadius="12px"
            maxW="500px"
            mx="auto"
            border="1px"
            borderColor="gray.700"
          >
            <HStack spacing={4} justify="center">
              <Box
                w="48px"
                h="48px"
                borderRadius="full"
                bg="brand.accent"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaMapMarkerAlt} color="white" fontSize="20px" />
              </Box>
              <VStack align="flex-start" spacing={0}>
                <HStack>
                  <Text color="white" fontWeight="600">Service Area</Text>
                  <Icon as={FaClock} color="brand.accent" fontSize="sm" />
                </HStack>
                <Text color="gray.400" fontSize="sm">
                  Johannesburg & Pretoria, Gauteng
                </Text>
              </VStack>
            </HStack>
          </Box>
        </MotionBox>
      </Container>

      {/* Call Now Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />
        <ModalContent bg="brand.dark" border="1px" borderColor="gray.700" borderRadius="xl" mx={4}>
          <ModalHeader color="white" textAlign="center" pt={8}>
            <Box
              w="64px"
              h="64px"
              borderRadius="full"
              bg="brand.accent"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={3}
            >
              <Icon as={FaPhone} color="white" fontSize="28px" />
            </Box>
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
                  border="1px"
                  borderColor="gray.700"
                  leftIcon={
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="brand.dark"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={item.icon} color="brand.accent" />
                    </Box>
                  }
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