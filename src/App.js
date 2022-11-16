import Intro from "./components/intro/Intro.jsx";
import Topbar from "./components/Topbar/Topbar.jsx";
import Contact from "./components/contact/Contact.jsx";
import Menu from "./components/Menu/menu.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
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
        <Works></Works>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
