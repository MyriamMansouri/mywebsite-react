import React from "react";
import Section from "./Section";
import { Flex, Heading, Text } from "rebass";

const Hero = () => {
  const styleHeading = {
    mx: "auto",
    fontSize: [5, 7, 8],
  };
  const styleFlex = {
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  };

  const heroTitle = ["Myriam", "Mansouri"];
  return (
    <Section id="hero">
      <Heading sx={styleHeading} as="h1">
        <Flex sx={styleFlex}>
          {heroTitle.map((el, i) => (
            <Text sx={{ cursor: "none" }} key={i} className="hero-title">
              {el}
            </Text>
          ))}

        </Flex>
      </Heading>
    </Section>
  );
};

export default Hero;
