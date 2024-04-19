import React, { useState } from "react";
import PageTop from "../component/shared/PageTop";
import styled from "styled-components";
import { selectProducts } from "../utils";
import { products } from "../data/data";
import ProductCard from "../component/shared/ProductCard";

const ProductPage = () => {
  const [ctoggle, setCtoggle] = useState(true);
  const [btoggle, setBtoggle] = useState(true);
  const result = selectProducts(products);
  const category = new Set(products.map((product) => product.category));
  const brands = new Set(products.map((product) => product.brand));
  console.log(Array.from(category));

  return (
    <Wrapper>
      <PageTop title={"Shop"} />
      <div className="shop_container">
        <div className="left">
          <div className="filters">
            <div className="sort">
              <span>Sort</span>
              <select name="" id="">
                <option value="">New</option>
                <option value="">Price asendig</option>
                <option value="">Price disending</option>
                <option value="">Name asending</option>
                <option value="">Name Disending</option>
              </select>
            </div>
            <div className="category">
              <div
                className="title"
                onClick={() => setCtoggle((prev) => !prev)}
              >
                Category <span>{ctoggle ? "-" : "+"}</span>
              </div>
              <hr />
              <div className={`list ${ctoggle && "active"}`}>
                {Array.from(category).map((cat) => (
                  <span key={category}>
                    <input type="checkbox" /> {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="brands">
              <div
                className="title"
                onClick={(e) => setBtoggle((prev) => !prev)}
              >
                Brands <span>{btoggle ? "-" : "+"}</span>
              </div>
              <hr />
              <div className={`list ${btoggle && "active"}`}>
                {Array.from(brands).map((brand) => (
                  <span key={brand}>
                    <input type="checkbox" /> {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="price">
              <div>Price</div>
              <hr />
              <input placeholder="Enter Price" type="number" min={1} />
              <span>To</span>
              <input placeholder="Enter Price" type="number" min={1} />
              <span>$10 - $100</span>
              <button>Apply</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="product_list">
            {result.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .shop_container {
    position: relative;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 50px;
    margin: 50px;

    .left {
      .filters {
        display: flex;
        flex-direction: column;
        gap: 50px;
        .sort{
          display: flex;
          flex-direction: column;
          gap: 5px;
          span{
            font-size: 20px;
          }
          select{
            padding: 5px;
            outline: none;
            font-size: 16px;
          }
        }
        .category,
        .brands {
          .title {
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            span {
              color: gray;
            }
          }
          hr {
            margin: 10px 0;
          }
          .list {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out;

            display: flex;
            flex-direction: column;
            gap: 10px;
            span {
              display: flex;
              align-items: center;
              gap: 5px;
              input {
                width: 15px;
                height: 15px;
                cursor: pointer;
              }
            }
          }
          .active {
            max-height: 300px;
            transition: max-height 0.5s ease-in;
            overflow-y: scroll;
            border-bottom: 1px solid lightgray;

            &::-webkit-scrollbar {
              width: 5px;
            }
            &::-webkit-scrollbar-thumb {
              background: gray;
              border-radius: 5px;
            }
            &::-webkit-scrollbar-track {
              background-color: lightgray;
            }
          }
        }
        .price {
          display: flex;
          flex-direction: column;
          gap: 10px;
          div {
            font-size: 20px;
          }
          input {
            outline: none;
            padding: 5px;
            font-size: 18px;
          }
          span {
            text-align: center;
          }
          button {
            padding: 10px;
            border: none;
            outline: none;
            background-color: #5e4fe5;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  .product_list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  @media only screen and (max-width: 1024px) {
    .product_list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    .shop_container {
      gap: 20px;
      margin: 50px 10px;
    }
    .product_list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 600px) {
    .shop_container {
      grid-template-columns: 1fr;
      margin: 50px 10px;
      .left {
        position: absolute;
        left: -100%;
      }
    }
    .product_list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 426px) {
    .product_list {
      grid-template-columns: 100%;
    }
  }
`;
export default ProductPage;
