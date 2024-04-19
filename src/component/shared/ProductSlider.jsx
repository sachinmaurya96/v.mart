import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { selectProducts } from "../../utils";
import { products } from "../../data/data";
import styled from "styled-components";
import ProductCard from "./ProductCard";
 function ProductSlider() {
  const result = selectProducts(products,12)
  return (
    <Wrapper>
      <Swiper watchSlidesProgress={true}  
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75":{
            slidesPerView: 1,
          },
          "@1":{
            slidesPerView: 1,
          },

          '@1.50': {
            slidesPerView: 2,
          },
          "@1.75":{
            slidesPerView: 3,
          },
          "@2":{
            slidesPerView: 4,
          }
        }}
        spaceBetween={10}
         slidesPerView={4} 
         navigation={true} 
         loop={true}
         modules={[Navigation,Autoplay]} 
         className="mySwiper">
        {
          result.map((product)=> <SwiperSlide key={product.id}><ProductCard product={product}/></SwiperSlide>)
        }
       
      </Swiper>
    </Wrapper>
  );
} 
const Wrapper = styled.div`
padding: 20px 10px;
.swiper-button-prev{
 background-color: #fff;
 height: 100px;
 width: 50px;
 color: #262626;
}
.swiper-button-next{
  color: #262626;
 background-color: #fff;
 height: 100px;
 width: 50px;
}
@media only screen and (max-width: 600px){
  .swiper-button-prev,.swiper-button-next{
    display: none;
  }
}
`
export default ProductSlider