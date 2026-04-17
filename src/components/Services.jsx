import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'
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
    details: 'Our rubble removal service covers everything from small renovation projects to large-scale construction site clearances. We use specialized trucks and equipment to safely transport and dispose of all types of construction waste, including concrete, bricks, soil, and general debris. All waste is disposed of at licensed facilities in compliance with environmental regulations.',
  },
  {
    icon: FaLayerGroup,
    title: 'Site Clearing',
    description: 'Complete site preparation services for construction projects. From rough clearing to final grading, we prepare your site for building.',
    features: ['Land clearing', 'Grading', 'Leveling', 'Vegetation removal'],
    details: 'Site clearing is essential for any construction project. Our team handles the removal of trees, shrubs, rocks, and other obstacles to prepare your land for building. We also provide grading and leveling services to ensure your site meets the required specifications. All work is done with minimal environmental impact.',
  },
  {
    icon: FaTractor,
    title: 'TLB Hire',
    description: 'Tractor-Loader-Backhoe machine rental with experienced operators. Perfect for excavation, trenching, and loading tasks.',
    features: ['Experienced operators', 'Flexible hiring', 'All-terrain', 'Multiple sizes'],
    details: 'Our TLB hire service provides you with access to high-quality tractor-loader-backhoe machines operated by certified professionals. Whether you need excavation, trenching, loading, or general earthmoving, our fleet is equipped to handle the job. Daily, weekly, or monthly rentals available with competitive rates.',
  },
  {
    icon: FaRecycle,
    title: 'Waste Disposal',
    description: 'Eco-friendly waste disposal solutions. We ensure proper sorting and recycling of materials where possible.',
    features: ['Licensed disposal', 'Recycling', 'Environmentally safe', 'Proper documentation'],
    details: 'We prioritize environmental responsibility in all our waste disposal operations. Materials are sorted for recycling where possible, and all disposal is carried out at licensed facilities. We provide full documentation for compliance purposes and ensure that hazardous materials are handled safely and legally.',
  },
]

function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedService, setSelectedService] = React.useState(null)

  const handleLearnMore = (service) => {
    setSelectedService(service)
    onOpen()
  }

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
                    cursor="pointer"
                    onClick={() => handleLearnMore(service)}
                    _hover={{ color: 'brand.dark' }}
                    transition="color 0.2s ease"
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />
        <ModalContent bg="brand.dark" border="1px" borderColor="gray.700" borderRadius="xl" mx={4}>
          <ModalHeader color="white" textAlign="center" pt={8}>
            <HStack spacing={4} justify="center" mb={4}>
              <Box
                bgGradient="linear(to-br, brand.accent, #ff8c00)"
                p={3}
                borderRadius="12px"
              >
                <Icon as={selectedService?.icon} color="white" fontSize="xl" />
              </Box>
              <Text fontSize="2xl" fontWeight="700" color="white">
                {selectedService?.title}
              </Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={8} px={8}>
            <VStack spacing={6} align="stretch">
              <Text color="gray.300" fontSize="md" lineHeight="1.7">
                {selectedService?.description}
              </Text>

              <Box>
                <Text fontSize="lg" fontWeight="600" color="brand.accent" mb={4}>
                  What's Included:
                </Text>
                <SimpleGrid columns={2} spacing={3}>
                  {selectedService?.features.map((feature, fIdx) => (
                    <HStack key={fIdx} spacing={3}>
                      <Box
                        w="8px"
                        h="8px"
                        bgGradient="linear(to-r, brand.accent, #ff8c00)"
                        borderRadius="full"
                        flexShrink={0}
                      />
                      <Text fontSize="sm" color="gray.300" fontWeight="500">{feature}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>

              <Box>
                <Text fontSize="lg" fontWeight="600" color="brand.accent" mb={4}>
                  Detailed Information:
                </Text>
                <Text color="gray.300" fontSize="sm" lineHeight="1.7">
                  {selectedService?.details}
                </Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Services