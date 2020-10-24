import React from "react";
import { Link } from "rebass";

const Nav = () => {
  const navelements = ["projects", "about", "contact"];

  const style = {
    color: "secondary",
    position: "relative",
    fontSize: [2, 3, 4],
    ":hover,:focus,.active": {
      color: "secondary",
    },
    ":after": {
      content: "''",
      position: "absolute",
      fontSize: [3],
      bottom: "9px",
      left:  [2,3],
      height: "0px",
      width: "30px",
      bg: "secondary",
      opacity: 0,
      transition: "all 300ms ease",
    },
    ":hover:after": {
      opacity: 1,
      height: "5px",
      
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
