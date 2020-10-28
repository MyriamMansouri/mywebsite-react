import React from "react";
import { Flex } from "rebass";
import Section from "./Section";
import TitleH2 from "./TitleH2";
import data from "../data/data.js";
import Project from "./Project";

const Projects = () => {
  return (
    <Section id="projects">
      <Flex alignItems="center" flexDirection="column">
        <TitleH2>Projects</TitleH2>
        {data.projects.map((project, i) => (
          <Project key={i} data={project} />
        ))}
      </Flex>
    </Section>
  );
};

export default Projects;
