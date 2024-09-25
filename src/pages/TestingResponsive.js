import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Button,
  Badge,
  Stack,
  useColorModeValue,
Heading,
} from "@chakra-ui/react";
import courseImageOne from "../../assets/course-img-1.jpg"
import courseImageTwo from "../../assets/course-img-2.jpg"
import courseImageThree from "../../assets/course-img-3.jpg"

const courses = [
  {
    title: "Starting SEO as your Home Based Business",
    category: "Business",
    rating: 5.0,
    reviews: 3,
    imageUrl: courseImageOne,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageTwo,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageThree,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageTwo,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageThree,
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    category: "Motivation",
    rating: 5.0,
    reviews: 2,
    imageUrl: courseImageOne,
  },
  
];

const CourseCard = ({ course }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      overflow="hidden"
      _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
      role="group"
    >
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
          <Badge rounded="full" px="2" colorScheme="teal">
            {course.category}
          </Badge>
          <Text fontWeight="bold">{course.rating} / 5.0</Text>
        </Stack>

        {/* Course Title */}
        <Text mt="2" fontWeight="semibold" lineHeight="tight" noOfLines={2}>
          {course.title}
        </Text>

        {/* Hidden Button */}
        <Box
          display="none"
          _groupHover={{
            display: "block",
            mt: "4", // Moves the button down to show up from the hidden content
          }}
          textAlign="center"
        >
          <Button colorScheme="blue" size="sm">
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const CourseGrid = () => {
  return (
    <Box mt={"6rem"}>
      {/* course Heading */}
      <Box textAlign="center" mb={10} bg={"#F5F9FA"} py={"5.5rem"} >
        <Heading as="h1" fontSize="3.5rem" >
        Archives: Courses
        </Heading>
        <Text mt={4}>Home &gt; Courses</Text>
      </Box>

    <SimpleGrid columns={[1, 2, 3]} spacing={10} p={5}>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </SimpleGrid>
    </Box>
  );
};

export default CourseGrid;