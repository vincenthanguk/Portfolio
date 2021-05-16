import React, { Component } from "react";
import Project from "./Project";
import "./Projects.css";
import { projects } from "../data/projects.js";

class Projects extends Component {
  render() {
    const projectData = projects.map((project) => (
      <li key={`li-${project.name}`}>
        <Project
          key={project.name}
          projectName={project.name}
          projectLink={project.link}
          imageLink={project.image}
          techStack={project.techStack}
          description={project.description}
        />
      </li>
    ));

    return (
      <ul>
        <div className="Projects">{projectData}</div>
      </ul>
    );
  }
}

export default Projects;
