import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      400: "#e5e5e5",
      500: "#dee2e6",
    },

    blue: {
      ...theme.colors.blue,
      400: "#0761d1",
      500: "#0070f3",
    },
  },
};

export default customTheme;
