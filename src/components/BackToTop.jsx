import React, { useState, useEffect } from 'react'
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          bottom={{ base: 4, md: 6 }}
          left={{ base: 4, md: 6 }}
          zIndex={1000}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <IconButton
            aria-label="Back to top"
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            size={{ base: "md", md: "lg" }}
            bg={useColorModeValue('brand.accent', 'brand.accent')}
            color="white"
            borderRadius="full"
            boxShadow="lg"
            _hover={{
              bg: useColorModeValue('#d97706', '#f59e0b'),
              transform: 'translateY(-2px)',
              boxShadow: 'xl'
            }}
            _active={{
              transform: 'translateY(0)',
            }}
            transition="all 0.2s ease"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default BackToTop