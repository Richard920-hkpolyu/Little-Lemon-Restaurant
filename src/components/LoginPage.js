import { HStack, Heading, VStack, SimpleGrid,  } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faUser } from '@fortawesome/free-solid-svg-icons';

const LoginPage = ({ isSignUp }) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const scrollToTopTimeout = setTimeout(handleScrollToTop, 300);
        return () => clearTimeout(scrollToTopTimeout); // Cleanup timeout on unmount
    }, []);

    return (
        <>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#495E57"
                minHeight="25vh"
                width="100%"
            >
                <br/><br/>
                <SimpleGrid columns={2} alignItems="center" width="100%">
                    <VStack alignItems="start" width="100%">
                        <Heading size={{ base: "xl", md: "2xl" }} fontWeight="semibold" noOfLines={1} color="#F4CE14">{isSignUp ? "SIGN-UP" : "SIGN-IN"}</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><FontAwesomeIcon icon={faBowlFood} size="6x"/></VStack>
                </SimpleGrid>
            </FullScreenSection>
        </>
    );
};

export default LoginPage;
//<FontAwesomeIcon icon={faUser} />