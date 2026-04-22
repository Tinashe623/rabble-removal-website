import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Image,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import image5 from '../assets/images/image5.jpg'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image4 from '../assets/images/image4.jpg'
import heroImage from '../assets/images/hero-image.jpg'

const MotionBox = motion(Box)

const equipment = [
  {
    name: '8-Ton Tipper Truck',
    capacity: '8 m³',
    description: 'Heavy-duty tipper truck ideal for large rubble removal jobs. High sides and powerful hydraulic system for efficient loading and unloading.',
    image: heroImage,
    useCases: ['Large construction sites', 'Bulk rubble removal', 'Heavy loads'],
  },
  {
    name: '6-Ton Tipper Truck',
    capacity: '6 m³',
    description: 'Versatile tipper truck perfect for medium-sized projects. Manoeuvrable yet powerful for most residential and commercial jobs.',
    image: image1,
    useCases: ['Residential projects', 'Garden clearance', 'Medium loads'],
  },
  {
    name: 'TLB 4x4 Machine',
    capacity: '1.2 m³ Bucket',
    description: 'All-terrain Tractor-Loader-Backhoe with 4x4 drive. Excellent for excavation, trenching, and loading in challenging conditions.',
    image: image2,
    useCases: ['Excavation work', 'Trenching', 'Rough terrain'],
  },
  {
    name: 'TLB 4x2 Machine',
    capacity: '1.0 m³ Bucket',
    description: 'Cost-effective TLB option for standard site work. Reliable performance for digging, loading, and backhoe operations.',
    image: image4,
    useCases: ['Standard excavation', 'Site prep', 'Budget projects'],
  },
]

function Equipment() {
  return (
    <Box id="equipment" py={{ base: '60px', md: '100px' }} bg="white">
      <Container maxW="1200px">
        <SectionHeading
          title="Our Fleet"
          subtitle="Professional heavy machinery for any job size"
          alignment="center"
          highlightWord="Fleet"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={12}>
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
                <Box position="relative" h="220px" overflow="hidden">
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
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="600"
                    color="brand.dark"
                  >
                    {item.name}
                  </Heading>

                  <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                    {item.description}
                  </Text>

                   <Box pt={2}>
                    <Text fontSize="xs" fontWeight="600" color="brand.primary" mb={2} textTransform="uppercase" letterSpacing="0.5px">
                      Best For:
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {item.useCases.map((useCase, uIdx) => (
                        <Badge
                          key={uIdx}
                          bgGradient="linear(to-r, brand.dark, brand.primary)"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="500"
                          transition="all 0.3s ease"
                          _hover={{
                            bgGradient: 'linear(to-r, brand.accent, #ff8c00)',
                            transform: 'translateY(-2px)',
                          }}
                          cursor="pointer"
                        >
                          {useCase}
                        </Badge>
                      ))}
                    </HStack>
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

export default Equipment