import React, { useId, useState } from "react";
import PageTop from "../component/shared/PageTop";
import styled from "styled-components";
import ProductSlider from "../component/shared/ProductSlider";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import StarRatings from "react-star-ratings";
import { calculateDiscountedPrice } from "../utils";
import { CiHeart } from "react-icons/ci";

const SingleProductPage = () => {
  const [image, setImage] = useState("");
  const params = useParams();
  let product = products.filter((product) => product.id == params.id);
  product = product[0];

  return (
    <Wrapper>
      <PageTop title={"Product Overview"} />
      <div className="product_details ">
        <div className="left">
          <div className="image">
            <img
              src={image === "" ? product.thumbnail : image}
              alt={product.title}
            />
          </div>
          <div className="img_navigation">
            {product.images.map((img, index) => (
              <span
                className={`nav_img ${image === img && "active"}`}
                key={index}
                onClick={() => setImage(img)}
              >
                <img src={img} alt={img} />
              </span>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="name_price">
            <span className="name">{product.title}</span>
            <div className="price">
              <span className="real_price">
                $<s>{product.price}</s>
              </span>
              <span className="current_price">
                $
                {Math.floor(
                  calculateDiscountedPrice(
                    product.price,
                    product.discountPercentage
                  )
                )}
              </span>
            </div>
          </div>
          <div className="rating_review">
            <span className="rating">
              <StarRatings
                rating={product.rating}
                starRatedColor="orange"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
            </span>
            <span className="review">Sell all reviews</span>
          </div>
          <div className="color">
            <div>Color</div>
            <div>
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="size">
            <div>Size</div>
            <div>
              <span className="active">XXS</span>
              <span>XS</span>
              <span>S</span>
              <span>ML</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
          <div className="img_navigation">
            {product.images.map((img, index) => (
              <span
                className={`nav_img ${image === img && "active"}`}
                key={index}
                onClick={() => setImage(img)}
              >
                <img src={img} alt={img} />
              </span>
            ))}
          </div>
          <div className="cart_button">
            <button className="cart_btn">Add to Cart</button>
            <button className="hert_btn">
              <CiHeart size={25} />
            </button>
          </div>
          <div className="description">
            <strong>Description</strong>
            <hr />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <h2>Similar Product...</h2>
      <ProductSlider />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .product_details {
    padding: 0 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    margin: 50px 0;
    .img_navigation {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      .nav_img {
        width: 100px;
        height: 100px;
        border: 2px solid lightgray;
        overflow: hidden;
        cursor: pointer;
        border-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-position: center;
        }
      }
      .active {
        border: 3px solid #fff;
        outline: 3px solid #5e4fe5;
      }
    }
    .left {
      .image {
        width: 100%;
        height: 500px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-position: center;
        }
      }
      .img_navigation {
        display: none;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .name_price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
        }
        .price {
          .real_price {
            color: gray;
          }
        }
      }
      .rating_review {
        display: flex;
        align-items: center;
        gap: 15px;

        .review {
          color: #00befd;
          cursor: pointer;
        }
      }
      .color {
        display: flex;
        flex-direction: column;
        gap: 15px;
        div:first-child {
        }
        div:last-child {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        span {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          cursor: pointer;
          &:first-child {
            background-color: red;
          }
          &:nth-child(2) {
            background-color: green;
          }
          &:nth-child(3) {
            background-color: yellow;
          }
        }
        .active {
          border: 3px solid #fff;
          outline: 3px solid #5e4fe5;
        }
      }
      .size {
        display: flex;
        flex-direction: column;
        gap: 15px;
        div:last-child {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        span {
          height: 50px;
          width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background-color: lightgray;
          padding: 0 10px;
          cursor: pointer;
        }
        .active {
          background-color: #5e4fe5;
          color: #fff;
        }
      }
      .cart_button {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
        display: grid;
        grid-template-columns: 80% 20%;
        gap: 15px;
        .cart_btn {
          padding: 15px 0;
          border: none;
          outline: none;
          background-color: #5e4fe5;
          border-radius: 10px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
        .hert_btn {
          height: 100%;
          width: 60%;
          background-color: lightgray;
          border-radius: 10px;
          border: 1px solid lightgray;
          cursor: pointer;
        }
      }
      .description {
        margin-top: 20px;
        hr {
          margin: 20px 0;
        }
      }
    }
  }

  h2 {
    margin: 0 20px;
    font-weight: 600;
    font-style: 20px;
  }
  @media only screen and (max-width: 1024px) {
    .product_details {
      padding: 0 50px;
    }
  }
  @media only screen and (max-width: 768px) {
    .product_details {
      grid-template-columns: 100%;
      .left {
        .img_navigation {
          display: flex;
          margin-top: 50px;
        }
        .image {
          height: 400px;
        }
      }
      .right {
        .img_navigation {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .product_details {
      padding: 0 10px;
      .left {
        .img_navigation {
          .nav_img {
            width: 70px;
            height: 70px;
          }
        }
        .image {
          height: 300px;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .product_details {
      .left {
        .img_navigation {
          .nav_img {
            width: 50px;
            height: 50px;
          }
        }
      }
      .right{
        .cart_button {
        grid-template-columns: 60% 40%;
      }
      }
    }
  }
  @media only screen and (max-width: 321px){
    .left {
        .image {
          height: 250px;
        }
      }
  }
`;
export default SingleProductPage;
