import React, { useState } from "react";
import { Link } from "react-scroll";

import "./NavBar.css";

import logo from "../../assests/icons-p.png";
import close from "../../assests/cross.png";
import menu from "../../assests/burger-menu.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const menuHandler = (name) => {
    setShowMenu(false);

    setActiveLink(name);
  };

  return (
    <nav className="navbar">
      <Link
        to="intro"
        onClick={() => setActiveLink("home")}
        duration={500}
        smooth={true}
        offset={-100}
      >
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className="desktopMenu">
        <Link
          className={`desktopMenuItem ${
            activeLink === "about" ? "active" : ""
          }`}
          to="skillset"
          onClick={() => setActiveLink("about")}
          duration={500}
          smooth={true}
          offset={-30}
        >
          About
        </Link>
        <Link
          className={`desktopMenuItem ${
            activeLink === "experience" ? "active" : ""
          }`}
          to="experience"
          onClick={() => setActiveLink("experience")}
          smooth={true}
          offset={-40}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className={`desktopMenuItem ${
            activeLink === "contact" ? "active" : ""
          }`}
          to="contacts"
          onClick={() => setActiveLink("contact")}
          duration={500}
          smooth={true}
          offset={-40}
        >
          Contact
        </Link>
      </div>

      <img
        className="mobMenu"
        src={showMenu ? close : menu}
        alt="menu"
        width="80"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          className={`listItem ${activeLink === "about" ? "active" : ""}`}
          to="skillset"
          smooth={true}
          offset={-5}
          duration={500}
          onClick={menuHandler.bind(this, "about")}
        >
          About
        </Link>
        <Link
          className={`listItem ${activeLink === "experience" ? "active" : ""}`}
          to="experience"
          smooth={true}
          offset={-40}
          duration={500}
          onClick={menuHandler.bind(this, "experience")}
        >
          Experience
        </Link>
        <Link
          className={`listItem ${activeLink === "contact" ? "active" : ""}`}
          to="contacts"
          smooth={true}
          offset={-40}
          duration={500}
          onClick={menuHandler.bind(this, "contact")}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
