import React, { Component } from "react";

import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="profile-picture">
          <img src="images/portrait.jpg" alt="project" />
        </div>
        <div className="profile-text">
          <h2>Hi there!</h2>
          <p>
            <i className="fas fa-quote-left"></i>
            My name is Vincent. I have taught myself how to code and build web
            applications entirely from scratch. The enjoyment of problem-solving
            and my curiosity for learning new concepts motivate me to improve my
            coding skills every day. It is my dream to contribute my creativity
            and communication skills to awesome projects.{" "}
            <i className="fas fa-quote-right"></i>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
