import React from "react";
import { Link } from "rebass";

const Nav = () => {
  const navelements = ["projects", "about", "contact"];

  const style = {
    color: "secondary",
    position: "relative",
    fontSize: [3, 4, 5],
    ":hover,:focus,.active": {
      color: "secondary",
    },
    ":after": {
      content: "'@'",
      position: "absolute",
      fontSize: [2],
      bottom: "0px",
      left: "46%",
      height: "10px",
      width: "10px",

      opacity: 0,
      transition: "opacity 1000ms easy",
      transitionProperty: "opacity",
    },
    ":hover:after": {
      opacity: 1,
      transition: "all 1000ms easy",
    },
    py: 3,
    pl: [2, 3],
    ":not(:last-child)": {
      pr: [2, 3],
    },
  };

  return (
    <nav>
      {navelements.map((el, i) => (
        <Link variant="link" key={i} sx={style} href={`#${el}`}>
          {el}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
