import {
  Box,
  chakra,
  ChakraProvider,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NoScreenFound from "./component/NoScreenFound/NoScreenFound";
import ApplicationViewController from "./views/ApplicationViewController";
import Header from "./component/header/HeaderComp";
import Authorization from "./component/Auth/Authorization";
import "./App.css";
import Dashboard from "./views/Dashboard";
import { StatsPage } from "./views/StatsPage";

interface props {
  children: any;
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Box>
        <Header />
        <Flex>{children}</Flex>
      </Box>
    </>
  );
};

function App() {
  const bg = useColorModeValue("gray.500", "white.200");
  const color = useColorModeValue("gray.100", "yellow.800");

  const MainContainer = chakra("div", {
    baseStyle: {
      shadow: "lg",
      rounded: "lg",
      bg: bg,
      color: color,
    },
  });

  return (
    <>
      <MainContainer>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Authorization />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/application"
              element={<ApplicationViewController />}
            />
            <Route
              path="application/details"
              element={<StatsPage />}
            />
            <Route path="/newroute" element={<> newroute </>} />
            <Route path="*" element={<NoScreenFound />} />
          </Routes>
        </ChakraProvider>
      </MainContainer>
    </>
  );
}

export default App;
