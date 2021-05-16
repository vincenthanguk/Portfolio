import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
