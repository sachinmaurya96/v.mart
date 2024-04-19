import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Autoplay} from 'swiper/modules';

const FullSlider = ({images}) => {
  return (
    <Wrapper>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {
          images?.map((img,index)=><SwiperSlide key={index+1}><img src={img} alt={img} /></SwiperSlide>)
        }
      </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
position: relative;
width: 100%;
.swiper-container{
  overflow-x: hidden;
}
  .swiper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.swiper-slide {
  width: fit-content;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}



`
export default FullSlider
