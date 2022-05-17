import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DashboardWidget = ({ ...props }) => {
  const { high, low, url, title, icon } = props;
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.500", "white.200");
  const color = useColorModeValue("gray.100", "#c2d6e9");
  return (
    <>
      <Box ml={4} className="cards" w="250px" h="150px">
        <Box className="circle" pos="absolute"></Box>
        <Box marginY={2} className="content" color={color}>
          <Flex marginX={6}>
            <Stack direction={["column"]}>
              <Box>High : {high}</Box>
              <Box>Low : {low}</Box>
            </Stack>
          </Flex>

          <Button
            marginTop={2}
            size="sm"
            rightIcon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"></path>
              </svg>
            }
            colorScheme="grey"
            variant="outline"
          >
            <Link to={`/${url}`}>Explore More</Link>
          </Button>
        </Box>
        <Box className="circletitle">{title}</Box>
        {icon}

        {/* </Box> */}
      </Box>
    </>
  );
};

export default DashboardWidget;
