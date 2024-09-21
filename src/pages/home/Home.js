import { React, useState } from 'react';
import "../../comman/Styles/allStyles.css"
import { Box, Grid, GridItem, Avatar, HStack, ChakraProvider, VStack, Heading, Text, Image, Flex, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Input, IconButton } from '@chakra-ui/react';
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
import { HiCheck } from "react-icons/hi";
import { FiArrowRight } from 'react-icons/fi';
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaLaptopCode, FaUserGraduate, FaRegComments, FaRegCheckSquare } from "react-icons/fa";

import StarRatings from '../../comman/startRating/StarRatings';



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
    <Box>
      <Flex direction={['column', 'row']} align="center" justify="space-between" p={8} onMouseMove={handleMouseMove}>
        <Box maxW="500px" ml={"5rem"} mt={"-5rem"}>
          <Heading as="h1" size="2xl" fontSize={"3.5rem"} fontWeight={"700"} className='movingShape'>
            Build Your <Text as="span" color="red">Programming</Text> Skill with EdubLink
          </Heading>
          <Text>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</Text>
          <Button
            label="Find Courses"
            onClick={handleClick}
            icon={<FiArrowRight />} // Pass the right arrow icon as prop
            mt={"1rem"}
          />
        </Box>

        <Box className="homeBackground-container-image" style={{ backgroundPosition: bgPosition.mainBg }}>
          <Image
            src={topHomeImage}
            alt="student avatar Image"
            mt={"10rem"}
            ml={"10rem"}
            className='foreground-image'
          />
        </Box>
      </Flex>

      <Box mt={"-17rem"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,138.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

        <Flex direction={["column", "row"]} justify="space-around" align="center" pt={10} mt={"-9rem"}>
          <Flex direction="row" align="center" textAlign="left" mb={6}>
            <Box
              bg="white"
              borderRadius="50%"
              boxSize="80px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mr={4}
            >
              {/* Icon from react-icons */}
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
          <Flex direction="row" align="center" textAlign="left" mb={6} mr={"40rem"}>
            <Box
              bg="white"
              borderRadius="50%"
              boxSize="80px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              ml={4}
            >
              {/* Another Icon from react-icons */}
              <FaUserGraduate size="40px" color="#e53e3e" />
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Top
              </Heading>
              <Text>Instructors</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* Features Section */}
      <VStack spacing={8} py={12} px={8}>
        <Text color={"red"} mt={"9rem"}>FEATURES</Text>
        <Heading as="h2" mt={"-1rem"} width={"55%"} fontSize={"2.5rem"} fontWeight={"700"} align={"center"} justify={"center"}>Emerging Technologies and Trends in Software Development</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box p={6} className='featuresShadow' width={"85%"}>
            <Heading as="h4" size="md" align={"center"}>Web Development</Heading>
            <Text mt={2} align={"center"}>Build websites and applications with modern tools.</Text>
            <Image src={featureImageLeft} alt="Web Dev" mb={4} ml={"2.5rem"} />

          </Box>
          <Box p={6} className='featuresShadow' width={"85%"}>
            <Heading as="h4" size="md" align={"center"}>Top Instructors</Heading>
            <Text mt={2} align={"center"}>Learn from the industry&apos;s best professionals.</Text>
            <Image src={featureImageCenter} alt="Instructors" mb={4} ml={"2.5rem"} />
          </Box>
          <Box p={6} className='featuresShadow' width={"85%"}>
            <Heading as="h4" size="md" align={"center"}>Online Certifications</Heading>
            <Text mt={2} align={"center"}>Get certified in various programming disciplines.</Text>
            <Image src={featureImageRight} alt="Certifications" mb={4} ml={"2.5rem"} />
          </Box>
        </SimpleGrid>
      </VStack>

      {/* another one */}
      <VStack spacing={8} py={"1rem"} px={"3"} className='backgroundgradientOnly' width={"55%"} mx={"20rem"} my={"5rem"} >
        <SimpleGrid columns={[1, 2, 3]} spacing={10} className='backgroundImageOnly'>
          <Box>
            <Text fontSize={"1.5rem"} color={"white"}>Get In Touch:</Text>
            <Text fontSize={"1.5rem"} color={"white"} fontWeight={"bold"}>info@edublink</Text>
          </Box>
          <Box>
            <Text align={"center"} mt={"3rem"} fontSize={"2rem"} fontWeight={"bold"} color={"whitesmoke"} > <strong> or </strong></Text>
          </Box>
          <Box>
            <Text fontSize={"1.5rem"} color={"white"}> Call Us Via:</Text>
            <Text fontSize={"1.5rem"} color={"white"} fontWeight={"bold"}>+01 123 5641 231</Text></Box>
        </SimpleGrid>
      </VStack>

      {/* About Section */}
      <Flex direction={['column', 'row']} align="center" justify="space-between" py={12} px={8} onMouseMove={handleMouseMoveAbout}>
        <Box className="homeBackground-container-imageAbout" style={{ backgroundPosition: aboutBgPosition.aboutBg }}>
          <Image marginLeft={"12rem"} mt={"10rem"} src={aboutImage} alt="About Image" width={"600px"} height={"400px"} className='aboutImage' />
        </Box>
        <Box maxW="400px" textAlign="left">
          <Text color={"grey"} fontWeight={"500"}>ABOUT US</Text>
          <Heading as="h2" size="lg" fontSize={"2.5rem"}>Leading the<br /> Way in Software Development</Heading>
          <Text mt={4}>A great platform to grow your skills with online learning. Start now to access our online courses and resources.</Text>
          <Text><strong mt={"1rem"}><HiCheck style={{ color: "red" }} /></strong> Education award achieved</Text>
          <Text><strong><HiCheck style={{ color: "red" }} /></strong> Available online courses</Text>
          <Button label="Learn more" onClick={handleClick} mt={"1rem"} />
        </Box>
      </Flex>

      {/* Courses Section */}
      <VStack spacing={8} bg={"#F0F4F5"} mt={"8rem"} pb={"6rem"}>
        <Text fontWeight={"bold"} color={"grey"} mt={"8rem"}>POPULAR COURSE</Text>
        <Heading as="h2" size="lg" mt={"-1rem"} fontSize={"2.5rem"}>Pick A Course To Get Started</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} pt={"8rem"} width={"90%"}>
          <Box p={6} shadow="md" borderWidth="1px" className='featuresShadow' width={"75%"} ml={"3rem"}>
            <Box maxW={"400px"}
              borderRadius="md"
              overflow={"hidden"}
              m={"auto"}
              mt={"-7rem"}>
              <Box as='figure' overflow={"hidden"}
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}>
                <Image
                  src={courseImageLeft}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition={"transform 0.5s ease-in-out"}
                  width={"100%"}
                />
              </Box>
            </Box>
            <Text>Business</Text>
            <Heading as="h3" size="md" fontWeight={"600"} align={"left"}>Advanced Java Programming with Eclipse</Heading>
            <Text mt={2}>Master Java with advanced concepts and applications.</Text>
            <Flex align={"center"} color={"grey.600"} gap={2}>
              <StarRatings />
              <Text>(4.0/3 Ratings)</Text>
            </Flex>
            <Text mt={2} color={"red"}>35$</Text>
            <Flex align={"center"} color={"grey.600"} gap={2}>
              <MdOutlinePlayLesson color='#30b979' />
              <Text> 7 Lesson</Text>
              <Text>|</Text>
              <PiStudent color='#30b979' />
              <Text>663 students</Text>
            </Flex>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px" className='featuresShadow' width={"75%"} ml={"3rem"}>
            <Box maxW={"400px"}
              borderRadius="md"
              overflow={"hidden"}
              m={"auto"}
              mt={"-7rem"}>
              <Box as='figure' overflow={"hidden"}
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}>
                <Image
                  src={courseImageRight}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition={"transform 0.5s ease-in-out"}
                  width={"100%"}
                />
              </Box>
            </Box>
            <Text>Business</Text>
            <Heading as="h3" size="md" fontWeight={"600"} align={"left"}>Advanced Java Programming with Eclipse</Heading>
            <Text mt={2}>Master Java with advanced concepts and applications.</Text>
            <Flex align={"center"} color={"grey.600"} gap={2}>
              <StarRatings />
              <Text>(4.0/3 Ratings)</Text>
            </Flex>
            <Text mt={2} color={"red"}>35$</Text>
            <Flex align={"center"} color={"grey.600"} gap={2}>
              <MdOutlinePlayLesson color='#30b979' />
              <Text> 7 Lesson</Text>
              <Text>|</Text>
              <PiStudent color='#30b979' />
              <Text>663 students</Text>
            </Flex>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px" className='featuresShadow' width={"75%"} ml={"3rem"}>
            <Box maxW={"400px"}
              borderRadius="md"
              overflow={"hidden"}
              m={"auto"}
              mt={"-7rem"}>
              <Box as='figure' overflow={"hidden"}
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}>
                <Image
                  src={courseImageCenter}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition={"transform 0.5s ease-in-out"}
                  width={"100%"}
                />
              </Box>
            </Box>
            <Text>Business</Text>
            <Heading as="h3" size="md" fontWeight={"600"} align={"left"}>Advanced Java Programming with Eclipse</Heading>
            <Text mt={2}>Master Java with advanced concepts and applications.</Text>
            <Flex align={"center"} color={"grey.600"} gap={2}>
              <StarRatings />
              <Text>(4.0/3 Ratings)</Text>
            </Flex>
            <Text mt={2} color={"red"}>35$</Text>
            <Flex align={"center"} color={"grey.600"} gap={2}>
              <MdOutlinePlayLesson color='#30b979' />
              <Text> 7 Lesson</Text>
              <Text>|</Text>
              <PiStudent color='#30b979' />
              <Text>663 students</Text>
            </Flex>
          </Box>
        </SimpleGrid>
        <Button label="Brouse Course" onClick={handleClick} mb={"2rem"} />
      </VStack>

      {/* FAQ Section */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10} p={10} className='faqsBGImage'>
        <Box p={10} ml={"3rem"}>
          <Text>FAQ&apos;s</Text>
          <Heading mb={5} fontWeight={"600"}>Learn Your Best Education<br /> Culture with Edublink</Heading>
          <Text mb={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.
          </Text>
          <Text color={"#30b979"} bg={"#F0F4F5"} width={"165px"} p={4} borderRadius={"10px"}>General Questions</Text><br />
          <Text ml={"1rem"}>Community</Text><br />
          <Text ml={"1rem"}>Support</Text>
        </Box>
        <Box p={10} mr={"3rem"}>
          <Accordion allowToggle>
            <AccordionItem border={"none"} boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}>
              <AccordionButton>
                <Box flex="1" textAlign="left" p={3}>How can I contact a school directly?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt={10} border={"none"} boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}>
              <AccordionButton>
                <Box flex="1" textAlign="left" p={3}>How do I find a school where I want to study?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt={10} border={"none"} boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}>
              <AccordionButton>
                <Box flex="1" textAlign="left" p={3}>Where should I study abroad?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt={10} border={"none"} boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}>
              <AccordionButton>
                <Box flex="1" textAlign="left" p={3}>How to find your misiing course?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt={10} border={"none"} boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}>
              <AccordionButton>
                <Box flex="1" textAlign="left" p={3}>How Long Do I get Support and updates ?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Grid>
      <CustomMove />
      <Testimonials />
{/* artical */}
      <Box className='articalBgImage' p={"8rem"}>
        {/* Ebook Download Section */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          mb={10}
          bg="gray.50"
          p={10}
          borderRadius="md"
          height={"500px"}
        >
          {/* Image */}
          <Box width={"50%"} className='articalBgAvatar'>
            <Image
              src={featureImageLeft}
              alt="Ebook Illustration"
              boxSize="300px"
              ml={"5rem"}
            // mb={{ base: 5, md: 0 }}
            />
          </Box>
          {/* Text and Button */}
          <Box textAlign={{ base: 'center', md: 'left' }} ml={{ md: 10 }} width={"50%"} className='articalBgText'>
            <Heading as="h1" size="2xl" fontSize={"2.5rem"} fontWeight={"700"} mb={5}>
              Download Our <br /> Free <Text as="span" color="red">Programming Ebook</Text> <br />Ebook From EduBlink
            </Heading>
            <Button colorScheme="teal" size="lg">
              Download ebook now ➜
            </Button>
          </Box>
        </Flex>

        {/* Latest Articles Section */}
        <Text textAlign="center" mt={"8rem"} mb={4}>LATEST ARTICLES</Text>
        <Heading mb={5} textAlign="center">Get News with EduBlink</Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} >
          {/* Article 1 */}
          <GridItem bg="white" p={5} borderRadius="md" shadow="md">
            <Box maxW={"400px"}
              borderRadius="md"
              overflow={"hidden"}
              m={"auto"}>
              <Box as='figure' overflow={"hidden"}
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}>
                <Image
                  src={courseImageRight}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition={"transform 0.5s ease-in-out"}
                  width={"100%"}
                />
              </Box>
            </Box>
            <Text fontSize="xs" color="gray.500" mb={2}>LEARNING</Text>
            <Heading as="h3" fontSize="lg" mb={3}>
              Voices from the Learning Education Hub
            </Heading>
            <Flex align={"center"} color={"grey.600"} gap={2}>
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
            <Box maxW={"400px"}
              borderRadius="md"
              overflow={"hidden"}
              m={"auto"}>
              <Box as='figure' overflow={"hidden"}
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}>
                <Image
                  src={studentImageBottomOne}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition={"transform 0.5s ease-in-out"}
                  width={"100%"}
                />
              </Box>
            </Box>
            <Text fontSize="xs" color="gray.500" mb={2}>SCIENCE</Text>
            <Heading as="h3" fontSize="lg" mb={3}>
              Stories from the Educational Front at Classroom
            </Heading>
            <Flex align={"center"} color={"grey.600"} gap={2}>
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
          <GridItem bg="white" p={5} borderRadius="md" shadow="md" >
            <Box maxW={"400px"}
              overflow={"hidden"}
              borderRadius="md"
              m={"auto"}>
              <Box as='figure' overflow={"hidden"}
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(40%)",
                  transition: "transform 0.5s ease-in-out",
                }}>
                <Image
                  src={courseImageCenter}
                  alt="Article Image"
                  mb={3}
                  borderRadius="md"
                  transition={"transform 0.5s ease-in-out"}
                  width={"100%"}
                />
              </Box>
            </Box>
            <Text fontSize="xs" color="gray.500" mb={2}>LEARNING</Text>
            <Heading as="h3" fontSize="lg" mb={3}>
              Connecting the Dots in Education with Learning Nexus
            </Heading>
            <Flex align={"center"} color={"grey.600"} gap={2}>
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
