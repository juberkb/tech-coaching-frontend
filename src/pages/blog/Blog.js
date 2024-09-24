import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Grid,
  Stack,
  Input,
  IconButton,
  Image,
  SimpleGrid,
  Divider,
  Button,
  Tag,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const blogPosts = [
  {
    title: "Crafting Effective Learning Guide Line",
    category: "Science",
    date: "15 Nov, 2023",
    comments: 0,
    img: "/path-to-image-1.jpg",
  },
  {
    title: "Exploring Learning Landscapes in Academic",
    category: "Technology",
    date: "14 Nov, 2023",
    comments: 3,
    img: "/path-to-image-2.jpg",
  },
  {
    title: "Voices from the Learning Education Hub",
    category: "Learning",
    date: "13 Nov, 2023",
    comments: 0,
    img: "/path-to-image-3.jpg",
  },
  {
    title: "Shaping Future Generations with Pedagogy Perspectives",
    category: "Child Development",
    date: "11 Nov, 2023",
    comments: 0,
    img: "/path-to-image-4.jpg",
  },
  {
    title: "Stories from the Educational Front at Classroom",
    category: "Science",
    date: "10 Nov, 2023",
    comments: 0,
    img: "/path-to-image-5.jpg",
  },
  {
    title: "Fostering Student Growth through Mindful Mentoring",
    category: "Computer Engineering",
    date: "09 Nov, 2023",
    comments: 0,
    img: "/path-to-image-6.jpg",
  },
];

const categories = [
  { name: "Child Development", count: 2 },
  { name: "Computer Engineering", count: 3 },
  { name: "Learning", count: 11 },
  { name: "Nutrition", count: 5 },
  { name: "Science", count: 15 },
  { name: "Technology", count: 6 },
  { name: "Web Development", count: 4 },
];

const tags = [
  "Child Education",
  "Classroom",
  "Design",
  "Development",
  "eLearning",
  "Future",
  "Higher Study",
  "Software",
];

const BlogPage = () => {
  return (
    <Box px={{ base: 4, md: 10 }} py={8} mt={"6rem"}>
      {/* Blog Heading */}
      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="3xl">
          Blog
        </Heading>
        <Text mt={2}>Home &gt; Blog</Text>
      </Box>

      {/* Blog Content */}
      <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
        {/* Blog Posts Section */}
        <Box flex={3} mr={{ lg: 10 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {blogPosts.map((post, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
                p={4}
              >
                <Image src={post.img} alt={post.title} />
                <Text color="gray.500" fontSize="sm" mt={2}>
                  {post.category} • {post.date}
                </Text>
                <Heading as="h3" fontSize="xl" mt={2}>
                  {post.title}
                </Heading>
                <Text mt={2} fontSize="sm" color="gray.500">
                  {`Com ${post.comments}`}
                </Text>
                <Text mt={2} color="gray.600" fontSize="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Pagination */}
          <Flex mt={10} justify="center">
            <Button variant="outline" mx={2}>
              1
            </Button>
            <Button variant="outline" mx={2}>
              2
            </Button>
            <Button variant="outline" mx={2}>
              3
            </Button>
            <Button variant="outline" mx={2}>
              4
            </Button>
          </Flex>
        </Box>

        {/* Sidebar Section */}
        <Box flex={1} mt={{ base: 10, lg: 0 }}>
          {/* Search */}
          <Box mb={10}>
            <Heading as="h3" fontSize="lg" mb={4}>
              Search
            </Heading>
            <Flex>
              <Input placeholder="Search..." />
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                colorScheme="teal"
                ml={2}
              />
            </Flex>
          </Box>

          {/* Latest Post */}
          <Box mb={10}>
            <Heading as="h3" fontSize="lg" mb={4}>
              Latest Post
            </Heading>
            <VStack spacing={4} align="start">
              {blogPosts.slice(0, 3).map((post, index) => (
                <Box key={index}>
                  <Text color="gray.500" fontSize="sm">
                    {post.date}
                  </Text>
                  <Heading as="h4" fontSize="md">
                    {post.title}
                  </Heading>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Categories */}
          <Box mb={10}>
            <Heading as="h3" fontSize="lg" mb={4}>
              Categories
            </Heading>
            <VStack align="start" spacing={3}>
              {categories.map((category, index) => (
                <Flex key={index} justify="space-between" w="full">
                  <Text>{category.name}</Text>
                  <Text color="gray.500">({category.count})</Text>
                </Flex>
              ))}
            </VStack>
          </Box>

          {/* Tags */}
          <Box>
            <Heading as="h3" fontSize="lg" mb={4}>
              Tags
            </Heading>
            <HStack wrap="wrap" spacing={2}>
              {tags.map((tag, index) => (
                <Tag key={index} colorScheme="teal" size="lg">
                  {tag}
                </Tag>
              ))}
            </HStack>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Divider my={10} />
      <Box textAlign="center" mt={10}>
        <Text>
          Copyright © 2024 EduBlink | Developed by DevsBlink. All rights
          reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default BlogPage;