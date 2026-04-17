import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'Quote', path: '/quote' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getNavBackground = () => {
    return 'rgba(26, 26, 26, 0.95)'
  }

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg={getNavBackground()}
        backdropFilter="blur(10px)"
        transition="all 0.3s ease"
        boxShadow={scrolled ? 'lg' : 'none'}
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          py={3}
          align="center"
          justify="space-between"
           h={{ base: '70px', md: '70px' }}
        >
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
            <HStack spacing={3} align="center">
              <Image
                src="/logo.png"
                alt="Exquisite Energies Logo"
                h={{ base: '50px', md: '60px' }}
                w={{ base: '50px', md: '60px' }}
                objectFit="contain"
                _hover={{ opacity: 0.8 }}
                transition="opacity 0.3s ease"
              />
              <Box
                fontFamily="heading"
                fontSize={{ base: 'lg', md: 'xl' }}
                color="white"
                fontWeight="bold"
                _hover={{ color: 'brand.accent', textShadow: '0 0 10px rgba(245, 158, 11, 0.6)' }}
                transition="all 0.3s ease"
              >
                EXQUISITE <span style={{ color: '#f59e0b' }}>ENERGIES</span>
              </Box>
            </HStack>
          </Link>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                style={{ textDecoration: 'none' }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Box
                  color={location.pathname === link.path ? 'brand.accent' : 'white'}
                  fontWeight="500"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="0.5px"
                  _hover={{ color: 'brand.accent' }}
                  transition="color 0.3s ease"
                  position="relative"
                  _after={
                    location.pathname === link.path
                      ? {
                          content: '""',
                          position: 'absolute',
                          bottom: '-4px',
                          left: 0,
                          right: 0,
                          h: '2px',
                          bg: 'brand.accent',
                        }
                      : {}
                  }
                >
                  {link.label}
                </Box>
              </Link>
            ))}
          </HStack>

          <HStack spacing={3}>
            <Button
              display={{ base: 'none', md: 'flex' }}
              variant="primary"
              size="sm"
              as={Link}
              to="/quote"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get Quote
            </Button>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<HamburgerIcon />}
              variant="ghost"
              color="white"
              onClick={onOpen}
              aria-label="Open menu"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </HStack>
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.dark">
          <DrawerCloseButton color="white" />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="stretch">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{ textDecoration: 'none' }}
                  onClick={() => { window.scrollTo(0, 0); onClose(); }}
                >
                  <Box
                    color="white"
                    fontSize="lg"
                    fontWeight="500"
              _hover={{ color: 'brand.dark' }}
                    transition="color 0.3s ease"
                  >
                    {link.label}
                  </Box>
                </Link>
              ))}
              <Button
                variant="primary"
                size="lg"
                mt={4}
                as={Link}
                to="/quote"
                onClick={() => { window.scrollTo(0, 0); onClose(); }}
              >
                Get Quote
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  )
}

export default Navbar