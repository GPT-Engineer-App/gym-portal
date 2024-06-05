import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Button, IconButton, Image, Stack, Flex } from "@chakra-ui/react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="teal.500" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            GymFit
          </Heading>
          <HStack spacing={4}>
            <Button variant="link" color="white">
              Home
            </Button>
            <Button variant="link" color="white">
              About
            </Button>
            <Button variant="link" color="white">
              Services
            </Button>
            <Button variant="link" color="white">
              Contact
            </Button>
          </HStack>
        </Container>
      </Box>

      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            Welcome to GymFit
          </Heading>
          <Text fontSize="xl" mb={8}>
            Your journey to a healthier life starts here.
          </Text>
          <Button colorScheme="teal" size="lg">
            Join Now
          </Button>
        </Container>
      </Box>

      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" textAlign="center" mb={10}>
            Our Services
          </Heading>
          <Stack direction={["column", "row"]} spacing={10} justify="center">
            <VStack spacing={4} align="center">
              <IconButton aria-label="Weight Training" icon={<FaDumbbell />} size="lg" isRound colorScheme="teal" />
              <Heading as="h4" size="md">
                Weight Training
              </Heading>
              <Text textAlign="center">Build muscle and strength with our state-of-the-art weight training equipment.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Cardio" icon={<FaRunning />} size="lg" isRound colorScheme="teal" />
              <Heading as="h4" size="md">
                Cardio
              </Heading>
              <Text textAlign="center">Improve your cardiovascular health with our range of cardio machines.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Personal Training" icon={<FaHeartbeat />} size="lg" isRound colorScheme="teal" />
              <Heading as="h4" size="md">
                Personal Training
              </Heading>
              <Text textAlign="center">Get personalized training programs tailored to your fitness goals.</Text>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Box as="footer" bg="teal.500" color="white" py={10}>
        <Container maxW="container.xl" textAlign="center">
          <Text mb={4}>Follow us on social media</Text>
          <HStack spacing={4} justify="center" mb={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound colorScheme="teal" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound colorScheme="teal" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" isRound colorScheme="teal" />
          </HStack>
          <Text>&copy; 2023 GymFit. All rights reserved.</Text>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
