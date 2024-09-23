import { React, useState } from 'react';
import "../../comman/Styles/allStyles.css"
import { Box, Grid, GridItem, VStack, Heading, Text, Image, Flex, SimpleGrid,  } from '@chakra-ui/react';
import Button from '../../components/button/Button';
import Testimonials from '../testis/Testimonials';
import CustomMove from '../customMover/CustomMove';
import topHomeImage from "../../assets/programming-banner.webp"
import featureImageLeft from "../../assets/featrues-img-01.webp"
import featureImageCenter from "../../assets/featrues-img-02.webp"
import featureImageRight from "../../assets/featrues-img-03.webp"
import aboutImage from "../../assets/about-26.webp"
import courseImageLeft from "../../assets/course-img-1.jpg"
import courseImageCenter from "../../assets/course-img-2.jpg"
import courseImageRight from "../../assets/course-img-3.jpg"
import studentImageBottomOne from "../../assets/course-40-590x430.jpg"
import bgCurveBorder from "../../assets/programming-bg.svg"
import { HiCheck } from "react-icons/hi";
import { FiArrowRight } from 'react-icons/fi';
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaLaptopCode, FaUserGraduate, FaRegComments, FaRegCheckSquare } from "react-icons/fa";

import StarRatings from '../../comman/startRating/StarRatings';
import FaqSection from '../Faq\'s/FaqSection';



export default function HomePage() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  const [bgPosition, setBgPosition] = useState({
    mainBg: '32% 25%, 100% 65%, 90% 50%, 90% 25%, 40% 65%, 40% 100%, 92% 39%',
  });

  const [aboutBgPosition, setAboutBgPosition] = useState({
    aboutBg: '10% 1%, 1% 40%, 100% 100%',
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width;
    const yPos = (clientY - top) / height;

    const newPosition = `
      ${32 + xPos * 10}% ${25 + yPos * 10}%,
      100% 65%, 
      ${90 - xPos * 5}% ${50 + yPos * 10}%,
      ${90 - xPos * 7}% ${25 + yPos * 5}%,
      ${40 + xPos * 5}% ${65 + yPos * 10}%,
      ${40 + xPos * 5}% ${100 - yPos * 10}%,
      ${92 - xPos * 3}% ${39 + yPos * 5}%
    `;

    setBgPosition({ mainBg: newPosition });
  };

  const handleMouseMoveAbout = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width;
    const yPos = (clientY - top) / height;

    const newPosition = `
      ${10 + xPos * 5}% ${1 + yPos * 5}%,
      ${1 + xPos * 7}% ${40 + yPos * 7}%,
      ${100 - xPos * 10}% ${100 - yPos * 10}%
    `;

    setAboutBgPosition({ aboutBg: newPosition });
  };

  return (
    <Box  w="100%" overflowX="hidden">
      <Flex className='movingShape'
        mt={{ base: "5rem", md: "-5rem" }}
        direction={['column', 'row']} align="center"
        justify="space-between" p={8} onMouseMove={handleMouseMove}>
        <Box
          maxW={{ base: "100%", md: "500px" }}
          ml={{ base: "-1rem", md: "5rem" }}
          p={{ base: "1rem", md: "0" }}
        >
          <Heading
            as="h1"
            size="2xl"
            fontSize={{ base: "2rem", md: "3.5rem" }}
            mb={{ base: 4, md: 6 }}
            fontWeight="700">Build Your <Text as="span" color="red">Programming</Text> Skill with EdubLink
          </Heading>

          <Text
            mb={{ base: 4, md: 6 }} >
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
          </Text>

          <Button
            label="Find Courses"
            onClick={handleClick}
            icon={<FiArrowRight />}
          />
        </Box>


        <Box
          className="homeBackground-container-image"
          style={{ backgroundPosition: bgPosition.mainBg }}
          w="100%"
          h="auto"
          p={{ base: "1rem", md: "5rem" }}
        >
          <Image
            src={topHomeImage}
            alt="student avatar Image"
            visibility={{ base: "hidden", md: "visible" }}
            mt={{ base: "2rem", md: "15rem" }}
            ml={{ base: "-.7rem", md: "10rem" }}
            className='foreground-image'
            w={{ base: "100%", md: "auto" }}
            h={{ base: "auto", md: "auto" }}
          />
        </Box>

      </Flex>

      {/* Curved SVG */}
      <Box mt={{ base: "-4rem", md: "-17rem" }}>
       <Image src={bgCurveBorder} alt='bg_Curve_Border'
       height={{base:"20vh", md:"auto"}}
       width={{base:"auto", md:"auto"}}/>

        {/* Flex for Course Details and Instructors */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
          pt={10}
          mt={{ base: "-40rem", md: "-36rem" }}
          ml={{base:"2rem", md:0}}

        >
          {/* First Box: Online Courses */}
          <Flex
            direction="row"
            align="center"
            textAlign="left"
            mb={6}
            w={{ base: "100%", md: "auto" }}
            justifyContent={{ base: "flex-start", md: "flex-start" }}
          >
            <Box
              bg="white"
              borderRadius="50%"
              boxSize="80px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mr={4}
               boxShadow="0px 5px 15px rgba(0, 0, 0, 0.35)"
            >
              {/* Icon */}
              <FaLaptopCode size="40px" color="#6b46c1" />
            </Box>
            <Box>
              <Heading as="h3" size="md">
                3,020
              </Heading>
              <Text>Online Courses</Text>
            </Box>
          </Flex>

          {/* Second Box: Top Instructors */}

          <Flex
            direction="row"
            align="center"
            textAlign="left"
            mb={6}
            w={{ base: "100%", md: "auto" }}
            justifyContent={{ base: "flex-start", md: "flex-start" }}
          >
            <Box
              bg="white"
              borderRadius="50%"
              boxSize="80px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mr={4}
               boxShadow="0px 5px 15px rgba(0, 0, 0, 0.35)"
            >
              {/* Icon */}
              <FaUserGraduate size="40px" color="#e53e3e" />
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Top
              </Heading>
              <Text>Instructors</Text>
            </Box>
          </Flex>
          <Image
            src={topHomeImage}
            alt="student avatar Image"
            visibility={{ base: "visible", md: "hidden" }}
            mt={{ base: "-3.5rem", md: "15rem" }}
            ml={{ base: "-3rem", md: "10rem" }}
            className='foreground-image'
            w={{ base: "80%", md: "auto" }}
            h={{ base: "auto", md: "auto" }}
          />
        </Flex>
      </Box>
      {/* Features Section */}
      <VStack
        spacing={8}
        py={{ base: 8, md: 12 }} // Smaller padding for small screens, larger for medium and up
        px={{ base: 4, md: 8 }}  // Smaller padding for small screens
      >
        <Text color="red" mt={{ base: "4rem", md: "-21rem" }} fontSize={{ base: "1.25rem", md: "1.5rem" }} align="center">
          FEATURES
        </Text>

        <Heading
          as="h2"
          mt={{ base: 0, md: "-1rem" }} // Remove negative margin for small screens
          width={{ base: "90%", md: "75%", lg: "55%" }} // Adjust width for different screen sizes
          fontSize={{ base: "1.75rem", md: "2rem", lg: "2.5rem" }} // Responsive font sizes
          fontWeight="700"
          textAlign="center"
        >
          Emerging Technologies and Trends in Software Development
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }} // One column on small screens, 2 on medium, 3 on large
          spacing={{ base: 6, md: 10 }} // Reduced spacing for small screens
        >
          <Box p={6} className="featuresShadow" width="100%">
            <Heading as="h4" size="md" textAlign="center">
              Web Development
            </Heading>
            <Text mt={2} textAlign="center" fontSize={{ base: "0.875rem", md: "1rem" }}>
              Build websites and applications with modern tools.
            </Text>
            <Image src={featureImageLeft} alt="Web Dev" mb={4} mx="auto" /> {/* Centered image */}
          </Box>

          <Box p={6} className="featuresShadow" width="100%">
            <Heading as="h4" size="md" textAlign="center">
              Top Instructors
            </Heading>
            <Text mt={2} textAlign="center" fontSize={{ base: "0.875rem", md: "1rem" }}>
              Learn from the industry's best professionals.
            </Text>
            <Image src={featureImageCenter} alt="Instructors" mb={4} mx="auto" /> {/* Centered image */}
          </Box>

          <Box p={6} className="featuresShadow" width="100%">
            <Heading as="h4" size="md" textAlign="center">
              Online Certifications
            </Heading>
            <Text mt={2} textAlign="center" fontSize={{ base: "0.875rem", md: "1rem" }}>
              Get certified in various programming disciplines.
            </Text>
            <Image src={featureImageRight} alt="Certifications" mb={4} mx="auto" /> {/* Centered image */}
          </Box>
        </SimpleGrid>
      </VStack>

      {/* another one */}
      <VStack
        spacing={8}
        py="1rem"
        px={3}
        className="backgroundgradientOnly"
        width={{ base: "90%", md: "80%", lg: "55%" }} // Full width on small screens, reduced for larger screens
        mx={{ base: "auto", lg: "20rem" }} // Center horizontally, and custom margin on large screens
        my={{ base: "2rem", lg: "5rem" }} // Adjust vertical margin for small screens
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }} // Single column on small screens, 2 for medium, 3 for large
          spacing={10}
          className="backgroundImageOnly"
        >
          <Box>
            <Text fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white">
              Get In Touch:
            </Text>
            <Text fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white" fontWeight="bold">
              info@edublink
            </Text>
          </Box>

          <Box>
            <Text
              align="center"
              mt={{ base: "1.5rem", md: "3rem" }} // Reduce top margin for smaller screens
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight="bold"
              color="whitesmoke"
            >
              <strong>or</strong>
            </Text>
          </Box>

          <Box>
            <Text fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white">
              Call Us Via:
            </Text>
            <Text fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white" fontWeight="bold">
              +01 123 5641 231
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>

      {/* About Section */}
      <Flex
        direction={{ base: 'column', lg: 'row' }} // Column layout for small screens, row for large
        align="center"
        justify="space-between"
        py={12}
        px={8}
        onMouseMove={handleMouseMoveAbout}
      >
        {/* Conditional background image for larger screens */}
        <Box
          className="homeBackground-container-imageAbout"
          display={{ base: 'block', md: 'block' }} // Hide background image on small screens
          style={{ backgroundPosition: aboutBgPosition.aboutBg }}
        >
          <Image
            marginLeft={{ base: '0', lg: '12rem' }}
            mt={{ base: '2rem', lg: '10rem' }} // Adjust margin top for responsiveness
            src={aboutImage}
            alt="About Image"
            width={{ base: '100%', lg: '600px' }} // 100% width for small screens, fixed width for large
            height={{ base: 'auto', lg: '400px' }} // Auto height for small screens
            className='aboutImage'
          />
        </Box>

        <Box maxW="400px" textAlign="left" mt={{ base: '2rem', lg: '0' }}>
          <Text color="grey" fontWeight="500">ABOUT US</Text>
          <Heading as="h2" size="lg" fontSize={{ base: '2rem', lg: '2.5rem' }}>
            Leading the<br /> Way in Software Development
          </Heading>
          <Text mt={4}>
            A great platform to grow your skills with online learning. Start now to access our online courses and resources.
          </Text>
          <Text mt={4}>
            <strong><HiCheck style={{ color: "red" }} /></strong> Education award achieved
          </Text>
          <Text mb={6}>
            <strong><HiCheck style={{ color: "red" }} /></strong> Available online courses
          </Text>
          <Button onClick={handleClick} mt="1rem">
            Learn more
          </Button>
        </Box>
      </Flex>

      {/* Courses Section */}
      <VStack
        spacing={8}
        bg="#F0F4F5"
        mt={{ base: "4rem", md: "8rem" }}
        pb="6rem"
      >
        <Text
          fontWeight="bold"
          color="grey"
          mt={{ base: "2rem", md: "8rem" }}
          fontSize={{ base: "1rem", md: "1.25rem" }}
        >
          POPULAR COURSE
        </Text>

        <Heading
          as="h2"
          size="lg"
          mt="-1rem"
          fontSize={{ base: "1.75rem", md: "2.5rem" }}
          textAlign="center"
        >
          Pick A Course To Get Started
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 12, md: 10 }}
          pt={{ base: "4rem", md: "8rem" }}
          width="90%"
          mb={6}
        >
          {[courseImageLeft, courseImageRight, courseImageCenter].map((imageSrc, index) => (
            <Box
              key={index}
              p={6}
              shadow="md"
              borderWidth="1px"
              className="featuresShadow"
              width={{ base: "100%", md: "75%" }}
              ml={{ base: 0, md: "3rem" }}
              mb={{ base: "7rem", md: 0 }}

            >
              <Box
                maxW="400px"
                borderRadius="md"
                overflow="hidden"
                mt={{ base: "-7rem", md: "-7rem" }}
              >
                <Box
                  as="figure"
                  overflow="hidden"
                  _hover={{
                    transform: "scale(1.1)",
                    filter: "grayscale(40%)",
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={`Course Image ${index + 1}`}
                    mb={3}
                    borderRadius="md"
                    transition="transform 0.5s ease-in-out"
                    width="100%"
                  />
                </Box>
              </Box>
              <Text>Business</Text>
              <Heading as="h3" size="md" fontWeight="600" align="left">
                Advanced Java Programming with Eclipse
              </Heading>
              <Text mt={2}>Master Java with advanced concepts and applications.</Text>
              <Flex align="center" color="grey.600" gap={2}>
                <StarRatings />
                <Text>(4.0/3 Ratings)</Text>
              </Flex>
              <Text mt={2} color="red">35$</Text>
              <Flex align="center" color="grey.600" gap={2}>
                <MdOutlinePlayLesson color="#30b979" />
                <Text> 7 Lesson</Text>
                <Text>|</Text>
                <PiStudent color="#30b979" />
                <Text>663 students</Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        <Button
          label="Browse Course"
          onClick={handleClick}
          mb="2rem"
          colorScheme="teal"
          size={{ base: "sm", md: "md" }}  // Responsive button size
        >
          Browse Course
        </Button>
      </VStack>

      <FaqSection />

      <CustomMove />

      <Testimonials />

      {/* artical */}
      <Box className='articalBgImage'>
        {/* Ebook Download Section */}
        <Flex
          direction={{ base: 'column', md: 'row' }} // Column layout on small screens
          alignItems="center"
          justifyContent="space-between"
          mb={10}
          bg="gray.50"
          p={10}
          borderRadius="md"
          height={{ base: 'auto', md: '500px' }} // Auto height on small screens
          className='articalBgImage' // Background for large screens
        >
          {/* Image Section */}
          <Box
            width={{ base: '100%', md: '50%' }}
            className="articalBgAvatar" // Background for large screens
            display={{ base: 'block', md: 'block' }} // Hide background on small screens
            ml={{ base: "7.5rem", md: 0 }}

          >
            <Image
              src={featureImageLeft}
              alt="Ebook Illustration"
              boxSize={{ base: '200px', md: '300px' }} // Smaller size for small devices
              mb={{ base: 5, md: 0 }}
              mx="auto" // Center image on small devices
            />
          </Box>

          {/* Text and Button Section */}
          <Box
            textAlign={{ base: 'Left', md: 'left' }}
            ml={{ base: "5rem", md: 10 }}
            width={{ base: '100%', md: '50%' }} // Full width on small screens
            className='articalBgText'
          >
            <Heading
              as="h1"
              size="2xl"
              fontSize={{ base: '1.8rem', md: '2.5rem' }}
              fontWeight="700"
              mb={6}
            >
              Download Our <br /> Free{' '}
              <Text as="span" color="red">Programming Ebook</Text>{' '}
              <br /> From EduBlink
            </Heading>

            <Button
              label="Download ebooks now"
              onClick={handleClick}
              rightIcon={<FiArrowRight />}
            />
          </Box>
        </Flex>


        {/* Latest Articles Section */}
        <Text textAlign="center" fontWeight={"700"} color={"gray"} mt={{ base: '4rem', md: '8rem' }} mb={4}>LATEST ARTICLES</Text>
        <Heading mb={5} textAlign="center">Get News with EduBlink</Heading>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={6}
          p={{ base: '2rem', md: '8rem' }}
        >
          {/* Article 1 */}
          <GridItem bg="white" p={5} borderRadius="md" shadow="md">
            <Box
              maxW="400px"
              borderRadius="md"
              overflow="hidden"
              mx="auto"
            >
              <Box
                as='figure'
                overflow="hidden"
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <Image
                  src={courseImageRight}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition="transform 0.5s ease-in-out"
                  width="100%"
                />
              </Box>
            </Box>
            <Text fontSize="xs" color="gray.500" mb={2}>LEARNING</Text>
            <Heading as="h3" fontSize="lg" mb={3}>
              Voices from the Learning Education Hub
            </Heading>
            <Flex align="center" color="gray.600" gap={2}>
              <FaRegCheckSquare color='#30b979' />
              <Text>12 Nov, 2023</Text>
              <Text>|</Text>
              <FaRegComments color='#30b979' />
              <Text>0 Comments</Text>
            </Flex>
            <Text fontSize="sm" mt={2}>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </Text>
          </GridItem>

          {/* Article 2 */}
          <GridItem bg="white" p={5} borderRadius="md" shadow="md">
            <Box
              maxW="400px"
              borderRadius="md"
              overflow="hidden"
              mx="auto"
            >
              <Box
                as='figure'
                overflow="hidden"
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <Image
                  src={studentImageBottomOne}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition="transform 0.5s ease-in-out"
                  width="100%"
                />
              </Box>
            </Box>
            <Text fontSize="xs" color="gray.500" mb={2}>SCIENCE</Text>
            <Heading as="h3" fontSize="lg" mb={3}>
              Stories from the Educational Front at Classroom
            </Heading>
            <Flex align="center" color="gray.600" gap={2}>
              <FaRegCheckSquare color='#30b979' />
              <Text>12 Nov, 2023</Text>
              <Text>|</Text>
              <FaRegComments color='#30b979' />
              <Text>0 Comments</Text>
            </Flex>
            <Text fontSize="sm" mt={2}>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </Text>
          </GridItem>

          {/* Article 3 */}
          <GridItem bg="white" p={5} borderRadius="md" shadow="md">
            <Box
              maxW="400px"
              borderRadius="md"
              overflow="hidden"
              mx="auto"
            >
              <Box
                as='figure'
                overflow="hidden"
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <Image
                  src={courseImageCenter}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition="transform 0.5s ease-in-out"
                  width="100%"
                />
              </Box>
            </Box>
            <Text fontSize="xs" color="gray.500" mb={2}>LEARNING</Text>
            <Heading as="h3" fontSize="lg" mb={3}>
              Connecting the Dots in Education with Learning Nexus
            </Heading>
            <Flex align="center" color="gray.600" gap={2}>
              <FaRegCheckSquare color='#30b979' />
              <Text>12 Nov, 2023</Text>
              <Text>|</Text>
              <FaRegComments color='#30b979' />
              <Text>0 Comments</Text>
            </Flex>
            <Text fontSize="sm" mt={2}>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
 

  );
}
