import React from "react";
import Section from "./Section";
import TitleH2 from "./TitleH2";
import data from "../data/data.js";
import Project from "./Project";

const Projects = () => {
  
  return (
    <Section id="projects">
      <TitleH2>Projects</TitleH2>
      {data.projects.map((project, i) => (
        <Project key={i} data={project} />
      ))}
    </Section>
  );
};

export default Projects;
