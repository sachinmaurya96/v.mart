import React from "react";
import styled from "styled-components";

const AddToCartBtn = () => {
  return (
    <Wrapper>
      <button className="cartBtn">
        <svg
          className="cart"
          fill="white"
          viewBox="0 0 576 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
        </svg>
        ADD TO CART
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .cartBtn {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    color: white;
    font-weight: 500;
    position: relative;
    background-color: rgb(29, 29, 29);
    box-shadow: 0 20px 30px -7px rgba(27, 27, 27, 0.219);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }

  .cart {
    z-index: 2;
  }

  .cartBtn:active {
    transform: scale(0.96);
  }


  .cartBtn:hover .cart {
    animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slide-in-left {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export default AddToCartBtn;
