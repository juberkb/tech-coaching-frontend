import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Flex, Link, Input, VStack, HStack, Textarea, Icon } from "@chakra-ui/react";
import Button from '../../components/button/Button';
import { FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import axios from 'axios'; // Import axios for making HTTP requests

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState(''); // Add address state if needed
  const [bgPosition, setBgPosition] = useState('10% 100%, 100% 0%, 93% 40%');

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleMouseMoveCommon = (e) => {
    
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width;
    const yPos = (clientY - top) / height;

    const newPosition = `
      ${10 - xPos * 5}% ${100 + yPos * 10}%,
      ${100 + xPos * 5}% ${0 + yPos * 10}%,
      ${93 - xPos * 3}% ${40 + yPos * 5}%
    `;

    setBgPosition({ mainBg: newPosition });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare the data to be sent
    const inquiryData = {
      fullName,
      emailAddress,
      mobileNo,
      address, // Include address if you want to send it
      message,
    };

    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/inquiries', inquiryData);
      alert('Inquiry submitted successfully!'); // Success message
      // Reset form fields
      setFullName('');
      setEmailAddress('');
      setMobileNo('');
      setMessage('');
      setAddress('');
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('There was an error submitting your inquiry. Please try again later.');
    }
  };

  return (
    <Box>
      <Box className="CommonBgImage" py={"6rem"} mt={"6rem"} h={"45vh"} onMouseMove={handleMouseMoveCommon}>
        <Text fontSize="3rem" fontWeight="bold" textAlign="center">Contact Us</Text>
        <Text textAlign="center">Home &gt; Contact Us</Text>
      </Box>

      <Flex direction={["column", "row"]} p={"6rem"} justifyContent="space-between">
        <VStack align="start" w={["100%", "30%"]}>
          <Text fontSize="2rem" fontWeight="bold">We're Always Eager to Hear From You!</Text>
          <Text mt={6}>Address</Text>
          <Text>Studio 76d, Riley Ford, North Michael Chester, CF90 8QQ</Text>
          <Text mt={6}>Email: </Text>
          <Text>edublink@example.com</Text>
          <Text mt={6}>Phone: </Text>
          <Text>(+091) 413 554 8598</Text>
          <HStack mt={6} spacing={4}>
              <Link href="#"><Icon as={FaFacebook} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaLinkedin} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaInstagram} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaTwitter} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaYoutube} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
          </HStack>
        </VStack>

        <Box w={["100%", "55%"]} h={["100%", "90vh"]} bg="white" p={"2rem"} boxShadow="lg" borderRadius="md">
          <Text fontSize="xl" mb={2}>Get In Touch</Text>
          <VStack as="form" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
            <Input placeholder="Your name *" value={fullName} onChange={(e) => setFullName(e.target.value)} ref={nameInputRef} />
            <Input placeholder="Enter your email *" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
            <Input placeholder="Mobile No" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
            <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <Textarea placeholder="Your Message" rows={6} mb={6} value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button type="submit" icon={<FiArrowRight />} label="Submit Message" /> {/* Change to submit button */}
          </VStack>
        </Box>
      </Flex>

      {/* Map Section */}
      <Box h="400px">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.284981058647!2d-0.11954338422923735!3d51.50330881796971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035102c64b85%3A0xeefcf71296c0f6e0!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1666012114166!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactUs;
