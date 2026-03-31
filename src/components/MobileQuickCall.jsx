import { HStack, Button, Icon } from '@chakra-ui/react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionHStack = motion(HStack)

function MobileQuickCall() {
  return (
    <MotionHStack
      display={{ base: 'flex', md: 'none' }}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="brand.dark"
      py={3}
      px={4}
      zIndex={998}
      justify="space-between"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      boxShadow="0 -4px 20px rgba(0,0,0,0.2)"
      spacing={3}
    >
      <Button
        flex={1}
        leftIcon={<FaPhone size={16} />}
        bg="white"
        color="brand.dark"
        size="md"
        as="a"
        href="tel:+27123456789"
        fontWeight="600"
        _hover={{ bg: 'brand.accent', color: 'white' }}
      >
        Call
      </Button>
      <Button
        flex={1}
        leftIcon={<FaWhatsapp size={18} />}
        bg="#25D366"
        color="white"
        size="md"
        as="a"
        href="https://wa.me/27123456789?text=Hi, I need rubble removal services"
        fontWeight="600"
        _hover={{ bg: '#128C7E' }}
      >
        WhatsApp
      </Button>
    </MotionHStack>
  )
}

export default MobileQuickCall