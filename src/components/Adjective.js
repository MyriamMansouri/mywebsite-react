import React, { useEffect, useState } from "react";
import { jsx, css } from "@emotion/core";
import { Box } from "rebass";
import {useTheme} from "emotion-theming";

const Adjective = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const words = ["cool", "hype"];
  const colors = [theme.colors.primary];

  const style = css`
    animation: translate-adj 500ms ease;
    overflow: hidden;
    color:${colors[index]};
    @keyframes translate-adj {
      0% {
        transform: translate(0, -100%);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  `;

  useEffect(() => {
    const change = () => {
      setIndex(() => index + 1);
      if (index === words.length - 1) {
        setIndex(0);
      }
    };
    const update = setInterval(change, 3000);
    return () => clearInterval(update);
  }, []);

  return <Box css={style}>{words[index]}</Box>;
};

export default Adjective;
