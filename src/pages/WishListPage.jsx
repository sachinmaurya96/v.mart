import React from "react";
import PageTop from "../component/shared/PageTop";
import styled from "styled-components";
import { CiTrash } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import { selectProducts } from "../utils";
import { products } from "../data/data";
import { IoIosCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const WishListPage = () => {
  const selectproduct = selectProducts(products);
  return (
    <Wrapper>
      <PageTop title={"Wishlist"} />
      <div className="product_list">
        <ul>
          {selectproduct?.map((product) => (
            <li>
              <div className="action">
                <CiTrash color="red" size={20} cursor={"pointer"}/>
              </div>
              <div className="product">
                <Link to={`/product/${product.id}`}>
                <div className="image">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                </Link>
              </div>
              <div className="price">${product.price}</div>
              <div className="stoc">
                <span>
                  <IoIosCheckmark color="green" size={20}/> in stock
                </span>
              </div>
              <div className="cart_btn">
                <button>
                  <BsCartCheck />
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .product_list {
    padding: 50px 100px;
    ul {
      list-style: none;
      li {
        display: flex;
        padding: 20px 0;
        border-top: 1px solid lightgray;
        justify-content: space-between;
        .image {
          width: 100px;
          height: 50px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: center;
          }
        }
        button {
          padding: 10px 20px;
          display: flex;
          gap: 5px;
          align-items: center;
          width: max-content;
          border: none;
          outline: none;
          background-color: #5e4fe5;
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
        }
        .stoc{
         span{
          display: flex;
          align-items: center;
         }
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
    .product_list{
      padding: 50px 10px;
    }
  }
  @media only screen and (max-width: 560px){
    .product_list{
      padding: 50px 100px;
      ul{
        li{
          position: relative;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          .image{
            width: 100%;

          }
          .action{
            position: absolute;
            right: 5px;
            top: 5px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 426px){
    .product_list{
      padding: 50px 10px;
    }
  }
`;
export default WishListPage;
