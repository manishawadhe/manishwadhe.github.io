import React,{useEffect} from 'react'
import './portfolio.css'
import img1 from '../../assets/tripoto.png'
import img2 from '../../assets/Quikr.png'
import img3 from '../../assets/Gearbest.png'
import img4 from '../../assets/Lenskart.png'
import Aos from "aos"
import "aos/dist/aos.css";
// import img5 from '../../assets/portfolio5.jpg'
// import img6 from '../../assets/tic-tac-toe.png'

const data =[
  {
    id:1,
    image:img1,
    // image:"https://ph-files.imgix.net/d45186b8-1b1d-41bf-95b1-93a6aeea4caa.gif?auto=format&fit=crop",
    title:'Tripoto.com',
    github:'https://github.com/jkumari25/glistening-rock-2573',
    demo:'https://lively-hotteok-119124.netlify.app',
    des:"Tripoto is social travel platform to share and discover travel experiences, stories, community, tourism guides, hotels, holidays, getaways, attractions. ",
    tech: "HTML | CSS | JavaScript"
  },
  {
    id:2,
    image:img4,
    // image:"https://miro.medium.com/max/1200/1*JhkS75vF0ZQFq26Phhv6Fg.gif",
    title:'Lenskart.com',
    github:'https://github.com/jkumari25/Lenskart.com',
    demo:'https://fascinating-cajeta-e3c16d.netlify.app',
    des: "Lenskart is a leading e-commerce company that maintains an online optical store packed with both classic and trendy eyeglasses, lenses and more at affordable prices. ",
    tech:"React.js | CSS | Redux | Mongo-db | Mongoose | Node.js | Chakra-UI | Mongo Atlas| JWT "
  },
  {
    id:3,
    image:img3,
    // image:"https://i0.wp.com/techrvw.com/wp-content/uploads/2019/11/Gearbest-Promotion-Xiaomi-Note-10.gif?ssl=1'",
    title:'Gearbest.com',
    github:'https://github.com/jkumari25/Gearbest.com',
    demo:'https://gear-best-teal.vercel.app/',
    des: "This is the clone of GearBest website . It is a ecommerce website. Online Shopping at Gearbest for the best cell phones, electronic gadgets, toys, sporting goods, home products and apparel for geeks at unbeatable great.",
    tech:"React.js | Redux | Styled-Component | JavaScript | HTML | CSS | Chakra-UI | Json Server"
  },
  {
    id:4,
    image:img2,
    title:'Quikr Bazzar.com',
    github:'https://github.com/jkumari25/Quikr-bazaar.com',
    demo:'https://cute-llama-5d319b.netlify.app/',
    des: "Quikr is an online classifieds company that helps people buy, sell, and rent in categories such as furniture, mobile phones, cars & bikes, services, pets, real estate, jobs, education, entertainment, matrimonial, and more. Users can post free ads and reply to ads on Quikr in cities.",
    tech:"React.js | Redux | Styled-Component | JavaScript | HTML | CSS | Chakra-UI | Json Server"
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
]
const Portfolio = () => {
  useEffect(()=>{
    Aos.init({ duration: 3000})
  },[])
  return (
    <section id='portfolio'>
      <h5 data-aos="zoom-in-down">My Recent Work</h5>
      <h2 data-aos="zoom-in-down">Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo,des,tech})=>{
            return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img data-aos="zoom-in" src={image} alt={title} />
            </div>
            <h2 style={{marginBottom:"20px",marginTop:"30px",color:"#19C57C"}}>{title}</h2>
            <h4>{des}</h4>
            <h3><span style={{color:"red"}}>Tech Stack:</span> {tech}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' >Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
            </article>
            )
            
          })
        }
            
          
        
      </div>
    </section>
  )
}

export default Portfolio
