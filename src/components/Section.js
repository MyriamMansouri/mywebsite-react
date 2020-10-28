import React from "react";
import { Box } from "rebass";

const Section = ({ children, sx, id}) => {
  const style = {
    px: [3, 4, 5],
    py: [5, 5, 6],
  };

  const styleContent = {
    maxWidth:'1500px',
    mx: "auto",

  }
  return (
    <Box sx={{ ...style, ...sx }} id={id}>
      <Box sx={styleContent}>{children}</Box>
    </Box>
  );
};

export default Section;
