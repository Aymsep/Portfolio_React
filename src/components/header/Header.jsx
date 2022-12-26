import React from 'react'
import './header.css'
import Calltoaction from './Calltoaction'
import Me from '../../assets/image-1.jpg'
import Headersocial from './Headersocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Lorem Ipsum</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Calltoaction />

          <Headersocial/>
        <div className="me">
          <img src={Me} alt="" />
          </div>

          <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header