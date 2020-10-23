import React from "react";
import { Flex, Text, Box } from "rebass";
import Nav from "./Nav";

const Header = () => {
  const style = {
    bg: "primary",
    px: [3, 4, 5],
    py: [2, 3, 4],
    alignItems: "center",
  };

  return (
    <header>
      <Flex sx={style}>
        <Text fontWeight="bold">M</Text>
        <Box mx="auto" />
        <Nav />
      </Flex>
    </header>
  );
};

export default Header;
