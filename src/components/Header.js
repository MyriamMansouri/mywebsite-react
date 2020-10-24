import React from "react";
import { keyframes } from "@emotion/core";
import { Link, Flex, Text, Box } from "rebass";
import Nav from "./Nav";

const Header = () => {
  const vibrate = keyframes`
      0% { transform: translate3d(3px,0px,0) rotate(3deg); }
      25% { transform: translate3d(0px,-3px,0) rotate(-3deg) }
      75% { transform: translate3d(-3px,0px,0) rotate(3deg) }
      100% { transform: translate3d(0px,3px,0) rotate(-3deg) }
`;
  const style = {
    bg: "primary",
    px: [3, 4, 5],
    py: [3, 3, 4],
    alignItems: "center",
    fontSize: [2,3,4],
  };

  const styleLink = {
    ":hover": {
      animation: `${vibrate} 150ms ease infinite`,
    },
  };

  return (
    <header>
      <Flex sx={style}>
        <Link sx={styleLink} variant="link" href={`#hello`}>
          <Text fontWeight="bold" color="accent">{`<MM>`}</Text>
        </Link>
        <Box mx="auto" />
        <Nav />
      </Flex>
    </header>
  );
};

export default Header;
