import React from "react";
import CTA from "./CTA";
import profile from "../../assets/profile.jpeg";
// import HeaderSocials from './HeaderSocials'
import "./header.css";
// import {BiDownvote} from 'react-icons/bi';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Manisha Wadhe</h1>
        <h5 className="text-light">Software Development Engineer In Test</h5>
        <CTA />
        {/* <HeaderSocials/> */}
        <div className="me">
          <img src={profile} alt="ME" />
        </div>

        {/* <a href="#contact" className='scroll__down'>
         <BiDownvote /> 
        </a> */}
      </div>
    </header>
  );
};

export default Header;
