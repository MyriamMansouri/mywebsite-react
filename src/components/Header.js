import React from "react";
import { Link, Flex, Text, Box } from "rebass";
import Nav from "./Nav";

const Header = () => {
  const style = {
    bg: "primary",
    px: [3, 4, 5],
    py: [2, 3, 4],
    alignItems: "center",
    fontSize: [3, 4],
  };

  return (
    <header>
      <Flex sx={style}>
        <Link variant="link" href={`#hello`}>
          <Text fontWeight="bold" color="accent">{`<MM>`}</Text>
        </Link>
        <Box mx="auto" />
        <Nav />
      </Flex>
    </header>
  );
};

export default Header;
