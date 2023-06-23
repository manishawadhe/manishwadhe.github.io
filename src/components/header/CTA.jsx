import React from "react";
import Manisha_Wadhe_Resume from "../../assets/Manisha_Wadhe_Resume.pdf";
import { FaGithub } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1N3zDbsQtcbd9-PV9qxivcZj1-2Vg9Wu5/view?usp=sharing"
        download={Manisha_Wadhe_Resume}
        className="btn"
        target="_blank"
      >
        View CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      <a href="https://github.com/manishawadhe" className="btn" target="_blank">
        <FaGithub style={{ fontSize: "20px" }} /> GitHub
      </a>
    </div>
  );
};

export default CTA;
