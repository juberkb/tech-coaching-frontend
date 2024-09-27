import React,{useState} from "react";

import {Box,Heading, Text, Flex, Input, IconButton, Image, SimpleGrid, Tag, VStack, HStack,
  Card, CardHeader, CardBody, CardFooter
} from "@chakra-ui/react";

import blogImageOne from "../../assets/course-img-1.jpg"
import blogImageTwo from "../../assets/course-img-2.jpg"
import blogImageThree from "../../assets/course-img-3.jpg"
import blogImageFour from "../../assets/blogImageCard.png"
import Button from '../../components/button/Button';

import { FiArrowRight } from 'react-icons/fi';
import { FaSearch } from "react-icons/fa";

const blogPosts = [
  {
    title: "Crafting Effective Learning Guide Line",
    category: "Science",
    date: "15 Nov, 2023",
    comments: 0,
    img: blogImageOne,
  },
  {
    title: "Exploring Learning Landscapes in Academic",
    category: "Technology",
    date: "14 Nov, 2023",
    comments: 3,
    img: blogImageOne,
  },
  {
    title: "Voices from the Learning Education Hub",
    category: "Learning",
    date: "13 Nov, 2023",
    comments: 0,
    img: blogImageOne,
  },
  {
    title: "Shaping Future Generations with Pedagogy Perspectives",
    category: "Child Development",
    date: "11 Nov, 2023",
    comments: 0,
    img: blogImageOne,
  },
  {
    title: "Stories from the Educational Front at Classroom",
    category: "Science",
    date: "10 Nov, 2023",
    comments: 0,
    img: blogImageOne,
  },
  {
    title: "Fostering Student Growth through Mindful Mentoring",
    category: "Computer Engineering",
    date: "09 Nov, 2023",
    comments: 0,
    img: blogImageOne,
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
  const handleClick = () => {
    alert('Button clicked!');
  };
  const [bgPosition, setBgPosition] = useState({
    mainBg: '10% 100%, 100% 0%, 93% 40%',
  });
  const handleMouseMoveCommon = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width;
    const yPos = (clientY - top) / height;

    const newPosition = `
      ${10 - xPos * 5}% ${100 + yPos * 10}%,
      ${100 + xPos * 5}% ${0 + yPos * 10}%,
      ${93 - xPos * 3}% ${40 + yPos * 5}%
    `;

    setBgPosition({ mainBg: newPosition });
  };
  return (
    <Box mt={"6rem"} >
      {/* Blog Heading */}
      <Box textAlign="center" mb={10} className="CommonBgImage" py={"6rem"}  style={{ backgroundPosition: bgPosition.mainBg }} onMouseMove={handleMouseMoveCommon}>
        <Heading as="h1" fontSize="3.5rem" >
          Blog
        </Heading>
        <Text mt={4}>Home &gt; Blog</Text>
      </Box>

      {/* Blog Content */}
      <Flex direction={{ base: "column", lg: "row" }} justify="space-between" p={"6rem"}>
        {/* Blog Posts Section */}
        <Box flex={3} mr={{ lg: 10 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {blogPosts.map((post, index) => (
              <Box
                key={index}
                boxShadow="lg"
                borderRadius="md"
                overflow="hidden"
                p={4}
              >
                <Image src={post.img} alt={post.title} />
                <Text mt={2} fontSize="sm" color="gray.500">
                  {`Com ${post.comments}`}
                </Text>

                <Heading as="h3" fontSize="xl" mt={2}>
                  {post.title}
                </Heading>
                <Text color="gray.500" fontSize="sm" mt={2}>
                  {post.category} • {post.date}
                </Text>
                <Text mt={2} color="gray.600" fontSize="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Pagination */}
          <Flex mt={10} justify="center" gap={4} borderRadius={"50%"}>
            <Button
              onClick={handleClick}
              variant="outline" mx={2} boxShadow="lg" borderRadius="50%"
              label="1"
            />
            <Button
              onClick={handleClick}
              variant="outline" mx={2} boxShadow="lg"
              label="2"
            />
            <Button
              onClick={handleClick}
              variant="outline" mx={2} boxShadow="lg"
              label="3"
            />
            <Button
              onClick={handleClick}
              variant="outline" mx={2} boxShadow="lg"
              label="4" />
            <Button
              onClick={handleClick}
              variant="outline" mx={2} boxShadow="lg"
              icon={<FiArrowRight />}
            />
          </Flex>
        </Box>

        {/* Sidebar Section */}
        <Box flex={1} mt={{ base: 10, lg: 0 }} boxShadow="lg" p={10}>
          {/* Search */}
          <Box mb={10} >
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
            <VStack spacing={4} align="start" mt={10}>
              {blogPosts.slice(0, 3).map((post, index) => (
                <Box key={index} width="full">
                  <HStack spacing={4}>
                    <Image src={post.img} alt={post.title} boxSize="80px" objectFit="cover" borderRadius={"10px"} />
                    <Box>
                      <Heading as="h4" fontSize="md">
                        {post.title}
                      </Heading>
                      <Text color="gray.500" fontSize="sm" mt={4}>
                        {post.date}
                      </Text>
                    </Box>
                  </HStack>
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

          <Box mb={"3rem"}>
            {/* <Card>
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={handleClick}
                  variant="outline" mx={2} boxShadow="lg" borderRadius="50%"
                  label="Start Now"
                  icon={<FaArrowRight/>}
                />
              </CardFooter>
            </Card> */}
            <Image src={blogImageFour} alt="card"/>
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


    </Box>
  );
};

export default BlogPage;