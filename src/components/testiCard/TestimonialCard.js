import React, { useEffect, useCallback, useState } from 'react';
import { Box, Avatar, Flex, Text, HStack, VStack } from '@chakra-ui/react';
import { IoStar } from "react-icons/io5";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './TestimonialCarousel.css';

const TestimonialCard = ({ name, role, image, review }) => (
    <Box
        p={5}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
        textAlign="center"
        maxW="300px"
        m="auto"
        _hover={{ boxShadow: 'xl' }}
    >
        <Avatar
            size="xl"
            name={name}
            src={image}
            mb={4}
        />
        <Text fontSize="md" color="gray.600" mb={4}>
            {review}
        </Text>
        <HStack justify="center" mb={4}>
            {[...Array(5)].map((_, i) => (
                <IoStar key={i} color="gold" />
            ))}
        </HStack>
        <VStack spacing={1}>
            <Text fontWeight="bold" fontSize="lg">{name}</Text>
            <Text fontSize="sm" color="gray.500">{role}</Text>
        </VStack>
    </Box>
);

const TestimonialCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false }, [Autoplay()]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const testimonials = [
        {
            name: 'Bob Limones',
            role: 'Student',
            image: 'https://bit.ly/broken-link',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor enim veniam quis nostrud.',
        },
        {
            name: 'jack Tanision',
            role: 'Student',
            image: 'https://bit.ly/broken-link',
            review: 'Alice is a fantastic instructor with a wealth of knowledge in web development and coding.',
        },
        {
            name: 'Mark Twain',
            role: 'Student',
            image: 'https://bit.ly/broken-link',
            review: 'Mark has been an excellent student, always pushing the boundaries of learning.',
        },
    ];

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect(); // Set the initial selected index
    }, [emblaApi, onSelect]);

    return (
        <Box className="embla">
            <Box className="embla__viewport" ref={emblaRef}>
                <Flex className="embla__container">
                    {testimonials.map((testimonial, index) => {
                        // Adjust the class based on the index
                        let className = 'embla__slide';
                        if (index === selectedIndex) {
                            className += ' embla__slide--active';
                        } else if (index === (selectedIndex - 1 + testimonials.length) % testimonials.length) {
                            className += ' embla__slide--left';
                        } else if (index === (selectedIndex + 1) % testimonials.length) {
                            className += ' embla__slide--right';
                        } else {
                            className += ' embla__slide--hidden'; // For non-active slides
                        }

                        return (
                            <Box key={index} className={className}>
                                <TestimonialCard
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    image={testimonial.image}
                                    review={testimonial.review}
                                />
                            </Box>
                        );
                    })}
                </Flex>
            </Box>
        </Box>
    );
};

export default TestimonialCarousel;
