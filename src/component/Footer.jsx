import React from "react";
import styled from "styled-components";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="container">
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="address">
            <span>Your address will be here</span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="no">
            <span>01234 567 890</span>
            <span>01234 567 890</span>
          </div>
          <div className="emails">
            <span>info@example.com</span>
            <span>info@example.com</span>
          </div>
        </div>
        <div className="products">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Best Seller</a>
            </li>
            <li>
              <a href="#">Trendy Items</a>
            </li>
            <li>
              <a href="#">Best Deals</a>
            </li>
            <li>
              <a href="#">On Sale Products</a>
            </li>
            <li>
              <a href="#">Featured Products</a>
            </li>
          </ul>
        </div>
        <div className="info">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Payment Method</a>
            </li>
            <li>
              <a href="#">Product Warranty</a>
            </li>
            <li>
              <a href="#">Return Process</a>
            </li>
            <li>
              <a href="#">Payment Security</a>
            </li>
          </ul>
        </div>
        <div className="news">
          <h4>NewsLatter</h4>
          <span>
            Subscribe our newsletter and get all update of our product
          </span>

          <div className="input-field">
            <input type="text" placeholder="Enter Your Email Here" />
            <GrSend size={20} />
          </div>
          <div className="follow">
            <span>Follow us</span>
            <div className="social-links">
              <a href="#">Facebook</a> -<a href="#">Twitter</a> -
              <a href="#">Linkedin</a>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
border-top: 1px solid lightgray;
  padding: 50px 0;
  background-color: #ebf4f4;
  span{
    font-family: 'Montserrat', sans-serif
  }
  footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    h4 {
      font-size: 20px;
      text-transform: uppercase;
      border-bottom: 1px solid lightgray;
      width: max-content;
    }
    a:hover{
      color: crimson;
      transition: 0.2s;
    }
    .contact {
      display: flex;
      flex-direction: column;
      gap: 30px;
      div {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
    .products {
      display: flex;
      flex-direction: column;
      gap: 30px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
          list-style: none;
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 30px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
          list-style: none;
        }
      }
    }
    .news {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .input-field {
        display: flex;
        align-items: center;
        border-bottom: 1px solid lightgray;
        width: max-content;
        padding: 10px 0;
        input {
          border: none;
          outline: none;
          font-size: 15px;
          background: none;
        }
      }
      .follow {
        display: flex;
        flex-direction: column;
        gap: 10px;
        span {
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
  @media only screen and (max-width: 971px){
    footer{
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
    }
  }
  @media only screen and (max-width: 426px){
    footer{
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }
`;
export default Footer;
