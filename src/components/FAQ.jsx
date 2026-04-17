import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const MotionBox = motion(Box)

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We provide rubble removal and TLB hire services across Johannesburg, Pretoria, East Rand, West Rand, Midrand, Centurion, and surrounding areas in Gauteng. Contact us to confirm if we service your area."
  },
  {
    question: "How quickly can you respond to my request?",
    answer: "We aim to respond to all quote requests within 24 hours. For urgent jobs, we offer same-day service when available. Call us directly for immediate assistance."
  },
  {
    question: "What types of rubble do you remove?",
    answer: "We remove all types of construction debris including concrete, soil, bricks, sand, stones, garden waste, renovation debris, and general household rubble. We also provide proper waste disposal documentation."
  },
  {
    question: "Do you provide TLB operators?",
    answer: "Yes, all our TLB machines come with experienced, trained operators. You can hire the machine with operator or discuss other arrangements based on your project requirements."
  },
  {
    question: "What is the minimum hire duration for TLBs?",
    answer: "Our TLB hire minimum is typically half a day (4 hours), but we offer flexible hourly and daily rates. Contact us for a custom quote based on your project duration."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes, we offer same-day service for urgent rubble removal jobs, subject to availability. For guaranteed same-day service, we recommend calling us directly to confirm availability."
  },
  {
    question: "How do I get a quote?",
    answer: "You can get a free quote by filling out our online quote form, calling us directly at +27 84 666 6978, or messaging us on WhatsApp. We'll respond within 24 hours with a competitive quote."
  },
  {
    question: "Are you licensed for waste disposal?",
    answer: "Yes, we are a licensed waste disposal company. We ensure proper sorting and recycling of materials where possible and provide proper disposal documentation for all jobs."
  }
]

function FAQ() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Box py={{ base: '60px', md: '100px' }} bg="brand.offWhite">
      <Container maxW="800px">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
          alignment="center"
          highlightWord="Questions"
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mt={12}
        >
          <Accordion allowMultiple>
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                border="none" 
                mb={4}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AccordionButton
                  bg="white"
                  borderRadius="8px"
                  p={6}
                  _hover={{ bg: 'white' }}
                  _expanded={{ bg: 'white', borderBottomRadius: 0 }}
                  boxShadow={hoveredIndex === idx ? '0 4px 20px rgba(0,0,0,0.08)' : '0 2px 10px rgba(0,0,0,0.05)'}
                  transition="all 0.3s ease"
                  border="1px"
                  borderColor="gray.100"
                >
                  <Box flex="1" textAlign="left">
                    <Text 
                      fontWeight="600" 
                      color="brand.dark" 
                      fontSize="md"
                    >
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon 
                    color="brand.accent" 
                    fontSize="xl"
                  />
                </AccordionButton>
                <AccordionPanel
                  bg="white"
                  borderRadius="0 0 8px 8px"
                  p={6}
                  boxShadow="0 4px 20px rgba(0,0,0,0.05)"
                  border="1px"
                  borderTop="none"
                  borderColor="gray.100"
                >
                  <Text color="gray.600" lineHeight="1.8">
                    {faq.answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default FAQ