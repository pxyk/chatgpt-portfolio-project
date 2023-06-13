import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from './components/BackToTop/BackToTop';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
