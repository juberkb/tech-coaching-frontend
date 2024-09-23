import React, { useState } from 'react';
import homeNavImage from "../../assets/mega-menu-image.webp";
import Button from '../../components/button/Button';
import 'animate.css';
import {
  Box,
  SimpleGrid,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import webLogo from "../../assets/logo-dark.png";
import { FaBars, FaChevronDown,FaChevronRight } from 'react-icons/fa';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { TfiArrowRight } from "react-icons/tfi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {  // Adjust the scroll threshold as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      {/* Navbar */}
   
      <Box
      className='animate__animated animate__backInDown'
        position="fixed"
        top={0}
        left={0}
        width="100%"
        zIndex="1000"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={isScrolled ? 'md' : 'none'}
        transition="transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out"
        transform={isScrolled ? 'translateY(0)' : 'translateY(-10%)'} // Sliding effect
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
            <Menu>
              <MenuButton
                as={Link}
                href="#"
                _hover={{ color: '#30b979' }}
                style={{ textDecoration: 'none' }}
              >
                <Flex alignItems="center">
                  Home <FaChevronDown style={{ marginLeft: '5px' }} />
                </Flex>
              </MenuButton>
              <MenuList maxW={"50%"} ml={{ md: "6rem" }} mt={{ md: "1rem" }}>
                <SimpleGrid columns={3} spacing={10} p={"5rem"}>
                  {/* Column 1 */}
                  <Box>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>EduBlink Education</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Distant Learning</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>University</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Online Academy</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Modern Schooling</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Kitchen Coach</MenuItem>
                  </Box>

                  {/* Column 2 */}
                  <Box>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Remote Training</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Business Coach</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Motivation</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Programming</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Online Art</MenuItem>
                   <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Sales Coach</MenuItem>
                  </Box>

                  {/* Column 3 - Image */}
                  <Box>
                    <Image
                      src={homeNavImage}
                      alt="Dropdown Image"
                      borderRadius="md"
                      boxShadow="md"
                    />
                  </Box>
                </SimpleGrid>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Link}
                href="#"
                _hover={{ color: '#30b979' }}
                style={{ textDecoration: 'none' }}
              >
                <Flex alignItems="center">
                  Pages <FaChevronDown style={{ marginLeft: '5px' }} />
                </Flex>
              </MenuButton>
              <MenuList>
              <Menu>
      <MenuButton fontWeight={"500"} _hover={{ color: '#30b979' }} >
      <HStack ml={"1rem"}>
      <span>About Us</span><FaChevronRight  style={{ marginLeft: '5px' }}/>
      </HStack>
      </MenuButton>
      <MenuList ml={"13.7rem"} mt={"-2rem"}>
        <MenuItem fontWeight={"500"} _hover={{ color: '#30b979' }}>Style 1</MenuItem>
        <MenuItem fontWeight={"500"} _hover={{ color: '#30b979' }}>Style 2</MenuItem>
        <MenuItem fontWeight={"500"} _hover={{ color: '#30b979' }}>Style 3</MenuItem>
      </MenuList>
    </Menu>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Instructor</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Event Page</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Shop Pages</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Zoom Meetings</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>FAQ's</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Pricing Table</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Privacy Policy</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Coming Soon</MenuItem>
               <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>404 Page</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Link}
                href="#"
                _hover={{ color: '#30b979' }}
                style={{ textDecoration: 'none' }}
              >
                <Flex alignItems="center">
                  Courses <FaChevronDown style={{ marginLeft: '5px' }} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Course Style</MenuItem>
                <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Course Detail</MenuItem>
                <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Course Filter</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Link}
                href="#"
                _hover={{ color: '#30b979' }}
                style={{ textDecoration: 'none' }}
              >
                <Flex alignItems="center">
                  Blog <FaChevronDown style={{ marginLeft: '5px' }} />
                </Flex>
              </MenuButton>
              <MenuList textDecoration={"none"}  >
                <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Blog Style 1</MenuItem>
                <MenuItem fontWeight={"500"} _hover={{ color: '#30b979' }}>Blog Style 2</MenuItem>
                <MenuItem fontWeight={"500"} _hover={{ color: '#30b979' }}>Blog Standared</MenuItem>
                <MenuItem fontWeight={"500"} _hover={{ color: '#30b979' }}>Blog Details</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Link}
                href="#"
                _hover={{ color: '#30b979' }}
                style={{ textDecoration: 'none' }}
              >
                <Flex alignItems="center">
                  Contact <FaChevronDown style={{ marginLeft: '5px' }} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Contact Us</MenuItem>
                <MenuItem fontWeight={"500"}  _hover={{ color: '#30b979' }}>Contact Me</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {/* Search and Cart Icons */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}
            mr={{ base: 0, md: '5rem' }}>
            <IconButton
              aria-label="Search"
              icon={<CiSearch />}
              variant="ghost"
              fontWeight={"bold"}
              fontSize={"2em"}
            />
            <IconButton
              aria-label="Shopping Cart"
              icon={<MdOutlineShoppingCart />}
              variant="ghost"
              fontSize={"2em"}
            />
          </HStack>
          <Button
            label="Try For Free"
            onClick={() => alert('Button clicked!')}
            icon={<TfiArrowRight />}
          />

          {/* Menu Button for mobile */}
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
                  <Link href="#">Blog</Link>
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
