import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaTruckLoading, FaLayerGroup, FaTractor, FaRecycle } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const MotionBox = motion(Box)

const services = [
  {
    icon: FaTruckLoading,
    title: 'Rubble Removal',
    description: 'Efficient debris and waste removal for construction sites, renovations, and clearances. We handle all types of rubble with proper disposal.',
    features: ['Construction debris', 'Garden waste', 'Old concrete', 'Soil removal'],
  },
  {
    icon: FaLayerGroup,
    title: 'Site Clearing',
    description: 'Complete site preparation services for construction projects. From rough clearing to final grading, we prepare your site for building.',
    features: ['Land clearing', 'Grading', 'Leveling', 'Vegetation removal'],
  },
  {
    icon: FaTractor,
    title: 'TLB Hire',
    description: 'Tractor-Loader-Backhoe machine rental with experienced operators. Perfect for excavation, trenching, and loading tasks.',
    features: ['Experienced operators', 'Flexible hiring', 'All-terrain', 'Multiple sizes'],
  },
  {
    icon: FaRecycle,
    title: 'Waste Disposal',
    description: 'Eco-friendly waste disposal solutions. We ensure proper sorting and recycling of materials where possible.',
    features: [' Licensed disposal', 'Recycling', 'Environmentally safe', 'Proper documentation'],
  },
]

function Services() {
  return (
    <Box id="services" py={{ base: '60px', md: '100px' }} bg="brand.offWhite">
      <Container maxW="1200px">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive rubble removal and site preparation solutions"
          alignment="center"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={12}>
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
                    <Box
                      bg="brand.accent"
                      p={4}
                      borderRadius="8px"
                    >
                      <Icon as={service.icon} color="white" fontSize="2xl" />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="600"
                      color="brand.dark"
                    >
                      {service.title}
                    </Heading>
                  </HStack>

                  <Text color="gray.600" lineHeight="1.7">
                    {service.description}
                  </Text>

                  <Box pt={2}>
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
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Services