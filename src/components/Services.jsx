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
import { FaTruckLoading, FaLayerGroup, FaTractor, FaRecycle, FaArrowRight } from 'react-icons/fa'
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
    features: ['Licensed disposal', 'Recycling', 'Environmentally safe', 'Proper documentation'],
  },
]

function Services() {
  return (
    <Box id="services" py={{ base: '60px', md: '100px' }} bg="brand.offWhite">
      <Container maxW="1200px">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive rubble removal and site preparation solutions across South Africa"
          alignment="center"
          highlightWord="Services"
          highlightSubtitle="South Africa"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={12}>
          {services.map((service, idx) => (
            <MotionBox
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
            >
              <Box
                bg="rgba(255, 255, 255, 0.65)"
                backdropFilter="blur(20px)"
                p={8}
                borderRadius="24px"
                boxShadow="0 8px 32px rgba(0,0,0,0.08)"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                cursor="pointer"
                position="relative"
                overflow="hidden"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.8)"
                _hover={{
                  transform: 'translateY(-12px) scale(1.02)',
                  boxShadow: '0 24px 48px rgba(245, 158, 11, 0.2)',
                  borderColor: 'brand.accent',
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  h: '4px',
                  bgGradient: 'linear(to-r, brand.accent, #ff8c00)',
                }}
                h="100%"
              >
                <VStack align="flex-start" spacing={5}>
                  <HStack spacing={5} w="100%">
                    <Box
                      position="relative"
                      bgGradient="linear(to-br, brand.accent, #ff8c00)"
                      p={5}
                      borderRadius="16px"
                      boxShadow="0 8px 24px rgba(245, 158, 11, 0.35)"
                    >
                      <Icon 
                        as={service.icon} 
                        color="white" 
                        fontSize="2xl"
                      />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="700"
                      color="brand.dark"
                      flex={1}
                      letterSpacing="-0.5px"
                    >
                      {service.title}
                    </Heading>
                  </HStack>

                  <Text color="gray.600" lineHeight="1.8" fontSize="md">
                    {service.description}
                  </Text>

                  <Box pt={3} w="100%">
                    <Text fontSize="sm" fontWeight="600" color="brand.primary" mb={3}>
                      What's Included:
                    </Text>
                    <SimpleGrid columns={2} spacing={3}>
                      {service.features.map((feature, fIdx) => (
                        <HStack key={fIdx} spacing={3}>
                          <Box 
                            w="8px" 
                            h="8px" 
                            bgGradient="linear(to-r, brand.accent, #ff8c00)" 
                            borderRadius="full"
                            flexShrink={0}
                          />
                          <Text fontSize="sm" color="gray.600" fontWeight="500">{feature}</Text>
                        </HStack>
                      ))}
                    </SimpleGrid>
                  </Box>

                  <HStack 
                    color="brand.accent" 
                    fontSize="sm" 
                    fontWeight="600"
                    spacing={3}
                    pt={2}
                  >
                    <Text>Learn more</Text>
                    <Icon 
                      as={FaArrowRight} 
                    />
                  </HStack>
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