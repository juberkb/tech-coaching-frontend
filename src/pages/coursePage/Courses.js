import React, { useState } from "react";
import "../../comman/Styles/allStyles.css"

import {
  Flex,
  Box,
  SimpleGrid,
  Image,
  Text,
  Badge,
  Stack,
  useColorModeValue,
  Heading,
  HStack
} from "@chakra-ui/react";
import { IoStar } from "react-icons/io5";
import Button from '../../components/button/Button';
import { FiArrowRight } from 'react-icons/fi';
import courseImageOne from "../../assets/course-img-1.jpg";
import courseImageTwo from "../../assets/course-img-2.jpg";
import courseImageThree from "../../assets/course-img-3.jpg";

const courses = [

  {
    title: "Starting SEO as your Home Based Business",
    category: "Business",
    rating: 5.0,
    reviews: 3,
    imageUrl: courseImageOne,
    courseText: "Grow Personal Financial Security Thinking & Principles, Grow Personal Financial Security Thinking & Principles",
    onlineOnly: true,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageTwo,
    courseText: "Grow Personal Financial Security Thinking & Principles, Grow Personal Financial Security Thinking & Principles",
    onlineOnly: false,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageThree,
    courseText: "Grow Personal Financial Security Thinking & Principles, Grow Personal Financial Security Thinking & Principles",
    onlineOnly: true,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageTwo,
    courseText: "Grow Personal Financial Security Thinking & Principles, Grow Personal Financial Security Thinking & Principles",
    onlineOnly: false,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageThree,
    courseText: "Grow Personal Financial Security Thinking & Principles, Grow Personal Financial Security Thinking & Principles",
    onlineOnly: true,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageOne,
    courseText: "Grow Personal Financial Security Thinking & Principles, Grow Personal Financial Security Thinking & Principles",
    onlineOnly: true,
  },
];


const CourseCard = ({ course }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"

      rounded="lg"
      shadow="lg"
      position="relative"
      overflow="hidden"
      _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
      role="group"
    >
      {/* Badge - Online Only */}
      {course.onlineOnly && (
        <Badge
          position="absolute"
          top="10px"
          left="10px"
          px="2"
          py="1"
          bg="yellow.400"
          color="black"
          rounded="md"
        >
          Online Only
        </Badge>
      )}

      {/* Course Image */}
      <Image src={course.imageUrl} alt={`Picture of ${course.title}`} />

      {/* Course Content */}
      <Box
        bg={"white"}
        p="6"
        transition="all 0.3s ease"
        position="relative"
        _groupHover={{ transform: "translateY(-50px)" }}
      >
        {/* Category and Rating */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Badge rounded="full" px="2" colorScheme="red">
            {course.category}
          </Badge>
        </Stack>

        {/* Course Title */}
        <Text mt="2" fontWeight="semibold" lineHeight="tight" noOfLines={2}>
          {course.title}
        </Text>
        <Text mt="2" lineHeight="tight" noOfLines={2}>
          {course.courseText}
        </Text>
        <HStack mb={4} spacing={2}>
          {[...Array(5)].map((_, i) => (
            <IoStar key={i} color="gold" />
          ))}
          <Text mt="2" fontWeight="bold">
            ( {course.rating} / {course.reviews} Ratings)
          </Text>
        </HStack>
        {/* Hidden Button */}
        <Box
          display="none"
          _groupHover={{
            display: "block",
            mt: "4",
          }}
          textAlign="center"
        >

          <Button
            label="  Enroll Now"
            icon={<FiArrowRight />}
          />
        </Box>
      </Box>
    </Box>
  );
};

const CourseGrid = () => {
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
    <Box mt={"6rem"}>
      {/* course Heading */}
      <Box textAlign="center" mb={10} py={"5.5rem"} className="CommonBgImage" style={{ backgroundPosition: bgPosition.mainBg }} onMouseMove={handleMouseMoveCommon}>
        <Heading as="h1" fontSize="3.5rem">
          Archives: Courses
        </Heading>
        <Text mt={4}>Home &gt; Courses</Text>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} p={5}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </SimpleGrid>
      <Flex mt={10} justify="center" gap={4} borderRadius={"50%"} mb={20}>
        <Button
          variant="outline" mx={2} boxShadow="lg" borderRadius="50%"
          label="1"
        />
        <Button
          variant="outline" mx={2} boxShadow="lg"
          label="2"
        />
        <Button
          variant="outline" mx={2} boxShadow="lg"
          label="3"
        />
        <Button
          variant="outline" mx={2} boxShadow="lg"
          label="4" />
        <Button
          variant="outline" mx={2} boxShadow="lg"
          icon={<FiArrowRight />}
        />
      </Flex>
    </Box>
  );
};

export default CourseGrid;