import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container container_experience">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>REACT</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>LINUX</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* //end Frontend Development */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>NODE JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>EXPRESS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>REDUX</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon"/>
              <div>

              <h4>SANITY</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience