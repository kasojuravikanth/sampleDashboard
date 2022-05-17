import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Layout from "../component/header/Layout";
import DashboardWidget from "../component/Widgets/DashboardWidget";

const Dashboard = () => {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.500", "white.200");
  const color = useColorModeValue("gray.100", "#c2d6e9");
  return (
    <>
      <Layout>
        <SimpleGrid columns={[3, null, 5]} spacing="20px" margin={8}>
          <Box ml={4} className="cards" w="250px" h="150px">
            <Box className="circle" pos="absolute"></Box>
            <Box marginY={2} className="content" color={color}>
              <Flex marginX={6}>
                <Stack direction={["column"]}>
                  <Box>High : 30</Box>
                  <Box>Low : 30</Box>
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
                <Link to="/application">Explore More</Link>
              </Button>
            </Box>
            <Box className="circletitle">Monitoring</Box>
            <svg
              className="mainIcon"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              height="3em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#D1C4E9">
                <path d="M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"></path>
                <path d="M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"></path>
                <path d="M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"></path>
              </g>
              <path
                fill="#607D8B"
                d="M45.2,38.1c0.1-0.4,0.1-0.8,0.1-1.1s0-0.8-0.1-1.1l2.3-1.7c0.2-0.2,0.3-0.5,0.2-0.7l-2.3-3.9 c-0.1-0.2-0.4-0.3-0.7-0.2l-2.6,1.2c-0.6-0.5-1.3-0.9-2-1.2l-0.3-2.9c0-0.3-0.3-0.5-0.5-0.5h-4.5c-0.3,0-0.5,0.2-0.5,0.5l-0.3,2.9 c-0.7,0.3-1.4,0.7-2,1.2l-2.6-1.2c-0.3-0.1-0.6,0-0.7,0.2l-2.3,3.9c-0.1,0.2-0.1,0.6,0.2,0.7l2.3,1.7c-0.1,0.4-0.1,0.8-0.1,1.1 s0,0.8,0.1,1.1l-2.3,1.7c-0.2,0.2-0.3,0.5-0.2,0.7l2.3,3.9c0.1,0.2,0.4,0.3,0.7,0.2l2.6-1.2c0.6,0.5,1.3,0.9,2,1.2l0.3,2.9 c0,0.3,0.3,0.5,0.5,0.5h4.5c0.3,0,0.5-0.2,0.5-0.5l0.3-2.9c0.7-0.3,1.4-0.7,2-1.2l2.6,1.2c0.3,0.1,0.6,0,0.7-0.2l2.3-3.9 c0.1-0.2,0.1-0.6-0.2-0.7L45.2,38.1z M37,42.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2 C42.2,39.9,39.9,42.2,37,42.2z"
              ></path>
              <path
                fill="#455A64"
                d="M37,31c-3.3,0-6,2.7-6,6c0,3.3,2.7,6,6,6s6-2.7,6-6C43,33.7,40.3,31,37,31z M37,40c-1.7,0-3-1.3-3-3 c0-1.7,1.3-3,3-3s3,1.3,3,3C40,38.7,38.7,40,37,40z"
              ></path>
            </svg>

            {/* </Box> */}
          </Box>

          <DashboardWidget
            title="Applications"
            icon={
              <svg
                className="mainIcon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="3em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"></path>
                <path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"></path>
              </svg>
            }
            high="53"
            low="23"
            url="stats"
          />

          <DashboardWidget
            title="Applications"
            icon={
              <svg
                className="mainIcon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="3em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"></path>
                <path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"></path>
              </svg>
            }
            high="53"
            low="23"
            url="stats"
          />
          <DashboardWidget
            title="Applications"
            icon={
              <svg
                className="mainIcon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="3em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"></path>
                <path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"></path>
              </svg>
            }
            high="53"
            low="23"
            url="stats"
          />
        </SimpleGrid>
      </Layout>
    </>
  );
};

export default Dashboard;
