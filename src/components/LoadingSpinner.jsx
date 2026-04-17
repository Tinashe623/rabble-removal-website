import React, { useState, useEffect } from 'react'
import { Box, VStack, Text, Spinner, Image } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Show for 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionBox
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="brand.dark"
          zIndex={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <VStack spacing={8} textAlign="center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt="Exquisite Energies Logo"
                h="120px"
                w="120px"
                objectFit="contain"
              />
            </motion.div>

            <VStack spacing={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="white"
                  fontFamily="heading"
                >
                  Welcome to Exquisite Energies
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Text color="gray.300" fontSize="lg">
                  Professional Energy Solutions for South Africa
                </Text>
              </motion.div>
            </VStack>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Spinner
                size="xl"
                color="brand.accent"
                thickness="4px"
                speed="0.8s"
              />
            </motion.div>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default LoadingSpinner