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
import { FaPhone, FaWhatsapp, FaClock, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

function QuotePage() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast({
      title: 'Quote Request Sent!',
      description: "We'll get back to you within 24 hours.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    })
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      serviceType: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <Box pt="70px">
      <Box py={{ base: '60px', md: '100px' }} bg="brand.dark">
        <Container maxW="1200px">
          <VStack spacing={4} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: '36px', md: '56px' }}
              color="white"
              fontWeight="400"
            >
              Get a Free Quote
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="600px">
              Fill out the form below and we'll get back to you within 24 hours
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: '60px', md: '100px' }} bg="brand.offWhite">
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
              <Box
                bg="white"
                p={{ base: 6, md: 10 }}
                borderRadius="8px"
                boxShadow="0 4px 20px rgba(0,0,0,0.06)"
              >
                <Heading as="h2" fontSize="2xl" color="brand.dark" mb={6}>
                  Request a Quote
                </Heading>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isInvalid={!!errors.name}>
                      <FormLabel color="brand.dark" fontWeight="500">Full Name</FormLabel>
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

                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                      <FormControl isInvalid={!!errors.phone}>
                        <FormLabel color="brand.dark" fontWeight="500">Phone Number</FormLabel>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone"
                          bg="brand.offWhite"
                          border="1px"
                          borderColor="gray.200"
                          _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                        />
                        <FormErrorMessage>{errors.phone}</FormErrorMessage>
                      </FormControl>

                      <FormControl>
                        <FormLabel color="brand.dark" fontWeight="500">Email (Optional)</FormLabel>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          bg="brand.offWhite"
                          border="1px"
                          borderColor="gray.200"
                          _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                        />
                      </FormControl>
                    </SimpleGrid>

                    <FormControl isInvalid={!!errors.location}>
                      <FormLabel color="brand.dark" fontWeight="500">Location / Suburb</FormLabel>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Your area"
                        bg="brand.offWhite"
                        border="1px"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 1px #f59e0b' }}
                      />
                      <FormErrorMessage>{errors.location}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.serviceType}>
                      <FormLabel color="brand.dark" fontWeight="500">Service Required</FormLabel>
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
                      <FormLabel color="brand.dark" fontWeight="500">Project Details (Optional)</FormLabel>
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
                      leftIcon={<FaPaperPlane />}
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                    >
                      Request Free Quote
                    </Button>
                  </VStack>
                </form>
              </Box>

              <VStack spacing={6} align="stretch">
                <Box
                  bg="white"
                  p={8}
                  borderRadius="8px"
                  boxShadow="0 4px 20px rgba(0,0,0,0.06)"
                >
                  <VStack spacing={6} align="flex-start">
                    <Heading as="h3" fontSize="xl" color="brand.dark">
                      Contact Information
                    </Heading>

                    <HStack spacing={4}>
                      <Box bg="brand.accent" p={3} borderRadius="full">
                        <Icon as={FaPhone} color="white" />
                      </Box>
                      <VStack align="flex-start" spacing={0}>
                        <Text fontWeight="600" color="brand.dark">Phone</Text>
                        <Text color="gray.500" as="a" href="tel:+27123456789">+27 12 345 6789</Text>
                      </VStack>
                    </HStack>

                    <HStack spacing={4}>
                      <Box bg="#25D366" p={3} borderRadius="full">
                        <Icon as={FaWhatsapp} color="white" />
                      </Box>
                      <VStack align="flex-start" spacing={0}>
                        <Text fontWeight="600" color="brand.dark">WhatsApp</Text>
                        <Text color="gray.500" as="a" href="https://wa.me/27123456789">Chat on WhatsApp</Text>
                      </VStack>
                    </HStack>

                    <HStack spacing={4}>
                      <Box bg="brand.dark" p={3} borderRadius="full">
                        <Icon as={FaClock} color="white" />
                      </Box>
                      <VStack align="flex-start" spacing={0}>
                        <Text fontWeight="600" color="brand.dark">Business Hours</Text>
                        <Text color="gray.500">Mon - Sat: 7:00 AM - 6:00 PM</Text>
                        <Text color="gray.500">Sun: By appointment</Text>
                      </VStack>
                    </HStack>

                    <HStack spacing={4}>
                      <Box bg="brand.accent" p={3} borderRadius="full">
                        <Icon as={FaMapMarkerAlt} color="white" />
                      </Box>
                      <VStack align="flex-start" spacing={0}>
                        <Text fontWeight="600" color="brand.dark">Service Area</Text>
                        <Text color="gray.500">Johannesburg & Pretoria, Gauteng</Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>

                <Box
                  bg="brand.accent"
                  p={6}
                  borderRadius="8px"
                >
                  <Text color="white" fontWeight="600" mb={2}>
                    Quick Response Guaranteed
                  </Text>
                  <Text color="whiteAlpha.900" fontSize="sm">
                    We aim to respond to all quote requests within 24 hours. 
                    For urgent jobs, call us directly!
                  </Text>
                </Box>

                <HStack spacing={4}>
                  <Button
                    leftIcon={<FaPhone size={16} />}
                    bg="white"
                    color="brand.dark"
                    size="lg"
                    flex={1}
                    as="a"
                    href="tel:+27123456789"
                    _hover={{ bg: 'brand.accent', color: 'white' }}
                  >
                    Call Now
                  </Button>
                  <Button
                    leftIcon={<FaWhatsapp size={18} />}
                    bg="#25D366"
                    color="white"
                    size="lg"
                    flex={1}
                    as="a"
                    href="https://wa.me/27123456789?text=Hi, I need rubble removal services"
                    _hover={{ bg: '#128C7E' }}
                  >
                    WhatsApp
                  </Button>
                </HStack>
              </VStack>
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default QuotePage