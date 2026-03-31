import { Box, IconButton, Tooltip } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

function FloatingWhatsApp() {
  return (
    <Tooltip label="Chat on WhatsApp" placement="left" hasArrow>
      <MotionBox
        position="fixed"
        bottom="30px"
        right="30px"
        zIndex={999}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <IconButton
          as="a"
          href="https://wa.me/27123456789?text=Hi, I need rubble removal services"
          aria-label="Chat on WhatsApp"
          icon={<FaWhatsapp size={24} />}
          bg="#25D366"
          color="white"
          size="lg"
          borderRadius="full"
          boxShadow="0 4px 20px rgba(37, 211, 102, 0.4)"
          _hover={{
            bg: '#128C7E',
            transform: 'scale(1.1)',
          }}
          transition="all 0.3s ease"
          w="60px"
          h="60px"
        />
      </MotionBox>
    </Tooltip>
  )
}

export default FloatingWhatsApp