import { Box, Heading, Text, VStack } from '@chakra-ui/react'

function SectionHeading({ title, subtitle, alignment = 'left' }) {
  const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  return (
    <VStack align={alignMap[alignment]} spacing={2}>
      <Heading
        as="h2"
        fontSize={{ base: '28px', md: '42px' }}
        color="brand.dark"
        fontWeight="400"
        textAlign={alignment}
      >
        {title}
      </Heading>
      <Box
        w="80px"
        h="4px"
        bg="brand.accent"
        borderRadius="2px"
        mx={alignment === 'center' ? 'auto' : 0}
      />
      {subtitle && (
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.500"
          maxW="600px"
          textAlign={alignment}
          mt={2}
        >
          {subtitle}
        </Text>
      )}
    </VStack>
  )
}

export default SectionHeading