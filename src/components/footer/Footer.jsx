import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">Logo</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonial">testimonial</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><BsLinkedin/></a>
        <a href="https://instagram.com"><BsGithub/></a>
        <a href="https://twitter.com"><SiGmail/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;2023 Oumaima. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer