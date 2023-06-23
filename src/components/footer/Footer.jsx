import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#" className="footer__logo">
        Jagriti Kumari
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy;Made by Jagriti Kumari. </small>
      </div>
    </div>
  );
};

export default Footer;
