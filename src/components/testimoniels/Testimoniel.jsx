import React from 'react'
import './testimoniel.css'
import avatar from '../../assets/image-1.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    client_image: avatar,
    client_name:'lorem lorem',
    client_review:'If the answer is No, you need to become aware of the importance of positive reviews, and our post about positive reviews examples: copy and paste ideas is here to help you.'
  },
  {
    client_image: avatar,
    client_name:'ipsum ipsum',
    client_review:'If the answer is No, you need to become aware of the importance of positive reviews, and our post about positive reviews examples: copy and paste ideas is here to help you.'
  },
  {
    client_image: avatar,
    client_name:'Lorem ipsum',
    client_review:'If the answer is No, you need to become aware of the importance of positive reviews, and our post about positive reviews examples: copy and paste ideas is here to help you.'
  },
  {
    client_image: avatar,
    client_name:'My My',
    client_review:'If the answer is No, you need to become aware of the importance of positive reviews, and our post about positive reviews examples: copy and paste ideas is here to help you.'
  },
  {
    client_image: avatar,
    client_name:'gofra gofra',
    client_review:'If the answer is No, you need to become aware of the importance of positive reviews, and our post about positive reviews examples: copy and paste ideas is here to help you.'
  },
  {
    client_image: avatar,
    client_name:'lorem lorem',
    client_review:'If the answer is No, you need to become aware of the importance of positive reviews, and our post about positive reviews examples: copy and paste ideas is here to help you.'
  }
]

const Testimoniel = () => {
  return (
    <section id="testimoniel">
      <h5>Reviews from clients</h5>
      <h2>Testimoniels</h2>
      <Swiper className="container container_testimonial" 
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      >
        {
          data.map(({client_image, client_name, client_review},index) => {
            console.log(client_image)
            return(
              <SwiperSlide key={index} className="testimoniel">
              <div className="client_avatar">
                <img src={client_image} alt="" />
              </div>
                <h5 className="client_name">{client_name}</h5>
                <small className="client_review">
                  {client_review}
                </small>
            </SwiperSlide>
            )
          })
        }
       


      </Swiper>
    </section>
  )
}
export default Testimoniel
