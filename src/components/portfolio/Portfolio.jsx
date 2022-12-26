import React from 'react'
import './potfolio.css'
import image from '../../assets/portfolio.png'



const data = [
  {
    id:1,
    src:image,
    title:'Crypto Website moderne',
    github:'https://github.com/',
    demo:'https://github.com/'
  },
  {
    id:2,
    src:image,
    title:'Camping Website',
    github:'https://github.com/',
    demo:'https://github.com/'
  },
  {
    id:3,
    src:image,
    title:'Restaurant Website',
    github:'https://github.com/',
    demo:'https://github.com/'
  },
  {
    id:4,
    src:image,
    title:'Javascript Projects',
    github:'https://github.com/',
    demo:'https://github.com/'
  },
  {
    id:5,
    src:image,
    title:'Crypto Website moderne',
    github:'https://github.com/',
    demo:'https://github.com/'
  },
  {
    id:6,
    src:image,
    title:'Crypto Website moderne',
    github:'https://github.com/',
    demo:'https://github.com/'
  }
]






const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container_portfolio">
        {
          data.map(({id ,src, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={src} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_cta">
                <a href={github} className="btn ">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live demo</a>
            </div>
          </article>
            )
            
          })
        }
       
      </div>
    </section>
  )
}

export default Portfolio