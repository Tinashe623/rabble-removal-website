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
          subtitle="What sets Exquisite Energies apart from the rest"
          alignment="center"
          highlightWord="Choose Us"
          highlightSubtitle="Exquisite Energies"
        />

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mt={12}>
          {features.map((feature, idx) => (
            <MotionBox
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <VStack
                bg="rgba(255, 255, 255, 0.65)"
                backdropFilter="blur(20px)"
                p={8}
                borderRadius="24px"
                boxShadow="0 8px 32px rgba(0,0,0,0.08)"
                spacing={5}
                textAlign="center"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.8)"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: 'translateY(-12px)',
                  boxShadow: '0 24px 48px rgba(245, 158, 11, 0.18)',
                  borderColor: 'brand.accent',
                }}
                h="100%"
              >
                <Box
                  position="relative"
                  bg="brand.dark"
                  p={6}
                  borderRadius="full"
                  transition="all 0.4s ease"
                  _hover={{
                    transform: 'scale(1.15)',
                  }}
                >
                  <Icon 
                    as={feature.icon} 
                    color="brand.accent" 
                    fontSize="2xl"
                  />
                </Box>
                <Text
                  fontWeight="700"
                  fontSize="lg"
                  color="brand.dark"
                  letterSpacing="-0.3px"
                >
                  {feature.title}
                </Text>
                <Text
                  color="gray.500"
                  fontSize="sm"
                  lineHeight="1.7"
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