import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  FormErrorMessage,
  useToast,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaClock, FaPaperPlane, FaCheck } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const MotionBox = motion(Box)

function QuoteForm() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    serviceType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.location) {
      newErrors.location = 'Location is required'
    }
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setIsSuccess(false)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    toast({
      title: 'Quote Request Sent!',
      description: "We'll get back to you within 24 hours.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    })
    
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        location: '',
        serviceType: '',
        message: '',
      })
      setIsSuccess(false)
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <Box id="quote" py={{ base: '60px', md: '100px' }} bg="brand.offWhite">
      <Container maxW="1200px">
        <SectionHeading
          title="Request a Quote"
          subtitle="Get a free, no-obligation quote for your project"
          alignment="center"
          highlightWord="Quote"
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mt={12}
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            <Box
              bg="white"
              p={{ base: 6, md: 10 }}
              borderRadius="8px"
              boxShadow="0 4px 20px rgba(0,0,0,0.06)"
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={5}>
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel color="brand.dark" fontWeight="500">Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      bg="brand.offWhite"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.phone}>
                    <FormLabel color="brand.dark" fontWeight="500">Phone Number</FormLabel>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      bg="brand.offWhite"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                    />
                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.location}>
                    <FormLabel color="brand.dark" fontWeight="500">Location</FormLabel>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your area/suburb"
                      bg="brand.offWhite"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                    />
                    <FormErrorMessage>{errors.location}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.serviceType}>
                    <FormLabel color="brand.dark" fontWeight="500">Service Type</FormLabel>
                    <Select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      placeholder="Select a service"
                      bg="brand.offWhite"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                    >
                      <option value="rubble-removal">Rubble Removal</option>
                      <option value="site-clearing">Site Clearing</option>
                      <option value="tlb-hire">TLB Hire</option>
                      <option value="waste-disposal">Waste Disposal</option>
                      <option value="other">Other</option>
                    </Select>
                    <FormErrorMessage>{errors.serviceType}</FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel color="brand.dark" fontWeight="500">Message (Optional)</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      bg="brand.offWhite"
                      border="1px"
                      borderColor="gray.200"
                      rows={4}
                      _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    w="100%"
                    h="56px"
                    fontSize="md"
                    fontWeight="700"
                    borderRadius="16px"
                    leftIcon={isSuccess ? <FaCheck /> : <FaPaperPlane />}
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    bg={isSuccess ? '#10b981' : 'brand.accent'}
                    color="white"
                    position="relative"
                    overflow="hidden"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: isSuccess ? 'none' : 'translateY(-3px)',
                      boxShadow: isSuccess ? 'none' : '0 12px 28px rgba(245, 158, 11, 0.4)',
                    }}
                    _active={{
                      transform: 'scale(0.98)',
                    }}
                    _disabled={{
                      bg: 'brand.accent',
                      opacity: 0.7,
                    }}
                    isDisabled={isSubmitting}
                  >
                    {isSuccess ? 'Request Sent!' : 'Request Free Quote'}
                  </Button>
                </VStack>
              </form>
            </Box>

            <VStack spacing={6} align="flex-start" justify="center">
              <Box
                bg="white"
                p={8}
                borderRadius="8px"
                boxShadow="0 4px 20px rgba(0,0,0,0.06)"
                w="100%"
              >
                <VStack spacing={6} align="flex-start">
                  <Heading as="h3" fontSize="xl" color="brand.dark">
                    Get In Touch
                  </Heading>

                  <HStack spacing={4}>
                    <Box
                      w="56px"
                      h="56px"
                      bg="brand.accent"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Icon as={FaPhone} color="white" fontSize="24px" />
                    </Box>
                    <VStack align="flex-start" spacing={0}>
                      <Text fontWeight="600" color="brand.dark">Phone</Text>
                      <Text color="gray.500" as="a" href="tel:+27846666978">+27 84 666 6978</Text>
                    </VStack>
                  </HStack>

                  <HStack spacing={4}>
                    <Box
                      w="56px"
                      h="56px"
                      bg="#25D366"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Icon as={FaWhatsapp} color="white" fontSize="24px" />
                    </Box>
                    <VStack align="flex-start" spacing={0}>
                      <Text fontWeight="600" color="brand.dark">WhatsApp</Text>
                      <Text color="gray.500" as="a" href="https://wa.me/27846666978">Chat on WhatsApp</Text>
                    </VStack>
                  </HStack>

                  <HStack spacing={4}>
                    <Box
                      w="56px"
                      h="56px"
                      bg="brand.dark"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Icon as={FaClock} color="white" fontSize="24px" />
                    </Box>
                    <VStack align="flex-start" spacing={0}>
                      <Text fontWeight="600" color="brand.dark">Business Hours</Text>
                      <Text color="gray.500">Mon - Sat: 7:00 AM - 6:00 PM</Text>
                      <Text color="gray.500">Sun: By appointment</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>

              <Box
                bg="brand.accent"
                p={6}
                borderRadius="8px"
                w="100%"
              >
                <Text color="white" fontWeight="600" mb={2}>
                  Quick Response Guaranteed
                </Text>
                <Text color="whiteAlpha.900" fontSize="sm">
                  We aim to respond to all quote requests within 24 hours. 
                  For urgent jobs, call us directly!
                </Text>
              </Box>
            </VStack>
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default QuoteForm