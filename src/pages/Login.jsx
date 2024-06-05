import { Box, Button, Input, VStack } from "@chakra-ui/react";

function Login() {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Input placeholder="Username" />
      </Box>
      <Box>
        <Input placeholder="Password" type="password" />
      </Box>
      <Button colorScheme="teal">Login</Button>
    </VStack>
  );
}

export default Login;
