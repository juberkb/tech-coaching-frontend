import { Box, Grid, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, useMediaQuery } from '@chakra-ui/react';
import "../../comman/Styles/allStyles.css"
const FaqSection = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={10}
      p={10}
      className={isSmallScreen ? '' : 'faqsBGImage'} // Apply background only for large screens
    >
      <Box p={10} ml={{ base: "0", md: "3rem" }}>
        <Text>FAQ&apos;s</Text>
        <Heading mb={5} fontWeight={"600"}>
          Learn Your Best Education
          <br /> Culture with Edublink
        </Heading>
        <Text mb={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.
        </Text>
        <Text color={"#30b979"} bg={"#F0F4F5"} width={"165px"} p={4} borderRadius={"10px"}>
          General Questions
        </Text>
        <Text ml={"1rem"} mt={4}>Community</Text>
        <Text ml={"1rem"} mt={2}>Support</Text>
      </Box>
      <Box p={10} mr={{ base: "0", md: "3rem" }}>
        <Accordion allowToggle>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              mt={index === 0 ? 0 : 10}
              border={"none"}
              boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left" p={3}>
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Grid>
  );
};

// FAQ data
const faqData = [
  { question: "How can I contact a school directly?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna." },
  { question: "How do I find a school where I want to study?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Where should I study abroad?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "How to find your missing course?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "How Long Do I get Support and updates?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

export default FaqSection;
