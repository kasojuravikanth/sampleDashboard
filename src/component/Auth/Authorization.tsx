import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Authorization = () => {
  // const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () => navigate("/dashboard", { replace: false }),
    [navigate]
  );

  // const { user } = useAuth();
  // if (!user) {
  //   // user is not authenticated
  //   return <Navigate to="/" />;
  // }
  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleOnClick}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Authorization;
