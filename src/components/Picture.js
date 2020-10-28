import React from "react";
import { Box, Text } from "rebass";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import UnstyledBtn from "./UnstyledBtn";

const Picture = ({ url, title }) => {
  const theme = useTheme();
  const textStyle = {
    width: "100vw",
    position: "absolute",
  };
  return (
    <UnstyledBtn>
      <Box
        css={style(url, title, theme.colors)}
        width={[350, 600, 700]}
        height={[400, 400, 550]}
        fontSize={[4, 5, 7]}
      >
        <Text sx={textStyle}>{title}</Text>
      </Box>
    </UnstyledBtn>
  );
};

const style = (url, title, colors) => {
  const { primary, accent, accent1 } = colors;
  return css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 90px 60px;
    left: 0;
    &:hover {
      opacity: 1;
      animation: pic-color-change 1000ms ease forwards;
      background-image: none;
      color: ${accent1};
      mix-blend-mode: darken;

      &:after {
        opacity: 0.5;
        filter: grayscale(0.8);
      }
    }
    &:after {
      content: "";
      background: url(${process.env.PUBLIC_URL + url}) no-repeat center;
      background-size: cover;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
    @keyframes pic-color-change {
      0% {
        background-color: ${accent1};
      }
      10% {
        background-color: none;
      }
    }
  `;
};

export default Picture;
