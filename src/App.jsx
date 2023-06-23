import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
import Navbar from './components/navbar1/Navbar1';
import Stats from './components/github/Stats';
// import Header1 from './components/navbar/Navbar';
// import Nav from "./components/nav/Nav"



const App = () => {
  return (
    <>
        <Navbar />
        <Header/>
        <About/>
        <Experience/>
        <Stats />
        <Portfolio/>
        <Contact/>
        {/* <Nav /> */}
        {/* <Footer/> */}
    </>
  )
}

export default App
