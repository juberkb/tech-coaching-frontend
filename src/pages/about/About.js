import React from "react";
import "../../comman/Styles/allStyles.css"
import { Box, Heading, Text, Flex, Image, VStack, Stack, Icon, SimpleGrid, HStack, } from "@chakra-ui/react";
import { FaBook, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import aboupageMainImage from "../../assets/edublink-breadcrumb-bg.webp"
import teamOneImage from "../../assets/team-01.webp"
import teamtwoImage from "../../assets/team-02.webp"
import teamThreeImage from "../../assets/team-03.webp"

import { GiCheckMark } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FiArrowRight } from 'react-icons/fi';

import Button from '../../components/button/Button';
import aboutImage from "../../assets/about-26.webp"
import aboutImage2 from "../../assets/about-11.webp"
import aboutImage3 from "../../assets/about-12.webp"
import CustomMove from "../customMover/CustomMove";

import tearcherImage1 from "../../assets/team-01.webp"
import tearcherImage2 from "../../assets/team-02.webp"
import tearcherImage3 from "../../assets/team-03.webp"
import TestimonialGrid from "../../components/testiCard/TestimonialCard";


const AboutPage = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };
    const features = [
        { icon: FaBook, title: "High-Quality Courses", text: "a long established fact that a reader will be distracted by the readable content of a page when looking at its layout" },
        { icon: FaClock, title: "Lifetime Access", text: "a long established fact that a reader will be distracted by the readable content of a page" },
        { icon: FaChalkboardTeacher, title: "Expert Instructors", text: "a long established fact that a reader will be distracted" },
    ];

    const stats = [
        { label: "Students Enrolled", value: "29.3K", icon: PiStudent },
        { label: "Classes Completed", value: "32.4K", icon: FaChalkboardTeacher },
        { label: "Satisfaction Rate", value: "100%", icon: BiLike },
        { label: "Top Instructors", value: "354+", icon: BsPersonBoundingBox },
    ];

    const testimonials = [
        { name: "Bob Lawrence", feedback: "Amazing platform!" },
        { name: "Tom Hurley", feedback: "Loved the content!" },
        { name: "Sara Williams", feedback: "Great instructors!" },
    ];

    return (
        <Box>
            {/* Header Section */}
            <Box pt={{ base: "-2rem", md: "5.5rem" }} position="relative" >
                <Image
                    filter="brightness(30%)"
                    src={aboupageMainImage}
                    alt='bg_Curve_Border'
                    height={{ base: "20vh", md: "80vh" }}
                    width={{ base: "auto", md: "100vw" }}
                />
                <Text
                    width={"60%"}
                    as="h1"
                    color={"white"}
                    fontSize="3.5rem"
                    mx={4}
                    position="absolute"
                    left="50%"
                    top="50%"
                    transform="translate(-50%, -50%)"
                    fontWeight={"650"}
                    textAlign="center"
                    mt={{ base: "", md: "1rem" }}
                >
                    A Large Range of Course Learning Paths
                </Text>
                <Text
                    as="h5"
                    color={"white"}
                    fontSize="1rem"
                    mx={4}
                    position="absolute"
                    left="50%"
                    top="50%"
                    transform="translate(-50%, -50%)"
                    fontWeight={"700"}
                    textAlign="center"
                    mt={{ base: "", md: "7rem" }}
                >Home &gt; About-Us</Text>
            </Box>

            {/* About Section */}
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                align="center"
                justify="space-between"
                py={12}
                px={8}
                mb={{ base: "", lg: "10rem" }}
            // onMouseMove={handleMouseMoveAbout}
            >
                <Box maxW="400px" textAlign="left"
                    ml={{ base: '0', lg: '3rem' }}
                    mt={{ base: '2rem', lg: '' }}>
                    <Text color="grey" fontWeight="500" mt={".5rem"}>ABOUT US</Text>
                    <Heading as="h2" size="lg" fontSize={{ base: '2rem', lg: '2.5rem' }}>
                        We Providing The <br /> <span style={{ color: "#EE4A62" }}>Best Quality</span> Online Courses.
                    </Heading>
                    <Text mt={4}>
                        A great platform to grow your skills with online learning. Start now to access our online courses and resources.
                    </Text>
                    <Flex align={"center"} mt={4}>
                        <strong>
                            <GiCheckMark style={{ color: "#f8b81f", fontSize: "1.3rem" }} />
                        </strong>
                        <Text ml={2}>Flexible Classes</Text>
                    </Flex>
                    <Flex align={"center"} mt={4}>
                        <strong>
                            <GiCheckMark style={{ color: "#f8b81f", fontSize: "1.3rem" }} />
                        </strong>
                        <Text ml={2}>Offline Classe Mode</Text>
                    </Flex>
                    <Flex align={"center"} mt={4} fontWeight={"600"}>
                        <strong>
                            <GiCheckMark style={{ color: "#f8b81f", fontSize: "1.3rem" }} />
                        </strong>
                        <Text ml={2}>Educator Support</Text>
                    </Flex>

                </Box>

                <Box
                    mb={{ base: "", lg: "10rem" }}
                    // className="homeBackground-container-imageAbout"
                    display={{ base: 'block', md: 'block' }}
                //   style={{ backgroundPosition: aboutBgPosition.aboutBg }}
                >
                    <Image
                        marginRight={{ base: '0', lg: '10rem' }}
                        marginLeft={{ base: '0', lg: '12rem' }}
                        mt={{ base: '2rem', lg: '10rem' }}
                        src={aboutImage2}
                        alt="About Image"
                        borderRadius={"15px"}
                        width={{ base: '100%', lg: '500px' }}
                        height={{ base: 'auto', lg: '400px' }}
                        className='aboutPageImage'
                    />
                    <Image
                        marginLeft={{ base: '0', lg: '34rem' }}
                        mt={{ base: '2rem', lg: '-30rem' }}
                        src={aboutImage3}
                        alt="About Image"
                        borderRadius={"15px"}
                        width={{ base: '100%', lg: '230px' }}
                        height={{ base: 'auto', lg: '270px' }}
                        className='aboutPageImage'
                    />
                </Box>


            </Flex>
            <CustomMove />
            {/* Features Section */}
            <Box p={"6rem"} textAlign="center"
                mt={{ base: "", lg: "10rem" }}>
                <Text>Who Choose Us</Text>
                <Heading as="h2" fontSize="2.4rem" width={"40%"} align={"center"} ml={{ base: "", md: "21rem" }} mb={{ base: "", md: "5rem" }}>
                    The Best <span style={{ color: "#EE4A62" }}>Beneficial</span> Side of EduBlink
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={6}>
                    {features.map((feature, index) => (
                        <Box key={index} p={10} shadow="md" borderWidth="1px" borderRadius="md" width={"100%"} height={"60vh"}>
                            <Box ml={"5.5rem"} w={"6rem"} h={"6rem"} mt={5} bg={"lightgreen"} borderRadius={"50%"} className="aboutPageFeatures">
                                <Icon as={feature.icon} color="blue.500" h={"3rem"} w={"3rem"} m={6} />
                            </Box>
                            <Text mt={4}>{feature.title}</Text>
                            <Text mt={4} align={"center"} >{feature.text}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>

            <Flex
                direction={{ base: 'column', lg: 'row' }}
                align="center"
                justify="space-between"
                py={12}
                px={8}
                mb={{ base: "", lg: "0rem" }}
            >
                <Box maxW="400px" textAlign="left"
                    ml={{ base: '0', lg: '3rem' }}
                    mt={{ base: '2rem', lg: '' }}>
                    <Text color="grey" fontWeight="500" mt={".5rem"}>TESTIMONIALS</Text>
                    <Heading as="h2" size="lg" fontSize={{ base: '2rem', lg: '2.5rem' }}>
                        What Our Students Have To Say  </Heading>
                    <Text mt={4}   mb={"2rem"}>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.
                    </Text>
                    <Button
                  
                        label="View All"
                        onClick={handleClick}
                        icon={<FiArrowRight />}
                    />
                </Box>

                <Box py={10} textAlign="center" >
                <TestimonialGrid maxW="800px"/>
            </Box>


            </Flex>

            {/* Stats Section */}
            <Box p={"6rem"} textAlign="center"
                mt={{ base: "", lg: "0rem" }}>
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mt={6}>
                    {stats.map((Stats, index) => (
                        <Box key={index} shadow="md" borderWidth="1px" borderRadius="md" width={"100%"} height={"35vh"}>
                            <Box ml={"5.5rem"} w={"5rem"} h={"5rem"} mt={5} bg={"lightgreen"} borderRadius={"50%"} className="aboutPageFeatures">
                                <Icon as={Stats.icon} color="blue.500" h={"3rem"} w={"3rem"} m={3} />
                            </Box>
                            <Text mt={2} align={"center"} fontWeight={"650"} fontSize={"2.5rem"}>{Stats.value}</Text>
                            <Text>{Stats.label}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
            {/* intructore section */}
            <VStack
                spacing={8}
                bg="F8F9FA"
                mt={{ base: "4rem", md: "0rem" }}
                pb="6rem"
            >
                <Text
                    fontWeight="bold"
                    color="grey"
                    mt={{ base: "2rem", md: "8rem" }}
                    fontSize={{ base: "1rem", md: "1.25rem" }}
                >
                    INSTRUCTOR
                </Text>

                <Heading
                    as="h3"
                    size="lg"
                    mt="-1rem"
                    fontSize={{ base: "1.75rem", md: "2.7rem" }}
                    textAlign="center"
                    fontWeight={"640"}
                >
                    Course Instructor
                </Heading>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 12, md: 3 }}
                    pt={{ base: "4rem", md: "8rem" }}
                    width="90%"
                    mb={6}
                >
                    {[tearcherImage1, tearcherImage2, tearcherImage3].map((imageSrc, index) => (
                        <Box
                            key={index}
                            p={6}
                            shadow="md"
                            borderWidth="1px"
                            className="featuresShadowAbouPage"
                            width={{ base: "100%", md: "88%" }}
                            ml={{ base: 0, md: "3rem" }}
                            mb={{ base: "7rem", md: 0 }}

                        >
                            <Box
                                w="300px"
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

                            <Heading as="h3" size="md" fontWeight="600" align="left">
                                Name
                            </Heading>
                            <Text>Business</Text>
                            <Text mt={2}>Master Java with advanced concepts and applications.</Text>

                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>
        </Box>
    );
};

export default AboutPage;