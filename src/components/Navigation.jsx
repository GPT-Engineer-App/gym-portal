import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <HStack spacing={4}>
      <Button as={Link} to="/" colorScheme="teal">
        Home
      </Button>
      <Button as={Link} to="/auth" colorScheme="teal">
        Auth
      </Button>
      <Button as={Link} to="/login" colorScheme="teal">
        Login
      </Button>
    </HStack>
  );
}

export default Navigation;
