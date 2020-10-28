import React from "react";
import { ThemeProvider } from "emotion-theming";

const CustomThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: "#ff3d3d", //pink red
      bgPrimary:"#f0ffff", //light blue
      onBg: "#000000", //noir
      accent: 'yellow', //yellow
      accent1: 'blue', //bright blue
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 24, 40, 60, 100, 128,176],
    fonts: {
      body: "Oswald, sans-serif",
      heading: "inherit",
    },
    variants: {
      link: {
        textDecoration:'none',
        color: 'inherit'
      },
      'unstyled-btn': {
        bg:'accent',
        fontFamily: 'inherit'
      }
    }
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
