import React from 'react'
import './service.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container_services container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services_list">
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>Conducting user research to understand the needs and behaviors of your client's</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>Creating wireframes and prototypes to visualize the layout, content</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>Designing the visual elements of the user interface, including color schemes, typography, and imagery</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>Designing the interactions and animations within the user interface to enhance the user experience</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>Conducting usability testing to evaluate the effectiveness and usability of the user interface</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>lorem  loremloremloremlorem lorem  lorem lorem loremlorem</p>
            </li>
          </ul>
        </article>
            {/* //end of UI/UX Design */}

        <article className="service">
          <div className="service_head">
            <h3>Web Developement</h3>
          </div>
          <ul className="services_list">
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>Creating the user-facing side of a website or web application using HTML, CSS, and JavaScript to ensure an engaging and intuitive user interface</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p> Developing the server-side of a website or web application using server-side languages like Node.js, to create dynamic and functional web pages.</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p> Creating RESTful APIs to enable communication between the front-end and back-end of a website or web application.</p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>Building and managing databases to store and manage data for websites and web applications </p>
            </li>
            
            <li><AiOutlineCheck className="service_list_icon"/>
            <p>optimization: Improving the loading speed and overall performance of websites and web applications to ensure a smooth user experience.</p>
            </li>
          </ul>
        </article>
            {/* //end of web developement */}

            {/* //end of search engine optimisation */}
      </div>
    </section>
  )
}

export default Service