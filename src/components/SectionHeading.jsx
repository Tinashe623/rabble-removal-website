import { Box, Heading, Text, VStack } from '@chakra-ui/react'

function SectionHeading({ title, subtitle, alignment = 'left', highlightWord = null, highlightSubtitle = null }) {
  const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  const renderHighlightedTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title
    }

    const parts = title.split(highlightWord)
    return (
      <>
        {parts[0]}
        <Box as="span" bgGradient="linear(to-r, brand.accent, #ff8c00)" bgClip="text" fontWeight="700">
          {highlightWord}
        </Box>
        {parts[1]}
      </>
    )
  }

  const renderHighlightedSubtitle = () => {
    if (!highlightSubtitle || !subtitle.includes(highlightSubtitle)) {
      return subtitle
    }

    const parts = subtitle.split(highlightSubtitle)
    return (
      <>
        {parts[0]}
        <Box as="span" bgGradient="linear(to-r, brand.accent, #ff8c00)" bgClip="text" fontWeight="600">
          {highlightSubtitle}
        </Box>
        {parts[1]}
      </>
    )
  }

  return (
    <VStack align={alignMap[alignment]} spacing={2}>
      <Heading
        as="h2"
        fontSize={{ base: '28px', md: '42px' }}
        color="brand.dark"
        fontWeight="400"
        textAlign={alignment}
        lineHeight="1.2"
      >
        {highlightWord ? renderHighlightedTitle() : title}
      </Heading>
      
      {/* Modern Arrow Divider */}
      <Box position="relative" h="20px" w="80px" mx={alignment === 'center' ? 'auto' : 0}>
        {/* Left line */}
        <Box
          position="absolute"
          top="50%"
          left={0}
          w="30px"
          h="2px"
          bgGradient="linear(to-r, transparent, brand.accent)"
          borderRadius="full"
        />
        {/* Arrow center dot */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="8px"
          h="8px"
          bg="brand.accent"
          borderRadius="full"
        />
        {/* Right line */}
        <Box
          position="absolute"
          top="50%"
          right={0}
          w="30px"
          h="2px"
          bgGradient="linear(to-l, transparent, brand.accent)"
          borderRadius="full"
        />
        {/* Arrow pointer */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w={0}
          h={0}
          borderLeft="6px solid transparent"
          borderRight="6px solid transparent"
          borderTop="8px solid"
          borderTopColor="brand.accent"
          mt="2px"
        />
      </Box>
      
      {subtitle && (
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.500"
          maxW="600px"
          textAlign={alignment}
          mt={2}
        >
          {highlightSubtitle ? renderHighlightedSubtitle() : subtitle}
        </Text>
      )}
    </VStack>
  )
}

export default SectionHeading