import React from 'react'
import { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1ay5nxs', 'template_nz0dcxe', form.current, 'wFx6CPOhCHrImDXX5')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">

          <article className="option">
            <AiOutlineMail className="option_icon"/>
            <h4>Email</h4>
            <h5>bouraki655@ggmail.com</h5>
            <a href="mailto:bouraki655@ggmail.com">Send a message</a>
          </article>

          <article className="option">
            <BsGithub className="option_icon"/>
            <h4>Github</h4>
            <h5>@bouraki</h5>
            <a href="https://github.com/bouraki" target="_blank">Visite Now</a>
          </article>

          <article className="option">
            <BsLinkedin className="option_icon"/>
            <h4>Linkedin</h4>
            <h5>Get To Know Me</h5>
            <a href="https://wa.me/+888888888" target="_blank">Visite Now</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact