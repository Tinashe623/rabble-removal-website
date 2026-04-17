import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, Image, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'
import image5 from '../assets/images/image5.jpg'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image4 from '../assets/images/image4.jpg'
import image3 from '../assets/images/image3.jpg'
import image6 from '../assets/images/image6.jpg'

const MotionBox = motion(Box)

const equipment = [
  {
    name: '8-Ton Tipper Truck',
    capacity: '8 m³',
    description: 'Heavy-duty tipper truck ideal for large rubble removal jobs. High sides and powerful hydraulic system for efficient loading and unloading.',
    image: image5,
    useCases: ['Large construction sites', 'Bulk rubble removal', 'Heavy loads'],
    specs: ['8 Ton Capacity', '8 m³ Volume', 'Hydraulic Tip'],
  },
  {
    name: '6-Ton Tipper Truck',
    capacity: '6 m³',
    description: 'Versatile tipper truck perfect for medium-sized projects. Manoeuvrable yet powerful for most residential and commercial jobs.',
    image: image1,
    useCases: ['Residential projects', 'Garden clearance', 'Medium loads'],
    specs: ['6 Ton Capacity', '6 m³ Volume', 'Manoeuverable'],
  },
  {
    name: 'TLB 4x4 Machine',
    capacity: '1.2 m³ Bucket',
    description: 'All-terrain Tractor-Loader-Backhoe with 4x4 drive. Excellent for excavation, trenching, and loading in challenging conditions.',
    image: image2,
    useCases: ['Excavation work', 'Trenching', 'Rough terrain'],
    specs: ['4x4 Drive', '1.2 m³ Bucket', 'All-terrain'],
  },
  {
    name: 'TLB 4x2 Machine',
    capacity: '1.0 m³ Bucket',
    description: 'Cost-effective TLB option for standard site work. Reliable performance for digging, loading, and backhoe operations.',
    image: image4,
    useCases: ['Standard excavation', 'Site prep', 'Budget projects'],
    specs: ['4x2 Drive', '1.0 m³ Bucket', 'Cost-effective'],
  },
  {
    name: 'Skip Loader',
    capacity: '3 m³',
    description: 'Compact loader perfect for tight spaces and smaller projects. Great for precision work in residential areas.',
    image: image3,
    useCases: ['Residential work', 'Tight spaces', 'Small loads'],
    specs: ['Compact Size', '3 m³ Capacity', 'Precision Work'],
  },
  {
    name: 'Mini TLB',
    capacity: '0.6 m³',
    description: 'Compact TLB for residential projects and confined spaces. Easy to transport and operate in urban areas.',
    image: image6,
    useCases: ['Home projects', 'Urban sites', 'Small excavation'],
    specs: ['Mini Size', '0.6 m³ Bucket', 'Easy Transport'],
  },
]

function EquipmentPage() {
  return (
    <Box pt="70px">
      <SEO 
        title="Our Fleet | TLB & Truck Equipment for Hire"
        description="View our range of tipper trucks and TLB machines for rubble removal and excavation. 8-ton, 6-ton trucks and 4x4 TLB available. Equipment for any job size."
        keywords="TLB for hire, tipper truck, excavator rental, construction equipment, rubble truck, TLB machine"
      />
      <Box py={{ base: '60px', md: '100px' }} bg="brand.dark">
        <Container maxW="1200px">
          <VStack spacing={4} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: '36px', md: '56px' }}
              color="white"
              fontWeight="400"
            >
              Our Fleet
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="600px">
              Professional heavy machinery for any job size
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: '60px', md: '100px' }} bg="white">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {equipment.map((item, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box
                  bg="brand.offWhite"
                  borderRadius="8px"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  }}
                >
                  <Box position="relative" h="200px" overflow="hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.3s ease"
                      _hover={{ transform: 'scale(1.05)' }}
                    />
                    <Badge
                      position="absolute"
                      top={4}
                      right={4}
                      bgGradient="linear(to-r, brand.accent, #ff8c00)"
                      color="white"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="600"
                      boxShadow="0 4px 15px rgba(245, 158, 11, 0.4)"
                    >
                      {item.capacity}
                    </Badge>
                  </Box>

                  <VStack align="stretch" p={6} spacing={3}>
                    <Heading as="h3" fontSize="xl" fontWeight="600" color="brand.dark">
                      {item.name}
                    </Heading>

                    <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                      {item.description}
                    </Text>

                    <Box>
                      <Text fontSize="xs" fontWeight="600" color="brand.primary" mb={2} textTransform="uppercase" letterSpacing="0.5px">
                        Specifications:
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {item.specs.map((spec, sIdx) => (
                          <Badge
                            key={sIdx}
                            bg="brand.dark"
                            color="white"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                            fontWeight="500"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>

                    <Box pt={2}>
                      <Text fontSize="xs" fontWeight="600" color="brand.primary" mb={2} textTransform="uppercase" letterSpacing="0.5px">
                        Best For:
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {item.useCases.map((useCase, uIdx) => (
                          <Badge
                            key={uIdx}
                            bgGradient="linear(to-r, gray.100, gray.200)"
                            color="gray.700"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                            fontWeight="500"
                            transition="all 0.3s ease"
                            _hover={{
                              bgGradient: 'linear(to-r, brand.accent, #ff8c00)',
                              color: 'white',
                              transform: 'translateY(-2px)',
                            }}
                            cursor="pointer"
                          >
                            {useCase}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>

                    <Button
                      as={Link}
                      to="/quote"
                      variant="primary"
                      size="sm"
                      rightIcon={<FaArrowRight />}
                      mt={4}
                    >
                      Hire This Machine
                    </Button>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={{ base: '60px', md: '80px' }} bg="brand.offWhite">
        <Container maxW="1200px">
          <Box
            bg="brand.dark"
            p={{ base: 8, md: 12 }}
            borderRadius="8px"
            textAlign="center"
          >
            <Heading as="h2" fontSize={{ base: '24px', md: '36px' }} color="white" mb={4}>
              Need a Custom Quote?
            </Heading>
            <Text color="gray.400" fontSize="lg" mb={6} maxW="600px" mx="auto">
              Tell us about your project and we'll recommend the best equipment
            </Text>
            <Button
              as={Link}
              to="/quote"
              variant="primary"
              size="lg"
            >
              Get Your Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default EquipmentPage