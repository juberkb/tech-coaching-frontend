import React from 'react';
import { Box, VStack, HStack, SimpleGrid, GridItem, Text, Input, IconButton, Link, Icon, Flex } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.100" py={10}>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={8} maxW="1200px" mx="auto" px={4}>
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
          <VStack align="flex-start" spacing={[10, 10, 4]}>
            {/* Online Platform Links */}
            <Box>
              <Text fontSize="lg" fontWeight="bold">Online Platform</Text>
              <Link href="#" fontSize="sm">About</Link>
              <Link href="#" fontSize="sm">Course</Link>
              <Link href="#" fontSize="sm">Instructor</Link>
              <Link href="#" fontSize="sm">Events</Link>
              <Link href="#" fontSize="sm">Instructor Details</Link>
              <Link href="#" fontSize="sm">Purchase Guide</Link>
            </Box>

            {/* Links */}
            <Box>
              <Text fontSize="lg" fontWeight="bold">Links</Text>
              <Link href="#" fontSize="sm">Contact Us</Link>
              <Link href="#" fontSize="sm">Gallery</Link>
              <Link href="#" fontSize="sm">News & Articles</Link>
              <Link href="#" fontSize="sm">FAQ&apos;s</Link>
              <Link href="#" fontSize="sm">Coming Soon</Link>
              <Link href="#" fontSize="sm">Sign In/Registration</Link>
            </Box>
          </VStack>
        </GridItem>

        {/* Contact Section with Email Form */}
        <GridItem colSpan={[1, 1, 1, 1]}>
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">Contacts</Text>
            <Text fontSize="sm">Enter your email address to register for our newsletter subscription</Text>
            <HStack mt={4}>
              <Input placeholder="Your email" size="md" />
              <IconButton
                icon={<i className="fas fa-arrow-right"></i>}
                colorScheme="teal"
                aria-label="Subscribe"
              >
                Subscribe
              </IconButton>
            </HStack>

            {/* Social Media Icons */}
            <HStack mt={4} spacing={4}>
              <Link href="#"><Icon as={FaFacebook} w={6} h={6} color="blue.600" /></Link>
              <Link href="#"><Icon as={FaLinkedin} w={6} h={6} color="blue.500" /></Link>
              <Link href="#"><Icon as={FaInstagram} w={6} h={6} color="pink.500" /></Link>
              <Link href="#"><Icon as={FaTwitter} w={6} h={6} color="blue.400" /></Link>
              <Link href="#"><Icon as={FaYoutube} w={6} h={6} color="red.500" /></Link>
            </HStack>
          </VStack>
        </GridItem>
      </SimpleGrid>

      {/* Footer Bottom Section */}
      <Box textAlign="center" pt={6}>
        <Text fontSize="sm">Copyright 2024 EduBlink | Developed by DevsBlink. All Rights Reserved</Text>
      </Box>
    </Box>
  );
};

export default Footer;
