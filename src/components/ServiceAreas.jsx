import {
  Box,
  Container,
  Heading,
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
    <Box id="areas" py={{ base: '60px', md: '100px' }} bg="brand.dark">
      <Container maxW="1200px">
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
          <VStack spacing={6}>
            <Box
              bg="brand.primary"
              p={8}
              borderRadius="8px"
              w="100%"
              maxW="800px"
              mx="auto"
            >
              <Wrap spacing={4} justify="center">
                {areas.map((area, idx) => (
                  <WrapItem key={idx}>
                    <Box
                      bg="brand.accent"
                      color="white"
                      px={5}
                      py={2}
                      borderRadius="4px"
                      fontSize="sm"
                      fontWeight="600"
                      transition="all 0.3s ease"
                      cursor="default"
                      _hover={{
                        bg: 'brand.accentHover',
                        transform: 'translateY(-2px)',
                      }}
                    >
                      {area}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            <Text color="gray.400" fontSize="sm" textAlign="center">
              Don't see your area? Contact us - we may still be able to help!
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default ServiceAreas