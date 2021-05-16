import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a
          href="https://github.com/vincenthanguk"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://linkedin.com/in/vincent-kreusel"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/VincentHanguk"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>
    );
  }
}

export default Footer;
