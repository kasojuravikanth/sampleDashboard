import { background, Box, Flex } from "@chakra-ui/react";
import Header from "./HeaderComp";
import BackGround from "../../Assets/BackGround.png";
interface props {
  children: any;
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Box>
        <Header />
        <Box position="relative">
          {/* <img style={{ position: "absolute" }} src={BackGround} alt="bg" /> */}
          <Flex>{children}</Flex>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
