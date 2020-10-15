import React from "react";
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "../styles/theme";
import MDXComponents from "../components/mdx-components";
import { MDXProvider } from "@mdx-js/react";

export const ThemeContainer = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value={"light"}>
          <CSSReset />
          {children}
        </ColorModeProvider>
      </MDXProvider>
    </ChakraThemeProvider>
  );
};
