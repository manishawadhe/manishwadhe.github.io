import Link from "react-scroll/modules/components/Link";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import "./navbar1.css";
import Manisha_Wadhe_Resume from "../../assets/Manisha_Wadhe_Resume.pdf";
import pic from "../../assets/woman.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const goto = () => {
    window.open(
      "https://drive.google.com/file/d/1N3zDbsQtcbd9-PV9qxivcZj1-2Vg9Wu5/view?usp=sharing"
    );
  };

  return (
    <div className="navbar">
      <div className="logo" style={{ display: "flex" }}>
        <img
          src={pic}
          style={{
            height: "10%",
            width: "8%",
            marginTop: "10px",
            marginLeft: "5px",
          }}
        />
        <h1 className="logo-h1">Manisha Wadhe</h1>
      </div>
      <input
        id="checkbox"
        type="checkbox"
        checked={isOpen}
        onChange={handleClick}
      />
      <div id="bar">
        <label htmlFor="checkbox">
          <Hamburger className="Hamburger" />
        </label>
      </div>
      <ul className={`nav-ul ${isOpen ? "active" : ""}`} onClick={closeMenu}>
        <Link to="home" smooth={true} duration={500} onClick={handleClick}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={handleClick}>
          <li>About</li>
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          onClick={handleClick}
        >
          <li>Skills</li>
        </Link>
        <Link to="github" smooth={true} duration={500} onClick={handleClick}>
          <li>GitHub</li>
        </Link>
        <Link to="portfolio" smooth={true} duration={500} onClick={handleClick}>
          <li>Project</li>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
          <li>Contact</li>
        </Link>
        <a
          href={Manisha_Wadhe_Resume}
          target="_blank"
          rel="noreferrer"
          download
        >
          <li onClick={goto}>Resume</li>
        </a>
      </ul>
    </div>
  );
}
