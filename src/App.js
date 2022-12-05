import Intro from "./components/intro/Intro.jsx";
import Topbar from "./components/Topbar/Topbar.jsx";
import Contact from "./components/contact/contact.jsx";
import Menu from "./components/Menu/menu.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Skills from "./components/Skills/Skills.jsx";
// import Qualification from "./components/Qualification/Qualification.jsx";
import React from "react";
import { useState } from "react";
import "./app.scss";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Skills></Skills>

        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
