/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const UnstyledBtn = ({ children }) => {
  const style = css`
    background: none;
    border: 0;
    font-family: inherit;
    outline: none
  `;
  return <button css={style}>{children}</button>;
};

export default UnstyledBtn;
