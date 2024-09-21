import { useState } from 'react';
import { Box, Grid, GridItem, Heading, Text, Avatar, VStack, Stack, Button, IconButton, Image } from '@chakra-ui/react';
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import StarRatings from '../../comman/startRating/StarRatings';
import studentImageOne from "../../assets/testimonial-01.png"
import studentImageTwo from "../../assets/testimonial-02.png"
import "../../comman/Styles/allStyles.css"
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
    <Box p={10}  className='testiBgImage'>
      <Text textAlign="center">TESTIMONIALS</Text>
      <Heading mb={"5rem"} textAlign="center">What Our Students <br /> Have To Say</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10} width={"80%"} ml={"8rem"}>
        {testimonials.slice(index, index + 2).map((testimonial, idx) => (
          <Box key={idx} bg="white" p={5} borderRadius="md" shadow="md">
            <VStack align="start">
              <StarRatings />
              <Text textAlign={"left"}>"{testimonial.message}"</Text>
              <Grid
                h='100px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt={5}
              >
                {/* <Avatar name={testimonial.avatar} rowSpan={2} colSpan={1} width/> */}
                <Image
            src={studentImageOne}
            alt="student avatar Image"
            rowSpan={2} colSpan={1} 
            borderRadius="50%"
          />
                <Stack spacing={4} align={"center"} mt={".5rem"}>
                  <Box width={"100px"} textAlign={"left"}>
                    <Text fontWeight="bold">{testimonial.name}</Text>
                  </Box>
                  <Box width={"100px"} textAlign={"left"}>
                    <Text fontSize="sm" mt={"-1rem"}>{testimonial.role}</Text>
                  </Box>
                </Stack>
              </Grid>
            </VStack>
          </Box>
        ))
        }
      </Grid >

      {/* Navigation buttons */}
      < Box display="flex" justifyContent="center" mt={8} >
        <IconButton
          bg={"white"}
          boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}
          borderRadius={"50%"}
          height={"60px"}
          width={"60px"}
          aria-label="Previous testimonials"
          icon={<HiArrowLongLeft  fontSize={"30px"}/>}
          onClick={prevTestimonials}
          _hover={{
            backgroundColor: "#30b979"
          }}
          mr={5}
        />
        <IconButton
          bg={"white"}
          boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}
          borderRadius={"50%"}
          height={"60px"}
          width={"60px"}
          aria-label="Next testimonials"
          icon={<HiArrowLongRight fontSize={"30px"} />}
          onClick={nextTestimonials}
          _hover={{
            backgroundColor: "#30b979"
          }}
        />
      </Box >
    </Box >
  );
};

export default Testimonials;
