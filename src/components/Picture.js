import React from "react";
import { Box } from "rebass";
import { css } from "@emotion/core";


const Picture = ({ url, title }) => {
  const style = css`
    height: 20vh;
    width: 20vh;
    position: relative;
    display: block;
    &:hover {
      animation: color-change 4000ms ease;
      background-image: none;
      
    }
    &:after {
      content: "";
      background: url(${process.env.PUBLIC_URL + url}) no-repeat center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }

    @keyframes color-change {
      0% {
        background-color: ${(props) => props.accent3};
      }
      1% {
        background-color: ${(props) => props.accent2};
      }
      2% {
        background-color: ${(props) => props.accent};
      }
      3% {
        background-color:none
      }
    }
  `;

  return <Box css={style}></Box>;
};

export default Picture;
