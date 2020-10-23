import React from "react";
import { Box } from "rebass";

const Section = ({ children, sx }) => {
  const style = {
    px: [3, 4, 5],
    py: [5, 5, 6],
  };

  const styleContent = {
    maxWidth:'1500px',
    mx: "auto",
  }
  return (
    <Box sx={{ ...style, ...sx }}>
      <Box sx={styleContent}>{children}</Box>
    </Box>
  );
};

export default Section;
