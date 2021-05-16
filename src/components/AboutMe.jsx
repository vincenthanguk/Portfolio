import React, { Component } from "react";

import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="profile-picture">
          <img
            src="https://images.unsplash.com/photo-1532920161727-344adb090f7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="project"
            width="250"
            height="250"
          />
        </div>
        <div className="profile-text">
          <h2>Hi There!</h2>
          <p>
            <i className="fas fa-quote-left"></i>
            My name is Vincent. I have taught myself how to code and build web
            applications entirely from scratch. The enjoyment of problem-solving
            and my curiosity about learning new concepts motivate me to improve
            my coding skills every day. It is my dream to contribute my
            creativity and communication skills to awesome projects.{" "}
            <i className="fas fa-quote-right"></i>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
