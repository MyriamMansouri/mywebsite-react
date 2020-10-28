import React from "react";
import Section from "./Section";
import { Flex, Heading, Text } from "rebass";
import Adjective from "./Adjective";

const Hero = () => {
  const styleHeading = {
    mx: "auto",
    fontSize: [5, 7, 8],
  };
  const styleFlex = {
    flexWrap: "wrap",
    flexDirection: "column",
    letterSpacing: "-6px",
  };

  const heroTitle = ["I'm Myriam", "I build websites"];
  return (
    <Section id="hero">
      <Heading sx={styleHeading} as="h1">
        <Flex sx={styleFlex}>
          {heroTitle.map((el, i) => (
            <Text sx={{ cursor: "none" }} key={i} className="hero-title">
              {el}
            </Text>
            
          ))}
<Adjective/>
        </Flex>
      </Heading>
    </Section>
  );
};

export default Hero;
