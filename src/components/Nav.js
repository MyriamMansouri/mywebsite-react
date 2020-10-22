import React from "react";
import { Link } from "rebass";

const Nav = () => {
  const navelements = ["projects", "about", "contact"];

  const style = {
    color: "inherit",
    textDecoration: "none",
    fontSize: [3, 4, 5],
    fontWeight: "bold",
    ":hover,:focus,.active": {
      color: "primary",
    },
    pl: [2, 3],
    ":not(:last-child)": {
      pr: [2, 3],
    }
  };

  return (
    <nav>
      {navelements.map((el, i) => (
        <Link key={i} sx={style} href={`#${el}`}>
          {el}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
