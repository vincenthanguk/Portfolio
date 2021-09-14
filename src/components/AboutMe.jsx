import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="profile-picture">
          <img src="images/portrait_cropped.jpeg" alt="Vincent Kreusel" />
        </div>
        <div className="profile-text-container">
          <h1 className="profile-heading">Hello World!</h1>
          <blockquote className="profile-text">
            <span className="profile-icon">
              <i className="fas fa-quote-left"></i>
            </span>
            My name is Vincent. I have taught myself how to code and build web
            applications from scratch. The enjoyment of problem-solving and my
            curiosity for learning new programming concepts motivate me to work
            on my skills every day.
          </blockquote>
          <NavLink exact activeClassName="active-link" to="/projects">
            <button className="profile-btn">Check out my projects</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default AboutMe;
