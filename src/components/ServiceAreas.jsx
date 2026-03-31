import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const MotionBox = motion(Box)

const areas = [
  'Johannesburg',
  'Pretoria',
  'East Rand',
  'West Rand',
  'Midrand',
  'Centurion',
  'Sandton',
  'Soweto',
  'Roodepoort',
  'Randburg',
  'Alberton',
  'Germiston',
  'Kempton Park',
  'Boksburg',
  'Benoni',
]

function ServiceAreas() {
  return (
    <Box id="areas" py={{ base: '60px', md: '100px' }} bg="brand.dark" position="relative" overflow="hidden">
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        backgroundImage="radial-gradient(circle at 25% 25%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 75% 75%, #f59e0b 1px, transparent 1px)"
        backgroundSize="60px 60px"
      />
      
      <Container maxW="1200px" position="relative">
        <SectionHeading
          title="Service Areas"
          subtitle="We provide rubble removal and TLB hire services across Greater Johannesburg and Pretoria regions"
          alignment="center"
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mt={12}
        >
          <VStack spacing={8}>
            <Box
              bg="rgba(35, 35, 35, 0.8)"
              backdropFilter="blur(20px)"
              p={10}
              borderRadius="24px"
              w="100%"
              maxW="900px"
              mx="auto"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.08)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
            >
              <Wrap spacing={4} justify="center">
                {areas.map((area, idx) => (
                  <WrapItem key={area}>
                    <Box
                      bgGradient="linear(135deg, rgba(50, 50, 50, 0.9), rgba(30, 30, 30, 0.9))"
                      color="gray.300"
                      px={6}
                      py={3}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="600"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      cursor="pointer"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.08)"
                      _hover={{
                        bgGradient: 'linear(135deg, brand.accent, #ff8c00)',
                        color: 'white',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 28px rgba(245, 158, 11, 0.35)',
                        borderColor: 'brand.accent',
                      }}
                    >
                      {area}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            <HStack 
              spacing={3} 
              color="gray.400" 
              fontSize="sm" 
              textAlign="center"
              p={5}
              bg="rgba(255, 255, 255, 0.03)"
              borderRadius="full"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.05)"
            >
              <Text>Don't see your area?</Text>
              <Text color="brand.accent" fontWeight="700">Contact us</Text>
              <Text>- we may still be able to help!</Text>
            </HStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default ServiceAreas