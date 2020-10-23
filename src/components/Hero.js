import React from "react";
import Section from "./Section";
import { Flex, Heading, Text } from "rebass";

const Hero = () => {
  const styleSection = {
    bg: "primary",
  }
  const styleHeading = {
    color: "secondary",
    mx: "auto",
    fontSize: [6, 7, 8],
  };
  const styleFlex = {
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <Section sx={styleSection}>
      <Heading sx={styleHeading}>
        <Flex sx={styleFlex}>
          <Text>Myriam</Text>
          <Text>Mansouri</Text>
        </Flex>
      </Heading>
    </Section>
  );
};

export default Hero;
