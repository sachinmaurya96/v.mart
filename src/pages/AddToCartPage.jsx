import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";
import ProductSlider from "../component/shared/ProductSlider";
import { Link } from "react-router-dom";
import PageTop from "../component/shared/PageTop";

const AddToCartPage = () => {
  const [counter,setCounter] = useState(1)
  return (
    <Wrapper>
      <PageTop title={"Shoping Cart"}/>
      <div className="cart_detail container">
        <div className="left">
          <h2>Products</h2>
          <div className="cart_product">
            <div className="image">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <div className="top">
                <div className="product_info">
                  <span className="name">Basic Tee</span>
                  <span className="color_size">Sienna | Large</span>
                  <span className="price">$32.00</span>
                </div>
                <div className="quntity">
                  <div className="counter">
                    <span>
                      <HiMinusSmall />
                    </span>
                    <span>1</span>
                    <span>
                      <GoPlus />
                    </span>
                  </div>
                </div>
                <div className="action">
                  <RxCross2 />
                </div>
              </div>
              <div className="bottom">
                <IoCheckmark color="green" />
                <span>In stock</span>
              </div>
            </div>
          </div>
          <div className="cart_product">
            <div className="image">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <div className="top">
                <div className="product_info">
                  <span className="name">Basic Tee</span>
                  <span className="color_size">Sienna | Large</span>
                  <span className="price">$32.00</span>
                </div>
                <div className="quntity">
                  <div className="counter">
                    <span onClick={()=>counter >= 2 && setCounter(prev=>prev-1)}>
                      <HiMinusSmall />
                    </span>
                    <span>{counter}</span>
                    <span onClick={()=>setCounter(prev=>prev+1)}>
                      <GoPlus />
                    </span>
                  </div>
                </div>
                <div className="action">
                  <RxCross2 />
                </div>
              </div>
              <div className="bottom">
                <IoCheckmark color="green" />
                <span>In stock</span>
              </div>
            </div>
          </div>
          <div className="cart_product">
            <div className="image">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <div className="top">
                <div className="product_info">
                  <span className="name">Basic Tee</span>
                  <span className="color_size">Sienna | Large</span>
                  <span className="price">$32.00</span>
                </div>
                <div className="quntity">
                  <div className="counter">
                    <span>
                      <HiMinusSmall cursor={"pointer"}/>
                    </span>
                    <span>1</span>
                    <span>
                      <GoPlus cursor={"pointer"}/>
                    </span>
                  </div>
                </div>
                <div className="action">
                  <RxCross2 />
                </div>
              </div>
              <div className="bottom">
                <IoCheckmark color="green" />
                <span>In stock</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Order Summary</h2>
          <div className="summary">
            <div className="subtotal">
              <span className="name">subtotal</span>
              <span className="price">$90</span>
            </div>
            <div className="shiping">
              <span className="name">Shiping statement <FaInfoCircle color="gray" cursor={"pointer"} /></span>
              <span className="price">$5</span>
            </div>
            <div className="tax">
              <span className="name">Tax statement <FaInfoCircle color="gray" cursor={"pointer"}/></span>
              <span className="price">$8.32</span>
            </div>
            <div className="apply_coupen">
              <input type="text" placeholder="Enter Coupen Code" />
              <button>Apply Coupen</button>
            </div>
            <div className="total">
              <span className="name">Order Total</span>
              <span className="price">$112</span>
            </div>
            <div className="checkout">
             <Link className="button" to={"/checkout"}> Checkout</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="like_product">
      <h2>You may also Like...</h2>
      <div className="similar_product">
        <ProductSlider />
      </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`

  .cart_detail {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 150px;
    h2{
      font-weight: 600;
    }
    .left {
      .cart_product {
        width: 100%;
        display: flex;
        gap: 20px;
        padding: 20px 0;
        border-top: 1px solid lightgray;
        &:last-child {
          border-bottom: 1px solid lightgray;
        }
        .image {
          width: 200px;
          height: 200px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: center;
          }
        }
        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .top {
            display: flex;
            justify-content: space-between;
            align-items: start;
            .product_info {
              display: flex;
              flex-direction: column;
              gap: 5px;
              .name {
              }
              .color_size {
                color: gray;
              }
              .price {
              }
            }
            .quntity {
              .counter {
                display: flex;
                align-items: center;
                gap: 20px;
                padding: 5px 10px;
                border: 1px solid lightgray;
                border-radius: 10px;
                span{
                  display: flex;
                  align-items: center;
                }
              }
            }
            .action {
            }
          }
          .bottom {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }
    }
    .right {
      .summary {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid lightgray;
          padding: 10px 0;
          span{
            display: flex;
            align-items: center;
            gap: 10px;
          }
          span:first-child {
            color: gray;
          }
          input {
            border: none;
            outline: none;
            font-size: 16px;
          }
          button{
            padding: 10px 20px;
            border: none;
            background-color: #5e4fe5;
            color: #fff;
            border-radius: 10px;
            cursor: pointer;
          }
        }
        .total {
          
          .name {
            color: black;
          }
        }
        .checkout {
          width: 100%;
          .button{
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 15px;
            font-size: 18px;
            font-weight: 600;
            border-radius: 10px;
            border: none;
            background-color: #5e4fe5;
            color: #fff;
          }
        }
      }
    }
  }
  .like_product{
    margin-top: 50px;
    h2{
      font-weight: 600;
      padding: 0 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    .cart_detail{
      grid-template-columns: 100%;
      .right{
        .summary{
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 500px){
    .cart_detail{
      .left{
      .cart_product{
        position: relative;
        flex-direction: column;
        .image{
          width: 100%;
          height: 300px;
          .img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: center;
          }
        }
        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .product_info {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 5px;
              .name {
              }
              .color_size {
                color: gray;
              }
              .price {
              }
            }
            .quntity {
              .counter {
                display: flex;
                align-items: center;
                gap: 20px;
                padding: 5px 10px;
                border: 1px solid lightgray;
                border-radius: 10px;
                span{
                  display: flex;
                  align-items: center;
                }
              }
            }
            .action {
              position: absolute;
              top: 20px ;
              right: 10px;
            }
          }
          .bottom {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }
    }
    }
    
  }
`;
export default AddToCartPage;
