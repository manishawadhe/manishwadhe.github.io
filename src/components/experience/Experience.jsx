import React, { useEffect } from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudiocode } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { CgNpm } from "react-icons/cg";

import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import { SiWebdriverio } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { SiCucumber } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiApachejmeter } from "react-icons/si";
import { SiJenkins } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="experience">
      <h5 data-aos="zoom-in-down">What I have to offer</h5>
      <h2 data-aos="zoom-in-down">My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend" data-aos="zoom-in-down">
          <h3>Functional testing Tools</h3>
          <div className="experience__content" data-aos="flip-left">
            <article className="experience__details">
              <SiSelenium
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Selenium</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiCypress
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Cypress</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostman
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Postman</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiWebdriverio
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Webdriver io</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Appium</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <FaStar
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Rest Assured</h2>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend" data-aos="zoom-in-down">
          <h3>Tools</h3>
          <div className="experience__content" data-aos="flip-left">
            <article className="experience__details">
              <FaGitAlt
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Git</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <FaSlack
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Slack</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>MangoDB</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>TestNG</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>MySQL</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <FaStar
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Maven</h2>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend" data-aos="zoom-in-down">
          <h3>Libraries/Tools</h3>
          <div className="experience__content" data-aos="flip-down">
            <article className="experience__details">
              <AiFillGithub
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>GitHub</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiCucumber
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Cucumber</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiJira
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Jira</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiApachejmeter
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Jmeter</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiJenkins
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Jenkin</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiVisualstudiocode
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>VS Code</h2>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>

        {/* <div className="experience__backend" data-aos="zoom-in-down">
          <h3>Tools</h3>
          <div className="experience__content" data-aos="flip-left">
            <article className="experience__details">
              <FaGitAlt
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Git</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <FaSlack
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Slack</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>MangoDB</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>TestNG</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <CgNpm
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>NPM</h2>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <FaStar
                style={{ fontSize: "80px" }}
                className="experience__details-icons"
              />
              <div>
                <h2>Maven</h2>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
