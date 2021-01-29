import { extendTheme, DefaultTheme } from '@chakra-ui/react';

export const customTheme: DefaultTheme = extendTheme({
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    sm: '5px',
    md: '8px',
  },
  colors: {
    gray: {
      400: '#e5e5e5',
      500: '#dee2e6',
    },

    blue: {
      400: '#0761d1',
      500: '#0070f3',
    },
  },
});
