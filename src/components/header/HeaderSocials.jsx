import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jkumari25/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/jkumari25" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/jagriti2598/?hl=en" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
