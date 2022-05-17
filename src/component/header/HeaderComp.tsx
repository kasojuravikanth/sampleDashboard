import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Switch,
  useColorMode,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { RoutesUrlsComp } from "../../Routes/Routes";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.500", "white.200");
  const color = useColorModeValue("gray.100", "#c2d6e9");
  const location = useLocation();
  console.log(location);

  return (
    <Flex bg={bg} width="100%" height="100%" p="5.5">
      {location?.pathname === "/dashboard" ? (
        <>
          <Box className="" display="flex">
            <svg
              className="logoset1"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              height="2em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="logoset2"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              height="2em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <Box className="logotext">plorer</Box>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                variant="outline"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
                  </svg>
                }
              />

              <MenuList>
                {RoutesUrlsComp?.map((a) => {
                  return (
                    <MenuItem>
                      <Link to={a.path}>{a.crumb}</Link>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>

          <Breadcrumb marginLeft="8px"  spacing="10px" width="100%">
            <BreadcrumbItem>
              <Link to="/dashboard"> Dashboard </Link>
              <Link to={location?.pathname}>
                {location?.pathname.replaceAll("/", " > ")}
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </>
      )}
      <HStack width="100%" spacing="29px">
        <Spacer />
        <Stack align="center" direction="row">
          <Switch size="md" onChange={() => toggleColorMode()} />
        </Stack>
        <WrapItem>
          <Avatar size="sm" name="Ravi kanth" />
        </WrapItem>
      </HStack>
    </Flex>
  );
};

export default Header;
