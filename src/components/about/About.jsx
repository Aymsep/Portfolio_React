import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import image from '../../assets/img1.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={image} alt="Me" className='about_me_image'/>
        </div>
        <div className="about_content">

          <div className="about_cards">

            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            
            <article className="about_card">
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>20+ World Wide</small>
            </article>

            <article className="about_card">
              
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>

            </article>
          </div>
          <p>I'm  a web developer and designer with a 2-year diploma in networking and protocols. I completed a 5-month bootcamp in full-stack JavaScript and a UI/UX bootcamp with Orange. I specialize in creating visually stunning websites with great animation and designing effective ads. I'm proficient in several programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I also use Figma for design work.</p>

          <a href="#contact" class="btn btn-primary">Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About