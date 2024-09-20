import React from 'react';
import "../../comman/Styles/allStyles.css"
import { Box, HStack, ChakraProvider, VStack, Heading, Text, Image, Flex, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Input, IconButton } from '@chakra-ui/react';
import Button from '../../components/button/Button';
import topHomeImage from "../../assets/programming-banner.webp"
import featureImageLeft from "../../assets/featrues-img-01.webp"
import featureImageCenter from "../../assets/featrues-img-02.webp"
import featureImageRight from "../../assets/featrues-img-03.webp"
import aboutImage from "../../assets/about-26.webp"
import courseImageLeft from "../../assets/course-img-1.jpg"
import courseImageCenter from "../../assets/course-img-2.jpg"
import courseImageRight from "../../assets/course-img-3.jpg"
import studentImageOne from "../../assets/testimonial-01.png"
import studentImageTwo from "../../assets/testimonial-02.png"
import { HiCheck } from "react-icons/hi";



export default function HomePage() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box>
      {/* Hero Section */}
      <Flex direction={['column', 'row']} align="center" justify="space-between" p={8} >
        <Box maxW="500px" ml={"5rem"} mt={"-3rem"}>
          <Heading as="h1" size="2xl" fontSize={"3.5rem"} fontWeight={"700"} className="homeBackground-container-imageSide">Build Your <Text as="span" color="red">Programming</Text> Skill with EdubLink</Heading>
          {/* <Button mt={6} colorScheme="teal">Find Courses</Button> */}
          <Button label="Find Courses" onClick={handleClick} mt={"1rem"} />
          {/* <Button label="Large Success Button" size="large" color="success" />
      <Button label="Danger Button" color="danger" disabled={true} />  */}
        </Box>
        <Box className="homeBackground-container-image">
          <Image
            src={topHomeImage}
            alt="student avatar Image"
            mt={"10rem"}
            ml={"10rem"}
            className='forground-image'
          />
        </Box>
      </Flex>

      {/* <ChakraProvider>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,138.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <Box p={5} minH="100vh">
        <VStack spacing={5}>
          <HStack spacing={10}>
            <Box>
              <Image src="your-logo-url" alt="Logo" boxSize="100px" />
            </Box>
            <Text fontSize="2xl" fontWeight="bold">Your Title Here</Text>
          </HStack>
          
          <HStack spacing={4}>
            <Button colorScheme="teal">Button 1</Button>
            <Button colorScheme="teal">Button 2</Button>
          </HStack>
          
          <Box>
            <Text fontSize="xl">Some content here...</Text>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider> */}

      {/* About Section */}
      <Flex direction={['column', 'row']} align="center" justify="space-between" py={12} px={8}>
        <Box className="homeBackground-container-imageAbout">
          <Image marginLeft={"12rem"} mt={"10rem"} src={aboutImage} alt="About Image" width={"600px"} height={"400px"} className='aboutImage' />
        </Box>
        <Box maxW="400px" textAlign="left">
          <Text color={"grey"} fontWeight={"500"}>ABOUT US</Text>
          <Heading as="h2" size="lg" fontSize={"2.5rem"}>Leading the<br /> Way in Software Development</Heading>
          <Text mt={4}>A great platform to grow your skills with online learning. Start now to access our online courses and resources.</Text>
          <Text><strong mt={"1rem"}><HiCheck style={{color:"red"}}/>   </strong>
            Education award achived</Text>
          <Text><strong><HiCheck style={{color:"red"}} /> </strong>Available online courses</Text>
          <Button label="Learn more" onClick={handleClick} mt={"1rem"} />
        </Box>
      </Flex>

      {/* Features Section */}
      <VStack spacing={8} py={12} px={8}>
        <Text color={"red"}>FEATURES</Text>
        <Heading as="h2" width={"55%"} fontSize={"2.5rem"} fontWeight={"700"} align={"center"} justify={"center"}>Emerging Technologies and Trends in Software Development</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box p={6} className='featuresShadow' width={"85%"}>
            <Heading as="h4" size="md" align={"center"}>Web Development</Heading>
            <Text mt={2} align={"center"}>Build websites and applications with modern tools.</Text>
            <Image src={featureImageLeft} alt="Web Dev" mb={4}  ml={"2.5rem"}/>

          </Box>
          <Box p={6} className='featuresShadow' width={"85%"}>
            <Heading as="h4" size="md" align={"center"}>Top Instructors</Heading>
            <Text mt={2} align={"center"}>Learn from the industry&apos;s best professionals.</Text>
            <Image src={featureImageCenter} alt="Instructors" mb={4} ml={"2.5rem"}/>
          </Box>
          <Box p={6} className='featuresShadow' width={"85%"}>
            <Heading as="h4" size="md" align={"center"}>Online Certifications</Heading>
            <Text mt={2} align={"center"}>Get certified in various programming disciplines.</Text>
            <Image src={featureImageRight} alt="Certifications" mb={4} ml={"2.5rem"}/>
          </Box>
        </SimpleGrid>
      </VStack>

      <VStack spacing={8} py={"1rem"} px={3} className='backgroundgradientOnly' width={"60%"} mx={"15rem"} my={"5rem"} >
        <SimpleGrid columns={[1, 2, 3]} spacing={10} className='backgroundImageOnly'>
          <Box>
            <Text fontSize={"1.5rem"} color={"white"}>Get In Touch:</Text>
          <Text fontSize={"1.5rem"} color={"white"} fontWeight={"bold"}>info@edublink</Text>
          </Box>
          <Box>         
            <Text align={"center"} mt={"3rem"}  fontSize={"2rem"} fontWeight={"bold"} color={"whitesmoke"} > <strong> or </strong></Text>
          </Box>
         <Box>
          <Text fontSize={"1.5rem"} color={"white"}> Call Us Via:</Text>
         <Text fontSize={"1.5rem"} color={"white"} fontWeight={"bold"}>+01 123 5641 231</Text></Box>
        </SimpleGrid>
      </VStack>

      {/* Courses Section */}
      <VStack spacing={8}  ml={"2rem"}>
        <Text fontWeight={"bold"} color={"grey"}>POPULAR COURSE</Text>
        <Heading as="h2" size="lg" mt={"-1rem"} fontSize={"2.5rem"}>Pick A Course To Get Started</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} pt={"10rem"}>
          <Box p={6} shadow="md" borderWidth="1px" className='featuresShadow' width={"85%"}>
            <Image src={courseImageLeft} alt="courseImage" mb={4} width={"270px"} height={"200px"}  mt={"-6rem"} ml={"2rem"}/>
            <Heading as="h3" size="md" fontWeight={"600"} ml={"1rem"} align={"left"}>The Complete Python Bootcamp From Zero to Hero</Heading>
            <Text mt={2}>A comprehensive course for front-end Cdevelopers.</Text>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px" className='featuresShadow' width={"85%"}>
            <Image src={courseImageRight} alt="courseImage" mb={4}width={"270px"} height={"200px"}   mt={"-6rem"} ml={"2rem"}/>
            <Heading as="h3" size="md" fontWeight={"600"}  align={"center"}>Advanced Java Programming with Eclipse</Heading>
            <Text mt={2}>Master Java with advanced concepts and applications.</Text>
          </Box>
          <Box p={6} shadow="md" borderWidth="1px" className='featuresShadow' width={"85%"}>
            <Image src={courseImageCenter} alt="courseImage" mb={4} width={"270px"} height={"200px"}  mt={"-6rem"} ml={"2rem"}/>
            <Heading as="h3" size="md" fontWeight={"600"} ml={"1rem"} align={"left"}>Getting Started With PHP And MySQL For Beginners</Heading>
            <Text mt={2}>Learn Python & PHP for back-end web development.</Text>
          </Box>
        </SimpleGrid>
        <Button label="Brouse Course" onClick={handleClick} mt={"2rem"} />

      </VStack>

      {/* FAQ Section */}
      <Flex direction={['column', 'row']} align="center" justify="space-between" py={12} px={8}>
        <Box maxW="500px" ml={"5rem"} mt={"3rem"}>
          <Text color={"grey"}>FAQ&apos;s</Text>
          <Heading as="h1" fontSize={"2.5rem"} fontWeight={"700"}>Learn Your Best Education Culture with Edublink</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt labore dolore magna.
          </Text>
          <Text>General Questions</Text>
          <Text>Community</Text>
          <Text>Support</Text>
        </Box>

        <Box maxW="500px" textAlign="left" mr={"5rem"}>
          <Accordion allowToggle>
            <AccordionItem >
              <h2>
                <AccordionButton>
                  <Text as='span' flex='1' textAlign='left' border={"none"}>Section 1 title</Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>


      {/* <VStack spacing={8} py={12} px={8}>
        <Flex width={"50%"}>
        <Heading as="h2" size="lg">FAQ </Heading>
        </Flex>
      
      </VStack> */}

      {/* Testimonial Section */}
      <VStack spacing={8} py={12} px={8}>
        <Text color={"grey"}>TESTIMONIALS</Text>
        <Heading as="h2" size="lg" mt={"-1rem"} width={"30%"} fontSize={"2.5rem"} align={"center"}>What Our Students Have To Say</Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={10} >


          <Box  className='featuresShadow' width={"100%"} ml={"10rem"} px={"3rem"} py={"4rem"}>
            <Text>“Edublink helped me develop skills that are invaluable in my career!”</Text>
            <Box p={6} shadow="md" borderWidth="1px" display={"flex"}>
              <Flex>
                <Image src={courseImageLeft} alt="courseImage" mb={4} width={"60px"} height={"60px"} borderRadius={"50%"} />
              </Flex>
              <Flex>
                <Text mt={4}>- David Owen, Student</Text>

              </Flex>
            </Box>
          </Box>

          <Box  className='featuresShadow' width={"100%"} ml={"20rem"} px={"3rem"} py={"4rem"}>
            <Text>“Edublink helped me develop skills that are invaluable in my career!”</Text>
            <Box p={6} shadow="md" borderWidth="1px" display={"flex"}>
              <Flex>
                <Image src={studentImageOne} alt="courseImage" mb={4} width={"60px"} height={"60px"} borderRadius={"50%"} />
              </Flex>
              <Flex>
                <Text mt={4}>- David Owen, Student</Text>

              </Flex>
            </Box>
          </Box>

        </SimpleGrid>
      </VStack>

      {/* Newsletter Section */}
      <VStack spacing={8} py={12} px={8} bg="gray.100">
        <Text color={"grey"}>LATEST ARTICLES</Text>
        <Heading as="h2" size="lg">Get News with Edublink</Heading>
      
      </VStack>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={6} textAlign="center">
        <Text>© 2024 EdubLink. All rights reserved.</Text>
      </Box>
    </Box>
  );
}
