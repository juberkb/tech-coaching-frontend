import React from 'react';
import { Box, Text, Image, Button, SimpleGrid, Flex, VStack, HStack, Badge, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import courseImage1 from "../../assets/course-img-1.jpg"
import courseImage2 from "../../assets/course-img-2.jpg"
import courseImage3 from "../../assets/course-img-3.jpg"
import "../../comman/Styles/allStyles.css"


const MotionBox = motion(Box);

const courses = [
  {
    id: 1,
    title: "Starting SEO as your Home Based Business",
    level: "Beginner",
    price: "$30",
    lessons: 11,
    students: 227,
    image: courseImage1,
    duration: "15 Weeks",
  },
  {
    id: 2,
    title: "Grow Personal Financial Security Thinking & Principles",
    level: "Expert",
    price: "$49",
    lessons: 8,
    students: 72,
    image: courseImage2,
    duration: "12 Weeks",
  },
  {
    id: 3,
    title: "Full Stack Development",
    level: "Professional",
    price: "$99",
    lessons: 20,
    students: 54,
    image: courseImage3,
    duration: "20 Weeks",
  },
  {
    id: 4,
    title: "Full Stack Development",
    level: "Professional",
    price: "$99",
    lessons: 20,
    students: 54,
    image: courseImage3,
    duration: "20 Weeks",
  },
  {
    id: 5,
    title: "Starting SEO as your Home Based Business",
    level: "Beginner",
    price: "$30",
    lessons: 11,
    students: 227,
    image: courseImage1,
    duration: "15 Weeks",
  },
  {
    id: 6,
    title: "Grow Personal Financial Security Thinking & Principles",
    level: "Expert",
    price: "$49",
    lessons: 8,
    students: 72,
    image: courseImage2,
    duration: "12 Weeks",
  },
  // Add more courses here
];

const CourseCard = ({ course }) => {
  return (
    <MotionBox
      w="100%"
      h="300px"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      whileHover={{ rotateY: 180 }}
      style={{ perspective: 1000 }}
      cursor="pointer"
    >
      <Box
        h="100%"
        transformStyle="preserve-3d"
        transition="transform 0.8s"
        position="relative"
      >
        {/* Front of the card */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          backfaceVisibility="hidden"
          p={4}
        >
          <Image src={course.image} alt={course.title} w="100%" h="60%" objectFit="cover" />
          <VStack align="start" mt={3}>
            <Badge colorScheme="green">{course.level}</Badge>
            <Text fontWeight="bold">{course.title}</Text>
            <Text fontSize="sm">{course.price}</Text>
          </VStack>
        </Box>

        {/* Back of the card */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="gray.100"
          p={4}
          transform="rotateY(180deg)"
          backfaceVisibility="hidden"
        >
          <VStack spacing={3}>
            <Text>Lessons: {course.lessons}</Text>
            <Text>Students: {course.students}</Text>
            <Text>Duration: {course.duration}</Text>
            <Button colorScheme="teal">Enroll Now</Button>
          </VStack>
        </Box>
      </Box>
    </MotionBox>
  );
};

const CoursesPage = () => {
  return (
    <Box p={6} mt={"6rem"}>
      <Box textAlign="center" mb={6}>
        <Text fontSize="3xl" fontWeight="bold">Archives: Courses</Text>
        <Text>Home &gt; Course</Text>
      </Box>

      {/* Course Grid */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </SimpleGrid>

      {/* Pagination (Dummy for now) */}
      <Flex justifyContent="center" mt={6}>
        <HStack spacing={2}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default CoursesPage;