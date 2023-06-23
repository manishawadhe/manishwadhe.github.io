import React, { useEffect } from "react";
import "./about.css";
import pic4 from "../../assets/reading-book.png";
// import {FaAward} from 'react-icons/fa'
// import {VscFolderLibrary} from 'react-icons/vsc'
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <h5 data-aos="zoom-in-down">Get to know</h5>
      <h2 data-aos="zoom-in-down">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pic4} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards" data-aos="zoom-in-down">
            {/* <a href="#experience">
              <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Starting out</small>
            </article>
            </a>
            <a href="#portfolio">
            <article className='about__card' >
              <VscFolderLibrary className='about__icon'/>
              <h5>  Projects</h5>
              <small> 10+ completed</small>
            </article>
            </a> */}
          </div>
          <p data-aos="zoom-in-down">
            I am a Softeware Development In Test graduate from{" "}
            <a href="https://www.masaischool.com/" target="__blank">
              Masai School.
            </a>
            <br />A passionate Software Development Engineer in Test (SDET) with
            a strong foundation in Java, and JavaScript, I am passionate about
            delivering high-quality software solutions. With a keen eye for
            detail and a commitment to excellence, I am dedicated to continuous
            learning and staying up-to-date with the latest industry trends and
            best practices.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
