import React from "react";
import { ThemeProvider } from "emotion-theming";

const CustomThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: "#0045ff", //bleu
      onPrimary: "#ffffff", //blanc
      secondary: "#ffffff", //blanc
      onSecondary: "#000000", //noir
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 24, 32, 40, 100, 128,176],
    fonts: {
      body: "system-ui, sans-serif",
      heading: "inherit",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
