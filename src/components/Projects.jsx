import React, { Component } from "react";
import Project from "./Project";
import "./Projects.css";
import { projects } from "../data/projects.js";

class Projects extends Component {
  render() {
    const projectData = projects.map((project) => (
      <Project
        key={project.name}
        projectName={project.name}
        projectLink={project.link}
        imageLink={project.image}
        techStack={project.techStack}
        description={project.description}
      />
    ));

    return <div className="Projects">{projectData}</div>;
  }
}

export default Projects;
