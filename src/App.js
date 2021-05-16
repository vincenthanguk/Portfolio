import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
