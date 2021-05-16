import React, { Component } from "react";

import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="profile-picture"></div>
        <div className="profile-text">
          <h2>Hi There!</h2>
          <p>
            <i className="fas fa-quote-left"></i>
            My name is Vincent. After learning coding through online classes, I
            created my first web application entirely from scratch. Ever since,
            the enjoyment of problem-solving and my curiosity about learning new
            concepts drives me to improving my coding skills every day. It is my
            dream to contribute my creativity and communication skills to
            awesome projects.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
