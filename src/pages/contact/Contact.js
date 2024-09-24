import React from "react";
import { Box, Text, Flex, Link, Input, Button, VStack, HStack, Textarea, Image } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="gray.50" p={6} mt={"6rem"}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Contact Us
        </Text>
        <Text textAlign="center">
          Home &gt; Contact Us
        </Text>
      </Box>

      {/* Main Content */}
      <Flex direction={["column", "row"]} p={6} justifyContent="space-between">
        {/* Left Side - Contact Information */}
        <VStack align="start" w={["100%", "40%"]} spacing={4}>
          <Text fontSize="xl" fontWeight="bold">We're Always Eager to Hear From You!</Text>
          <Text>Address</Text>
          <Text>Studio 76d, Riley Ford, North Michael Chester, CF90 8QQ</Text>
          <Text>Email: edublink@example.com</Text>
          <Text>Phone: (+091) 413 554 8598</Text>

          {/* Social Icons */}
          <HStack spacing={4}>
            <Link href="#">FB</Link>
            <Link href="#">TW</Link>
            <Link href="#">LI</Link>
          </HStack>
        </VStack>

        {/* Right Side - Contact Form */}
        <Box w={["100%", "50%"]} bg="white" p={6} boxShadow="md" borderRadius="md">
          <Text fontSize="xl" mb={4}>Get In Touch</Text>
          <VStack spacing={4}>
            <Input placeholder="Your name *" />
            <Input placeholder="Enter your email *" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="teal" w="full">Submit Message</Button>
          </VStack>
        </Box>
      </Flex>

      {/* Map Section */}
      <Box h="400px" mt={6}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.284981058647!2d-0.11954338422923735!3d51.50330881796971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035102c64b85%3A0xeefcf71296c0f6e0!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1666012114166!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

      {/* Footer */}
      <Box bg="gray.50" p={6} mt={6}>
        <Flex direction={["column", "row"]} justifyContent="space-between">
          <VStack align="start" w={["100%", "40%"]}>
            <Text fontWeight="bold">EduBlink</Text>
            <Text>
              Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore.
            </Text>
            <Text>Address: 70-80 Upper St Norwich NR2</Text>
            <Text>Phone: +01 123 5641 231</Text>
            <Text>Email: info@edublink.co</Text>
          </VStack>

          <VStack align="start" w={["100%", "20%"]}>
            <Text fontWeight="bold">Online Platform</Text>
            <Link href="#">About</Link>
            <Link href="#">Course</Link>
            <Link href="#">Instructor</Link>
            <Link href="#">Events</Link>
          </VStack>

          <VStack align="start" w={["100%", "20%"]}>
            <Text fontWeight="bold">Links</Text>
            <Link href="#">Contact Us</Link>
            <Link href="#">Gallery</Link>
            <Link href="#">FAQ's</Link>
          </VStack>

          <VStack align="start" w={["100%", "20%"]}>
            <Text fontWeight="bold">Contacts</Text>
            <Text>Enter your email address to register to our newsletter subscription</Text>
            <Input placeholder="Your email" />
            <Button colorScheme="teal" w="full">Subscribe</Button>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUs;