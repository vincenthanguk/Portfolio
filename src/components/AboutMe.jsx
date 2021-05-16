import React, { Component } from "react";
import SocialLinks from "./SocialLinks";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="content">
          <div className="profile-picture"></div>
          <div className="profile-text">
            <h2>Hi There!</h2>
            <p>
              <i class="fas fa-quote-left"></i>
              After learning coding on my own through online classes on Udemy, I
              created my first web application entirely from scratch. Ever
              since, the enjoyment of problem-solving and my curiosity about
              learning new concepts drives me to improvimg my coding skills
              every day. It is my dream to contribute my creativity and
              communication skills to awesome projects as part of an
              international team.
            </p>
          </div>
          <div className="profile-social">
            <SocialLinks />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
