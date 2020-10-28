import React from "react";
import { Heading, Text } from "rebass";

const TitleH2 = ({ children }) => {
  const style = {
    fontSize:[4, 5, 6],
    my: [4,5,6]
  }
  return (
    <Heading as="h2">
      <Text sx={style} >{children}</Text>
    </Heading>
  );
};

export default TitleH2;
