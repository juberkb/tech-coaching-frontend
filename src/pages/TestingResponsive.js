import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useColorModeValue,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  Stack,
  Link,
  useDisclosure
} from '@chakra-ui/react';
import webLogo from "../../assets/logo-dark.png";
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position
  const [isScrolledDown, setIsScrolledDown] = useState(false); // Detect small scroll down

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // User scrolled down by 100px
      setIsScrolledDown(true);
      setIsNavbarVisible(true); // Show the navbar with animation when scrolling down
    } else {
      setIsScrolledDown(false);
      setIsNavbarVisible(true); // Keep navbar always visible when at the top
    }
    setLastScrollY(window.scrollY);
  };

  // Attach scroll listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Box>
      {/* Navbar */}
      <Box
        position="fixed"
        top={isScrolledDown && isNavbarVisible ? '0' : '0px'} // Slide down when scrolled
        left="0"
        width="100%"
        zIndex="1000"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={isScrolledDown ? 'md' : 'none'} // Add shadow when scrolling down
        transition="top 0.5s ease-in-out" // Smooth sliding down effect
      >
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          p={{ base: 4, md: 12 }}
        >
          {/* Logo */}
          <Box>
            <Image src={webLogo} alt="EduBlink" width="100%" />
          </Box>

          {/* Menu Links */}
          <HStack
            as="nav"
            spacing={10}
            mr={{ base: 0, md: '16rem' }}
            display={{ base: 'none', md: 'flex' }}
            ml="auto"
            style={{ fontWeight: "500", fontSize: "1.2em" }}
          >
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Courses</Link>
            <Link href="#">Contact</Link>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            size="md"
            icon={isOpen ? <MdClose /> : <FaBars />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onOpen}
          />

          {/* Mobile Drawer */}
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Stack as="nav" spacing={4}>
                  <Link href="#">Home</Link>
                  <Link href="#">Pages</Link>
                  <Link href="#">Courses</Link>
                  <Link href="#">Contact</Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
