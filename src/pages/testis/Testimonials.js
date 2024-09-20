import { useState } from 'react';
import { Box, Grid, Heading, Text, Avatar, VStack, Button, IconButton } from '@chakra-ui/react';
import {BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";


const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: "David Owens",
      role: "Designer",
      message: "Lorem ipsum dolor sit amet, consectetur elit adicing elit sed do eiusmod tempor.",
      avatar: "David Owens"
    },
    {
      name: "Bob Limones",
      role: "Student",
      message: "Lorem ipsum dolor sit amet, consectetur elit adicing elit sed do eiusmod tempor.",
      avatar: "Bob Limones"
    },
    {
      name: "Anna Smith",
      role: "Developer",
      message: "Lorem ipsum dolor sit amet, consectetur elit adicing elit sed do eiusmod tempor.",
      avatar: "Anna Smith"
    },
    {
      name: "John Doe",
      role: "Engineer",
      message: "Lorem ipsum dolor sit amet, consectetur elit adicing elit sed do eiusmod tempor.",
      avatar: "John Doe"
    }
  ];

  const [index, setIndex] = useState(0); // State to track which testimonials to show

  // Function to go to the next pair of testimonials
  const nextTestimonials = () => {
    setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  // Function to go to the previous pair of testimonials
  const prevTestimonials = () => {
    setIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
  };

  return (
    <Box p={10} bg="gray.100">
      <Heading mb={5} textAlign="center">What Our Students Have To Say</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10}>
        {testimonials.slice(index, index + 2).map((testimonial, idx) => (
          <Box key={idx} bg="white" p={5} borderRadius="md" shadow="md">
            <VStack align="start">
              <Text>"{testimonial.message}"</Text>
              <Avatar name={testimonial.avatar} />
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text fontSize="sm">{testimonial.role}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>

      {/* Navigation buttons */}
      <Box display="flex" justifyContent="center" mt={8}>
        <IconButton bg={"#30b979"}
          aria-label="Previous testimonials"
          icon={<BsBoxArrowInLeft />}
          onClick={prevTestimonials}
          mr={5}
        />
        <IconButton bg={"#30b979"}
          aria-label="Next testimonials"
          icon={<BsBoxArrowInRight />          }
          onClick={nextTestimonials}
        />
      </Box>
    </Box>
  );
};

export default Testimonials;
