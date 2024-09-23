import React from 'react';
import "../Styles/allStyles.css"
import { Box, VStack, HStack, SimpleGrid, GridItem, Text, Input, Link, Icon, Flex } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Button from '../../components/button/Button';
const Footer = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box bg="#F0F4F5" 
    padding={{ base: '6rem', md: '1rem' }} >
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={8} maxW="1200px" mx="auto" px={4} className="footer">
        {/* EduBlink Info (Logo, Address, Contact Info) */}
        <GridItem>
          <VStack align={["flex-start", "flex-start", "flex-start", "flex-start"]}>
            <Flex direction={["column", "column", "row"]} align="flex-start" w="full" justify="space-between">
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  EduBlink
                </Text>
                <Text fontSize="sm">
                  Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
                </Text>
                <Text mt={4}><strong>Add:</strong> 70-80 Upper St Norwich NR2</Text>
                <Text><strong>Call:</strong> +01 123 5641 231</Text>
                <Text><strong>Email:</strong> info@edublink.co</Text>
              </Box>
            </Flex>
          </VStack>
        </GridItem>

        {/* Online Platform & Links combined for Mobile View */}
        <GridItem>
          <Box display={"flex"} flexDirection={"column"}>
            <Text fontSize="lg" fontWeight="bold">Online Platform</Text>
            <Link href="#" fontSize="sm">About</Link>
            <Link href="#" fontSize="sm">Course</Link>
            <Link href="#" fontSize="sm">Instructor</Link>
            <Link href="#" fontSize="sm">Events</Link>
            <Link href="#" fontSize="sm">Instructor Details</Link>
            <Link href="#" fontSize="sm">Purchase Guide</Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box display={"flex"} flexDirection={"column"}>
            <Text fontSize="lg" fontWeight="bold">Links</Text>
            <Link href="#" fontSize="sm">Contact Us</Link>
            <Link href="#" fontSize="sm">Gallery</Link>
            <Link href="#" fontSize="sm">News & Articles</Link>
            <Link href="#" fontSize="sm">FAQ&apos;s</Link>
            <Link href="#" fontSize="sm">Coming Soon</Link>
            <Link href="#" fontSize="sm">Sign In/Registration</Link>
          </Box>
        </GridItem>



        {/* Contact Section with Email Form */}
        <GridItem colSpan={[1, 1, 1, 1]}>
          <VStack align="flex-start" spacing={4} w="100%">
            {/* Heading and Text */}
            <Text fontSize="lg" fontWeight="bold">Contacts</Text>
            <Text fontSize="sm">Enter your email address to register for our newsletter subscription</Text>

            {/* Input and Button Section */}
            <HStack
              mt={4}
              spacing={4}
              w="100%"
              direction={{ base: 'column', md: 'row' }} // Column on small screens, row on medium and large screens
              align="flex-start" // Left-align on small screens
            >
              {/* Input */}
              <Input placeholder="Enter your email" w="100%" />

              {/* Button */}
              <Button onClick={handleClick} w={{ base: '100%', md: 'auto' }} mt={{ base: '1rem', md: '0' }}>
                Subscribe
              </Button>
            </HStack>

            {/* Social Media Icons */}
            <HStack mt={4} spacing={4}>
              <Link href="#"><Icon as={FaFacebook} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaLinkedin} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaInstagram} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaTwitter} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaYoutube} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
            </HStack>
          </VStack>
        </GridItem>
      </SimpleGrid>

      {/* Footer Bottom Section */}
      <Box textAlign="center" pt={6} bg={"ebeff0"}>
        <Text fontSize="sm">Copyright 2024 EduBlink | Developed by DevsBlink. All Rights Reserved</Text>
      </Box>
    </Box>
  );
};

export default Footer;
