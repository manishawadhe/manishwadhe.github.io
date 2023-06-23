import React, { useEffect } from "react";
import "./stats.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Calender from "./Calender";

const Stats = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    // streak

    <div className="calendergty">
      <Calender />
      <div align="center">
        <h1 fontFamily="serif" data-aos="flip-right" className="skillDes">
          <span className="name1">My github Statistics</span>
        </h1>
        <div id="stats">
          <img
            data-aos="flip-left"
            src="https://github-readme-stats.vercel.app/api?username=manishawadhe&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true&count_public=true"
            alt="stat"
          />
          <br></br>
          <img
            data-aos="flip-down"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=manishawadhe&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt="stat"
          />
          <br></br>
          <img
            data-aos="flip-left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=manishawadhe&theme=highcontrast&hide_border=false"
            alt="stat"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
