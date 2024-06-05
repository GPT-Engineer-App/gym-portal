import React, { useState } from "react";
import { Box, Container, Heading, VStack, Input, Button, Text } from "@chakra-ui/react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container maxW="container.sm" py={20}>
      <Box bg="white" p={8} boxShadow="md" borderRadius="md">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          {isLogin ? "Login" : "Logout"}
        </Heading>
        {isLogin ? (
          <VStack spacing={4}>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button colorScheme="teal" width="full">
              Login
            </Button>
            <Text onClick={toggleAuthMode} cursor="pointer" color="teal.500">
              Switch to Logout
            </Text>
          </VStack>
        ) : (
          <VStack spacing={4}>
            <Button colorScheme="teal" width="full">
              Logout
            </Button>
            <Text onClick={toggleAuthMode} cursor="pointer" color="teal.500">
              Switch to Login
            </Text>
          </VStack>
        )}
      </Box>
    </Container>
  );
};

export default Auth;
