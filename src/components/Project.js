import React from "react";
import Picture from "./Picture";

const Project = ({ data }) => {
  const { title, url } = data;
  return (
    <div>
      <Picture url={url} title={title}></Picture>
    </div>
  );
};

export default Project;
