import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaTruckLoading, FaLayerGroup, FaTractor, FaRecycle, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const MotionBox = motion(Box)

const services = [
  {
    icon: FaTruckLoading,
    title: 'Rubble Removal',
    description: 'Efficient debris and waste removal for construction sites, renovations, and clearances. We handle all types of rubble with proper disposal.',
    features: ['Construction debris', 'Garden waste', 'Old concrete', 'Soil removal'],
    price: 'From R800',
  },
  {
    icon: FaLayerGroup,
    title: 'Site Clearing',
    description: 'Complete site preparation services for construction projects. From rough clearing to final grading, we prepare your site for building.',
    features: ['Land clearing', 'Grading', 'Leveling', 'Vegetation removal'],
    price: 'From R1500',
  },
  {
    icon: FaTractor,
    title: 'TLB Hire',
    description: 'Tractor-Loader-Backhoe machine rental with experienced operators. Perfect for excavation, trenching, and loading tasks.',
    features: ['Experienced operators', 'Flexible hiring', 'All-terrain', 'Multiple sizes'],
    price: 'From R1200/day',
  },
  {
    icon: FaRecycle,
    title: 'Waste Disposal',
    description: 'Eco-friendly waste disposal solutions. We ensure proper sorting and recycling of materials where possible.',
    features: ['Licensed disposal', 'Recycling', 'Environmentally safe', 'Proper documentation'],
    price: 'From R600',
  },
]

function ServicesPage() {
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
              Our Services
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="600px">
              Comprehensive rubble removal and site preparation solutions across South Africa
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: '60px', md: '100px' }} bg="brand.offWhite">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {services.map((service, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box
                  bg="white"
                  p={8}
                  borderRadius="8px"
                  boxShadow="0 4px 20px rgba(0,0,0,0.06)"
                  transition="all 0.3s ease"
                  cursor="pointer"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  }}
                  h="100%"
                >
                  <VStack align="flex-start" spacing={4}>
                    <HStack spacing={4}>
                      <Box bg="brand.accent" p={4} borderRadius="8px">
                        <Icon as={service.icon} color="white" fontSize="2xl" />
                      </Box>
                      <VStack align="flex-start" spacing={0}>
                        <Heading as="h3" fontSize="xl" fontWeight="600" color="brand.dark">
                          {service.title}
                        </Heading>
                        <Text color="brand.accent" fontWeight="600" fontSize="sm">
                          {service.price}
                        </Text>
                      </VStack>
                    </HStack>

                    <Text color="gray.600" lineHeight="1.7">
                      {service.description}
                    </Text>

                    <Box pt={2} w="100%">
                      <Text fontSize="sm" fontWeight="600" color="brand.primary" mb={2}>
                        What's Included:
                      </Text>
                      <SimpleGrid columns={2} spacing={2}>
                        {service.features.map((feature, fIdx) => (
                          <HStack key={fIdx} spacing={2}>
                            <Box w="6px" h="6px" bg="brand.accent" borderRadius="full" />
                            <Text fontSize="sm" color="gray.500">{feature}</Text>
                          </HStack>
                        ))}
                      </SimpleGrid>
                    </Box>

                    <Button
                      as={Link}
                      to="/quote"
                      variant="primary"
                      size="sm"
                      rightIcon={<FaArrowRight />}
                      mt={2}
                    >
                      Get Quote
                    </Button>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={{ base: '60px', md: '80px' }} bg="white">
        <Container maxW="1200px">
          <Box
            bg="brand.accent"
            p={{ base: 8, md: 12 }}
            borderRadius="8px"
            textAlign="center"
          >
            <Heading as="h2" fontSize={{ base: '24px', md: '36px' }} color="white" mb={4}>
              Need a Custom Solution?
            </Heading>
            <Text color="whiteAlpha.900" fontSize="lg" mb={6} maxW="600px" mx="auto">
              Contact us for tailored services to meet your specific project requirements
            </Text>
            <Button
              as={Link}
              to="/quote"
              bg="white"
              color="brand.accent"
              size="lg"
              _hover={{ bg: 'brand.dark', color: 'white' }}
            >
              Request Custom Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ServicesPage