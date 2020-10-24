import React from "react";
import { Heading, Text } from "rebass";

const TitleH2 = ({ children }) => {
  return (
    <Heading as="h2">
      <Text fontSize={[4, 5, 6]}>{children}</Text>
    </Heading>
  );
};

export default TitleH2;
