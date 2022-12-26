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
              <small>3+ Years Working</small>
            </article>
            
            <article className="about_card">
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>

            <article className="about_card">
              
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>

            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vero debitis enim odit aut ipsa aliquid ab! Odit fugit soluta eveniet! Enim maiores veritatis, doloremque eius mollitia ad consequuntur illum.
          Dolorum velit maiores aperiam eos, corporis voluptates! Aspernatur reprehenderit corrupti modi eius harum incidunt voluptatibus voluptas inventore porro amet vitae a temporibus soluta, similique animi magnam, labore deserunt ullam eos.</p>

          <a href="#contact" class="btn btn-primary">Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About