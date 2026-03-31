import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Avatar,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const MotionBox = motion(Box)

const testimonials = [
  {
    quote: "Tich Rubble Removal cleared our construction site in record time. Professional, reliable, and excellent rates. Highly recommended!",
    author: "Marcus Johnson",
    company: "JHB Construction",
    rating: 5,
    service: "Site Clearing",
    initials: "MJ",
  },
  {
    quote: "The TLB machine they provided made excavation work so much easier. Operator was skilled and the equipment was well-maintained.",
    author: "Sarah Mitchell",
    company: "Mitchell Builders",
    rating: 5,
    service: "TLB Hire",
    initials: "SM",
  },
  {
    quote: "Excellent service from start to finish. They removed all the rubble from our home renovation and cleaned up afterwards. Will use again!",
    author: "David Peters",
    company: "Homeowner",
    rating: 5,
    service: "Rubble Removal",
    initials: "DP",
  },
]

function Testimonials() {
  return (
    <Box id="testimonials" py={{ base: '60px', md: '100px' }} bg="white">
      <Container maxW="1200px">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by homeowners and businesses across South Africa"
          alignment="center"
          highlightWord="Clients Say"
        />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
          {testimonials.map((testimonial, idx) => (
            <MotionBox
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box
                bg="white"
                p={6}
                borderRadius="16px"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                border="1px solid"
                borderColor="gray.100"
                h="100%"
              >
                <HStack spacing={1} mb={3}>
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <Icon 
                      key={starIdx} 
                      as={FaStar} 
                      color="yellow.400" 
                      fontSize="sm"
                    />
                  ))}
                </HStack>

                <Text color="gray.600" fontSize="md" lineHeight="1.7" mb={4}>
                  {testimonial.quote}
                </Text>

                <HStack spacing={3} pt={3} borderTop="1px solid" borderColor="gray.100">
                      <Avatar 
                        name={testimonial.author} 
                        initials={testimonial.initials}
                        bg="brand.accent"
                        color="white"
                        size="sm"
                      />
                      <VStack align="flex-start" spacing={0}>
                        <Text fontWeight="600" color="brand.dark" fontSize="sm">
                          {testimonial.author}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {testimonial.company}
                        </Text>
                      </VStack>
                </HStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Testimonials
