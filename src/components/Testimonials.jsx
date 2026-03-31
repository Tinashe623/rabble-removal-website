import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const MotionBox = motion(Box)

const testimonials = [
  {
    quote: "Tich Rubble Removal cleared our construction site in record time. Professional, reliable, and excellent rates. Highly recommended!",
    author: "Marcus Johnson",
    company: "JHB Construction",
    rating: 5,
    service: "Site Clearing",
  },
  {
    quote: "The TLB machine they provided made excavation work so much easier. Operator was skilled and the equipment was well-maintained.",
    author: "Sarah Mitchell",
    company: "Mitchell Builders",
    rating: 5,
    service: "TLB Hire",
  },
  {
    quote: "Excellent service from start to finish. They removed all the rubble from our home renovation and cleaned up afterwards. Will use again!",
    author: "David Peters",
    company: "Homeowner",
    rating: 5,
    service: "Rubble Removal",
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
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box
                bg="brand.offWhite"
                p={8}
                borderRadius="8px"
                position="relative"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                }}
                h="100%"
              >
                <Box position="absolute" top={4} right={4}>
                  <Icon as={FaQuoteLeft} color="brand.accent" fontSize="3xl" opacity={0.3} />
                </Box>

                <VStack align="flex-start" spacing={4}>
                  <HStack spacing={1}>
                    {[...Array(testimonial.rating)].map((_, starIdx) => (
                      <Icon key={starIdx} as={FaStar} color="brand.accent" fontSize="sm" />
                    ))}
                  </HStack>

                  <Text
                    color="gray.600"
                    fontSize="md"
                    lineHeight="1.7"
                    fontStyle="italic"
                  >
                    "{testimonial.quote}"
                  </Text>

                  <Box pt={4} borderTop="1px" borderColor="gray.200" w="100%">
                    <Text fontWeight="600" color="brand.dark">
                      {testimonial.author}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.company}
                    </Text>
                    <Text fontSize="xs" color="brand.accent" fontWeight="500" mt={1}>
                      {testimonial.service}
                    </Text>
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

export default Testimonials