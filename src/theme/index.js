import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      dark: '#1a1a1a',
      primary: '#2d2d2d',
      secondary: '#404040',
      accent: '#f59e0b',
      accentHover: '#d97706',
      offWhite: '#f9fafb',
      lightGray: '#e5e7eb',
    },
  },
  fonts: {
    heading: '"Russo One", sans-serif',
    body: '"Plus Jakarta Sans", sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
      },
      '*::selection': {
        background: 'brand.accent',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
      },
      variants: {
        primary: {
          bg: 'brand.accent',
          color: 'white',
          _hover: {
            bg: 'brand.accentHover',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.accentHover',
            transform: 'translateY(0)',
          },
        },
        secondary: {
          bg: 'transparent',
          color: 'white',
          border: '2px solid white',
          _hover: {
            bg: 'white',
            color: 'brand.dark',
            transform: 'translateY(-2px)',
          },
        },
        dark: {
          bg: 'brand.dark',
          color: 'white',
          _hover: {
            bg: 'brand.primary',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: '8px',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
})

export default theme