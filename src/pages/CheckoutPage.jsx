import React from "react";
import styled from "styled-components";

const CheckoutPage = () => {
  return (
    <Wrapper>
      <div className="checkout_container">
        <div className="left">
          <div className="login">
            <div className="detail">
              <div className="phone">
                <span>Phone</span>
                <span>+919695439912</span>
              </div>
              <div className="message">Logout & Sign in to another account</div>
              <button>Continue checkout</button>
            </div>
            <div className="advantage">
              <span>Advantages our wsecure login</span>
              <span>Easily track orders, hassle free returns.</span>
              <span>Get relevent alerts and reccommendation.</span>
              <span>Wishlist , Reviews, Ratings and more.</span>
            </div>
          </div>
          <div className="address">
            <div className="existing_address">
              <input type="checkbox" />
              <div className="details">
                <span>Sachin Maurya +919695439912</span>
                <span>
                  00000,Madafarpur Patti Subdistrict, Pratapgarh District, Uttar
                  Pradesh
                </span>
                <button>deliver here</button>
              </div>
              <button>EDIT</button>
            </div>
            <div className="add_new">
              <span>Add a new address</span>
            </div>
          </div>
          <div className="order_summary">
            <div className="product">
              <div className="image">
                <img src="/assets/user.png" alt="" />
              </div>
              <div className="content">
                <div className="title"></div>
                <div className="conter">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <div className="price">
                  <span>165</span>
                  <span>15% off 1 offer availble</span>
                </div>
                <div className="remove">
                  <span>REMOVE</span>
                </div>
              </div>
            </div>
            <div className="email">
              <span>Orderconfirmation email will be sent to <input type="email" placeholder="Enter your email ID"/></span>
              <button>CONTINUE</button>
            </div>
          </div>
          <div className="payment_option">
            <h2>PAYMENT OPTIONS</h2>
            <div className="upi">
              <input type="checkbox" />
              <div className="option">
                <h3>Choose an Option</h3>
                <div><input type="checkbox" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price_deatil">
            <h2>PRICE DETAILS</h2>
            <div className="detail">
              <div>
                <span>Price(2 items)</span>
                <span>$829</span>
              </div>
              <div>
                <span> Delivery Charges</span>
                <span>55</span>
              </div>
              <div>
                <span>Total Payable</span>
                <span>884</span>
              </div>
            </div>
            <div className="message">
              <span>your total Saving on this order 614</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default CheckoutPage;
