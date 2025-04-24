import React from "react";
import Navbar from "./Components/Navbar";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Portfolio />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
