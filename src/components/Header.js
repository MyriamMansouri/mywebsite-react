import React from "react";
import { Flex, Text, Box } from "rebass";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Flex variant="header" alignItems="center">
        <Text fontWeight="bold">
          M
        </Text>
        <Box mx="auto" />
        <Nav />
      </Flex>
    </header>
  );
};

export default Header;
