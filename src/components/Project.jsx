import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="project-image">
          <img
            src={this.props.imageLink}
            alt="project"
            width="180"
            height="180"
          />
        </div>
        <div className="project-description">
          <div className="project-description-title">
            <a
              href={this.props.projectLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              {this.props.projectName}
            </a>
            {" | "}
            {this.props.techStack}
          </div>
          <div>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Project;
