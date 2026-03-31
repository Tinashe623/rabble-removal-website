import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaTruck, FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function Hero() {
  const scrollToQuote = () => {
    const element = document.querySelector('#quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg="brand.dark"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, rgba(26,26,26,0.95), rgba(45,45,45,0.85))"
        zIndex={1}
      />
      
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')"
        bgSize="cover"
        bgPosition="center"
        opacity={0.3}
        zIndex={0}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-t, brand.dark, transparent)"
        zIndex={1}
      />

      <Container maxW="1200px" position="relative" zIndex={2} pt={{ base: '80px', md: 0 }}>
        <MotionFlex
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          direction="column"
          align={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <MotionBox variants={itemVariants}>
            <HStack spacing={2} mb={4}>
              <Icon as={FaTruck} color="brand.accent" fontSize="xl" />
              <Text color="brand.accent" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="2px">
                Professional Rubble Removal
              </Text>
            </HStack>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading
              as="h1"
              fontSize={{ base: '36px', sm: '44px', md: '56px', lg: '64px' }}
              color="white"
              fontWeight="400"
              lineHeight="1.1"
              mb={6}
              maxW={{ base: '100%', md: '700px' }}
            >
              Reliable Rubble{' '}
              <Text as="span" color="brand.accent">
                Removal
              </Text>{' '}
              & TLB Hire
            </Heading>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.300"
              maxW="550px"
              mb={8}
              lineHeight="1.7"
            >
              Fast, Affordable & Professional Site Clearing Services Across South Africa. 
              Equipped with heavy-duty trucks and TLB machines for any job size.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <HStack
              spacing={4}
              flexWrap="wrap"
              justify={{ base: 'center', md: 'flex-start' }}
              mb={10}
            >
              <Button
                variant="primary"
                size="lg"
                px={8}
                onClick={scrollToQuote}
                _hover={{ transform: 'translateY(-3px)', boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)' }}
              >
                Request Quote
              </Button>
              <Button
                variant="secondary"
                size="lg"
                px={6}
                leftIcon={<FaPhone size={14} />}
                as="a"
                href="tel:+27123456789"
              >
                Call Now
              </Button>
              <Button
                bg="#25D366"
                color="white"
                size="lg"
                px={6}
                leftIcon={<FaWhatsapp size={18} />}
                as="a"
                href="https://wa.me/27123456789?text=Hi, I need rubble removal services"
                _hover={{ bg: '#128C7E', transform: 'translateY(-3px)' }}
              >
                WhatsApp
              </Button>
            </HStack>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Flex
              gap={{ base: 4, md: 8 }}
              flexWrap="wrap"
              justify={{ base: 'center', md: 'flex-start' }}
            >
              {[
                { icon: FaCheckCircle, text: 'Same-Day Service' },
                { icon: FaCheckCircle, text: 'Affordable Rates' },
                { icon: FaCheckCircle, text: 'Professional Team' },
              ].map((item, idx) => (
                <HStack key={idx} spacing={2} color="gray.400">
                  <Icon as={item.icon} color="brand.accent" />
                  <Text fontSize="sm" fontWeight="500">{item.text}</Text>
                </HStack>
              ))}
            </Flex>
          </MotionBox>
        </MotionFlex>
      </Container>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="100px"
        bgGradient="linear(to-t, brand.dark, transparent)"
        zIndex={2}
      />
    </Box>
  )
}

export default Hero