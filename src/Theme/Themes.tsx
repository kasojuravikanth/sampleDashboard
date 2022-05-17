import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;

export const darkBg = 'hsl(207, 26%, 17%)'
export const lightBg = 'hsl(0°, 40%, 65%)'