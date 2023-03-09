import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'

const Headersocial = () => {
  return (
    <div className="header_social">
        <a href="https://linkedin.com" target="_blank" className="">
            <AiFillLinkedin/>
        </a>

        <a href="https://github.com" target="_blank" className="">
            <AiFillGithub/>
        </a>

        
        
    </div>
  )
}

export default Headersocial