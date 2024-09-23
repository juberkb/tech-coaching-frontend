<Box className='articalBgImage'>
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
    <Heading as="h1" size="2xl" fontSize={"2.5rem"} fontWeight={"700"} mb={12}>
      Download Our <br /> Free <Text as="span" color="red">Programming Ebook</Text> <br />Ebook From EduBlink
    </Heading>
    <Button
      label="Download ebooks now"
      onClick={handleClick}
      icon={<FiArrowRight />}

    />
  </Box>
</Flex>

{/* Latest Articles Section */}
<Text textAlign="center" mt={"8rem"} mb={4}>LATEST ARTICLES</Text>
<Heading mb={5} textAlign="center">Get News with EduBlink</Heading>
<Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} p={"8rem"}>
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