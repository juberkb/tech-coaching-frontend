import React from 'react';
import {
  Box, VStack, Heading, Text, Image, Button, Flex,
  SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, 
  Stack, Input, IconButton
} from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Flex direction={['column', 'row']} align="center" justify="space-between" p={8}>
        <Box maxW="500px">
          <Heading as="h1" size="2xl">Build Your <Text as="span" color="teal.500">Programming</Text> Skill with EdubLink</Heading>
          <Text mt={4}>Explore our content & projects to improve your skills in coding & software development.</Text>
          <Button mt={6} colorScheme="teal">Find Courses</Button>
        </Box>
        <Image 
          src="https://via.placeholder.com/400" // replace with appropriate image URL
          alt="Hero Image"
          boxSize={['200px', '300px', '400px']}
        />
      </Flex>

      {/* Features Section */}
      <VStack spacing={8} py={12} px={8}>
        <Heading as="h2" size="lg">Emerging Technologies and Trends in Software Development</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box p={6} shadow="md" borderWidth="1px">
            <Image src="https://via.placeholder.com/100" alt="Web Dev" mb={4} />
            <Heading as="h3" size="md">Web Development</Heading>
            <Text mt={2}>Build websites and applications with modern tools.</Text>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px">
            <Image src="https://via.placeholder.com/100" alt="Instructors" mb={4} />
            <Heading as="h3" size="md">Top Instructors</Heading>
            <Text mt={2}>Learn from the industry’s best professionals.</Text>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px">
            <Image src="https://via.placeholder.com/100" alt="Certifications" mb={4} />
            <Heading as="h3" size="md">Online Certifications</Heading>
            <Text mt={2}>Get certified in various programming disciplines.</Text>
          </Box>
        </SimpleGrid>
      </VStack>

      {/* About Section */}
      <Flex direction={['column', 'row']} align="center" justify="space-between" py={12} px={8}>
        <Image 
          src="https://via.placeholder.com/400" // replace with appropriate image URL
          alt="About Image"
          boxSize={['200px', '300px', '400px']}
        />
        <Box maxW="500px" textAlign="left">
          <Heading as="h2" size="lg">Leading the Way in Software Development</Heading>
          <Text mt={4}>A great platform to grow your skills with online learning. Start now to access our online courses and resources.</Text>
          <Button mt={6} colorScheme="teal">Learn More</Button>
        </Box>
      </Flex>

      {/* Courses Section */}
      <VStack spacing={8} py={12} px={8}>
        <Heading as="h2" size="lg">Pick A Course To Get Started</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box p={6} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Complete Front-End Bootcamp</Heading>
            <Text mt={2}>A comprehensive course for front-end developers.</Text>
            <Button mt={4} colorScheme="teal">Learn More</Button>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Advanced Java Programming</Heading>
            <Text mt={2}>Master Java with advanced concepts and applications.</Text>
            <Button mt={4} colorScheme="teal">Learn More</Button>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Python & PHP Web Development</Heading>
            <Text mt={2}>Learn Python & PHP for back-end web development.</Text>
            <Button mt={4} colorScheme="teal">Learn More</Button>
          </Box>
        </SimpleGrid>
      </VStack>

      {/* FAQ Section */}
      <VStack spacing={8} py={12} px={8}>
        <Heading as="h2" size="lg">Frequently Asked Questions</Heading>
        <Accordion allowToggle w="full">
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">How can I start a course?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>Simply sign up, choose a course, and start learning.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Who should study here?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>Anyone passionate about software development and programming.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">How to enroll in a course?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>Find a course, click enroll, and complete the sign-up process.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>

      {/* Testimonial Section */}
      <VStack spacing={8} py={12} px={8}>
        <Heading as="h2" size="lg">What Our Students Have To Say</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box p={6} shadow="md" borderWidth="1px">
            <Text>“Edublink helped me develop skills that are invaluable in my career!”</Text>
            <Text mt={4}>- David Owen, Student</Text>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px">
            <Text>“Amazing courses and instructors. Highly recommend!”</Text>
            <Text mt={4}>- Emily Lauren, Student</Text>
          </Box>
        </SimpleGrid>
      </VStack>

      {/* Newsletter Section */}
      <VStack spacing={8} py={12} px={8} bg="gray.100">
        <Heading as="h2" size="lg">Get News with Edublink</Heading>
        <Stack direction={['column', 'row']} spacing={4}>
          <Input placeholder="Enter your email" />
          <IconButton colorScheme="teal" aria-label="Subscribe" icon={<i className="fas fa-envelope" />} />
        </Stack>
      </VStack>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={6} textAlign="center">
        <Text>© 2024 EdubLink. All rights reserved.</Text>
      </Box>
    </Box>
  );
}
