import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import StarRatings from "react-star-ratings";
import { calculateDiscountedPrice } from "../../utils";
const OneProductSlide = ({products=[]}) => {
  return (
    <Wrapper>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          products.map((product)=>(
            <SwiperSlide key={product.id}>
          <div className="card">
            <div className="image">
              <img
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
            <div className="content">
              <div className="product_info">
                <div className="name">
                  <span className="title">{product.title}</span>
                  <span className="stars">
                  <StarRatings
                      rating={product.rating}
                      starRatedColor="orange"
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                    />
                  </span>
                </div>
                <div className="price">
                  <span className="current_price">${Math.floor(calculateDiscountedPrice(product.price,product.discountPercentage))}</span>
                  <span className="real_price">
                    <s>${product.price}</s>
                  </span>
                </div>
              </div>
              <div className="time">
                <div className="days">
                  <span className="time">00</span>
                  <span className="time_name">Days</span>
                </div>
                <div className="hour">
                  <span className="time">00</span>
                  <span className="time_name">Hours</span>
                </div>
                <div className="min">
                  <span className="time">00</span>
                  <span className="time_name">Min</span>
                </div>
                <div className="sec">
                  <span className="time">00</span>
                  <span className="time_name">Sec</span>
                </div>
              </div>
              <div className="btn">
                <Link className="link">Shop Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .card {
    padding: 10px;
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .product_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          display: flex;
          flex-direction: column;
          .title {
            padding: 0;
          }
        }
        .price {
          .real_price {
            color: lightgray;
          }
        }
      }
      .time {
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
      .btn {
        display: flex;
        justify-content: center;
        transition: all 0.2s;
        margin-top: 10px;
        .link {
          border-bottom: 1px solid #262626;
          font-weight: 600;
          &:hover {
            color: crimson;
            border-bottom: 1px solid crimson;
          }
        }
      }
    }
  }
`;
export default OneProductSlide;
