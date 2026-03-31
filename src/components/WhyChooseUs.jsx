import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Icon,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaClock, FaMoneyBillWave, FaUsers, FaCheckCircle } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const MotionBox = motion(Box)

const features = [
  {
    icon: FaClock,
    title: 'Fast Response',
    description: 'Same-day service available. We respond quickly to all inquiries and get the job done efficiently.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden costs. Get a fair, transparent quote for your project.',
  },
  {
    icon: FaUsers,
    title: 'Professional Team',
    description: 'Experienced operators with years of industry knowledge. Trained and equipped for any job.',
  },
  {
    icon: FaCheckCircle,
    title: 'Reliable Service',
    description: 'On-time, every time. We show up when promised and complete the job to your satisfaction.',
  },
]

function WhyChooseUs() {
  return (
    <Box id="why-us" py={{ base: '60px', md: '100px' }} bg="brand.offWhite">
      <Container maxW="1200px">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What sets Tich Rubble Removal apart from the rest"
          alignment="center"
        />

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mt={12}>
          {features.map((feature, idx) => (
            <MotionBox
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <VStack
                bg="white"
                p={8}
                borderRadius="8px"
                boxShadow="0 4px 20px rgba(0,0,0,0.06)"
                spacing={4}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                }}
                h="100%"
              >
                <Box
                  bg="brand.dark"
                  p={4}
                  borderRadius="full"
                >
                  <Icon as={feature.icon} color="brand.accent" fontSize="2xl" />
                </Box>
                <Text
                  fontWeight="600"
                  fontSize="lg"
                  color="brand.dark"
                >
                  {feature.title}
                </Text>
                <Text
                  color="gray.500"
                  fontSize="sm"
                  lineHeight="1.6"
                >
                  {feature.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default WhyChooseUs