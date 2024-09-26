import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Link,
  useDisclosure,
  Collapse,
  Heading,
  Input,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Box>
      {/* Navbar for Small Devices */}
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
        justify={"space-between"}
      >
        {/* Logo */}
        <Heading as="h1" size="md">
          EduBlink
        </Heading>

        {/* Search Icon */}
        <IconButton
          icon={<CiSearch  />}
          variant={"ghost"}
          aria-label={"Search"}
          onClick={() => setShowSearch(!showSearch)}
        />

        {/* Hamburger Menu Icon */}
        <IconButton
          icon={
            isOpen ? (
              <IoMdClose w={3} h={3} />
            ) : (
              <xHamburgerMenu w={5} h={5} />
            )
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
          onClick={onToggle}
        />
      </Flex>

      {/* Search Input - Only visible when clicking the search icon */}
      {showSearch && (
        <Box px={4} py={2}>
          <Input placeholder="Search..." size="sm" />
        </Box>
      )}

      {/* Collapse component for the Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={"white"}
          p={4}
          display={{ md: "none" }}
          spacing={4}
          as={"nav"}
        >
          <Link href="#">Home</Link>
          <Link href="#">Courses</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Pricing</Link>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Navbar;