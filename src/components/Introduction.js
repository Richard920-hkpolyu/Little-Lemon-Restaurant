import { HStack, Heading, VStack, Button, Text, Image, useBreakpointValue,useMediaQuery } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import img1 from "../images/small/Intro_Restaurantfood.jpg";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const para1 = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

const Introduction = () => {
    const alignment = useBreakpointValue({
        base: "center", // Default alignment for mobile
        md: "center",   // Alignment for medium screens and up
        lg: "start",   // Alignment for large screens and up
    });
    const [isMobile] = useMediaQuery("(max-width: 48em)");
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#495E57"
        >
            <HStack
                spacing={{ base: 4, md: 8 }} // Adjust spacing based on screen size
                flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontally on larger screens
            >
                <br/><br/>
                <VStack
                    alignItems={alignment}
                    width={{ base: "100%", md: "60vw", lg: "65vw" }} // Responsive width
                    py={10}
                    spacing={6}
                >
                    <Heading size={{ base: "2xl", md: "3xl" }} fontWeight="bold" noOfLines={1} color="#F4CE14" alignSelf={alignment}>
                        Little Lemon
                    </Heading>
                    <Heading size={{ base: "xl", md: "2xl" }} fontWeight="semibold" noOfLines={1} color="#EDEFEE" alignSelf={alignment}>
                        Chicago
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="#EDEFEE" noOfLines={3} align={alignment}>
                        {para1}
                    </Text>
                    <Link to="/reservation">
                        <Button colorScheme="yellow" width="xs" alignSelf={alignment}>
                            <span style={{ color: '#333333' }}>
                                Reserve a table&nbsp; <ChevronRightIcon />
                            </span>
                        </Button>
                    </Link>
                </VStack>
                <VStack>
                    <Image
                        src={img1}
                        width={{ base: "90vw", md: "40vw" }} // Full width on mobile, 40% on larger screens
                        height={{ base: "30vh", md: "50vh" }} // Adjust height based on screen size
                        borderRadius="xl"
                        fit="cover"
                        transition="all 0.4s linear"
                        _hover={{
                            transform: "scale(1.04)",
                            bg: "teal.600",
                        }}
                        _active={{
                            transform: "scale(1)",
                        }}
                    />
                    {isMobile ? <br /> : null}
                </VStack>
            </HStack>
        </FullScreenSection>
    );
};

export default Introduction;