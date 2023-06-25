import React, { useEffect } from "react";
import "./portfolio.css";
import img1 from "../../assets/mxplayer.png";
import img2 from "../../assets/banjararide.png";
import img3 from "../../assets/github.png";
import img4 from "../../assets/myntra.png";
import Aos from "aos";
import "aos/dist/aos.css";
// import img5 from '../../assets/portfolio5.jpg'
// import img6 from '../../assets/tic-tac-toe.png'

const data = [
  {
    id: 1,
    image: img1,
    // image:"https://ph-files.imgix.net/d45186b8-1b1d-41bf-95b1-93a6aeea4caa.gif?auto=format&fit=crop",
    title: "Mx Player",
    github: "https://github.com/manishawadhe/SeleniumFrirstProject",
    demo: "https://drive.google.com/drive/folders/1I1SICkuhRQjp5JjlnLGwJgXeE8xvuZQH?usp=sharing",
    des: "MX Player is a video streaming app that offers thousands of hours of premium, exclusive and original content from leading Producers and Publishers. It's a one-stop app for some of the best Movies, TV Shows, Web Series, Music Videos and Short Videos. ",
    tech: "Selenium | POM | Eclipse IDE | Xmind | Exel",
  },
  {
    id: 2,
    image: img4,
    // image:"https://miro.medium.com/max/1200/1*JhkS75vF0ZQFq26Phhv6Fg.gif",
    title: "Myntra",
    github:
      "https://github.com/manishawadhe/SDET-Projects/tree/main/Cypress_Cucumber_Project",
    demo: "https://drive.google.com/drive/folders/1GZeOwuc5Q3a-bLYBegKhdBePiHMs08zS?usp=sharing",
    des: "Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. ",
    tech: "Cypress | Mocha Awsome report | BDD Cucumber",
  },
  {
    id: 3,
    image: img3,
    // image:"https://i0.wp.com/techrvw.com/wp-content/uploads/2019/11/Gearbest-Promotion-Xiaomi-Note-10.gif?ssl=1'",
    title: "Github (API)",
    github:
      "https://github.com/manishawadhe/SDET-Projects/tree/main/Postman%20Project",
    demo: "https://drive.google.com/drive/folders/1uvGwtm6LnEHp_qWketIntFPW1sJO__uD?usp=sharing",
    des: "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests.",
    tech: "Postman | Cypress | Rest Assured | jenkin",
  },
  {
    id: 4,
    image: img2,
    title: "Banjara Ride",
    github: "https://github.com/manishawadhe/MobileTestingProjectWithFrameWork",
    demo: "https://drive.google.com/drive/folders/1ifYUgzvAF3KpiI6m7wIyfRKMlM6UMRl3?usp=sharing",
    des: "BanjaraRide is Bhopal based Automobile Renting Enterprise where we provide travelling solutions from wide range of Motorbikes and Scooters Our aim is to become the one stop solution for each and every travel needed commodities.",
    tech: "Selenium | Appium | Emulator | Jenkin | Extend Report | Node.js | Eclipse IDE",
  },

  // {
  //   id:5,
  //   image:img5,
  //   title:'NetMeds.com',
  //   // github:'https://github.com/AswiniVerma/MenuDesign.git',
  //   // demo:'https://serene-hummingbird-b4f976.netlify.app/',
  //   des:"At netmeds.com, we help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in India. ",
  //   tech:"React | Redux | Chakra-UI | Json Server"
  // },
  // {
  //   id:6,
  //   image:img6,
  //   title:'Tic-Tac-Toe Game',
  //   github:'https://github.com/jkumari25/my-work/tree/main/tic-tac-toe-game',
  //   demo:'https://sage-lolly-493f16.netlify.app',
  //   des: "Tic-tac-toe is a game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares.The winner is the first player to get three of the same symbols in a row.",
  //   tech:"HTML | CSS | JavaScript"
  // },
];
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section id="portfolio">
      <h5 data-aos="zoom-in-down">My Recent Work</h5>
      <h2 data-aos="zoom-in-down">Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, des, tech }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img data-aos="zoom-in" src={image} alt={title} />
              </div>
              <h2
                style={{
                  marginBottom: "20px",
                  marginTop: "30px",
                  color: "#19C57C",
                }}
              >
                {title}
              </h2>
              <h4>{des}</h4>
              <h3>
                <span style={{ color: "red" }}>Tech Stack:</span> {tech}
              </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Documents
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
