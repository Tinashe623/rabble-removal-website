import { Box, Skeleton, SkeletonText, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export function SkeletonCard({ variant = 'default', children, ...props }) {
  return (
    <MotionBox
      bg="white"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="0 4px 20px rgba(0,0,0,0.06)"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

export function EquipmentSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <SkeletonCard key={i}>
          <Skeleton h="200px" />
          <VStack align="stretch" p={6} spacing={3}>
            <Skeleton h="24px" w="70%" />
            <SkeletonText noOfLines={2} spacing={2} />
            <Skeleton h="20px" w="50%" />
            <SimpleGrid columns={3} spacing={2} mt={2}>
              <Skeleton h="20px" />
              <Skeleton h="20px" />
              <Skeleton h="20px" />
            </SimpleGrid>
          </VStack>
        </SkeletonCard>
      ))}
    </SimpleGrid>
  )
}

export function ServicesSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} p={8}>
          <VStack align="flex-start" spacing={4}>
            <Skeleton h="48px" w="48px" borderRadius="8px" />
            <Skeleton h="28px" w="50%" />
            <SkeletonText noOfLines={3} spacing={2} />
            <SimpleGrid columns={2} spacing={2} w="100%">
              <Skeleton h="16px" />
              <Skeleton h="16px" />
              <Skeleton h="16px" />
              <Skeleton h="16px" />
            </SimpleGrid>
          </VStack>
        </SkeletonCard>
      ))}
    </SimpleGrid>
  )
}

export function TestimonialsSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
      {[1, 2, 3].map((i) => (
        <SkeletonCard key={i} p={8}>
          <VStack align="flex-start" spacing={4}>
            <Skeleton h="20px" w="100px" />
            <SkeletonText noOfLines={4} spacing={2} />
            <Box pt={4} w="100%">
              <Skeleton h="16px" w="60%" mb={2} />
              <Skeleton h="14px" w="40%" />
            </Box>
          </VStack>
        </SkeletonCard>
      ))}
    </SimpleGrid>
  )
}

export function FormSkeleton() {
  return (
    <VStack spacing={5} w="100%">
      <Skeleton h="56px" w="100%" borderRadius="md" />
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
        <Skeleton h="56px" borderRadius="md" />
        <Skeleton h="56px" borderRadius="md" />
      </SimpleGrid>
      <Skeleton h="56px" w="100%" borderRadius="md" />
      <Skeleton h="56px" w="100%" borderRadius="md" />
      <Skeleton h="120px" w="100%" borderRadius="md" />
      <Skeleton h="56px" w="200px" borderRadius="md" />
    </VStack>
  )
}

export default SkeletonCard