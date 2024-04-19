import React from "react";
import FullSlider from "../component/FullSlider";
import styled from "styled-components";
import OfferCard from "../component/OfferCard";
import ProductCard from "../component/shared/ProductCard";
import OneProductSlide from "../component/shared/OneProductSlide";
import ReviewCard from "../component/shared/ReviewCard";
import BlogCard from "../component/shared/BlogCard";
import ServiceCard from "../component/shared/ServiceCard";
import { findHighestDiscountProducts, selectProducts } from "../utils";
import { blogs, homeSlideimg, products } from "../data/data";

const HomePage = () => {
  const result = selectProducts(products);
  const bestDearProduct = selectProducts(products,6)
  const selectBlog = selectProducts(blogs,2)
  return (
    <Wrapper>
      <FullSlider images={homeSlideimg}/>
      <div className="offer-cards container">
        <OfferCard img={"/assets/offer2.png"} />
        <OfferCard img={"/assets/offer3.png"} />
        <OfferCard img={"/assets/offer1.png"} />
      </div>
      <div className="popular_product container">
        <div className="title">
          <h2>Popular Products</h2>
          <p>All Popular product find here</p>
        </div>
        <div className="products_grid">
          {result.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
      <div className="offer-cards">
        <OfferCard img={"/assets/offer4.png"} />
        <OfferCard img={"/assets/offer5.png"} />
        <OfferCard img={"/assets/offer6.png"} />
      </div>
      <div className="best_deal container">
        <div className="left">
          <div className="title">
            <h2>Best Deal</h2>
            <p>Exclusive deals for you</p>
          </div>
          <OneProductSlide products={findHighestDiscountProducts(products,6)}/>
        </div>
        <div className="right">
          <div className="title">
            <h2>On Sale Products</h2>
            <p>All featured product find here</p>
          </div>
          <div className="sale-product">
            {bestDearProduct.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </div>
        </div>
      </div>
      <div className="service_detail">
        <div className="container">
          <ServiceCard
            path={"/assets/van.png"}
            content={{ title: "Free Shiping", paragraph: "Start from $100" }}
          />
          <ServiceCard
            path={"/assets/volet.png"}
            content={{ title: "Free Shiping", paragraph: "Start from $100" }}
          />
          <ServiceCard
            path={"/assets/secure.png"}
            content={{ title: "Free Shiping", paragraph: "Start from $100" }}
          />
        </div>
      </div>
      <div className="review_blog container">
        <div className="review">
          <div className="title">
            <h2>clients review</h2>
            <p>Clients says about us</p>
          </div>
          <div className="review_container">
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <div className="blog">
          <div className="title">
            <h2>From the blog</h2>
            <p>Find all latest update here</p>
          </div>
          <div className="blog_container">
           {
            selectBlog.map((blog)=> <BlogCard key={blog.id} blog={blog}/>)
           }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  .offer-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 50px 0;
  }
  .popular_product {
    .title {
      text-align: center;
      padding: 20px 0;
      text-transform: uppercase;
    }
    padding: 50px 0;
    .products_grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
  }
  .best_deal {
    padding: 50px 0;
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 100px;
    .title {
      padding: 20px 0;
      text-transform: uppercase;
    }
    .right {
      .sale-product {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
      }
    }
  }
  .review_blog {
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    .title {
      padding: 20px 0;
      h2 {
        text-transform: uppercase;
      }
    }
    .review {
      .review_container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
    .blog {
      .blog_container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
  .service_detail {
    background: linear-gradient(
        0deg,
        rgba(60, 172, 223, 0.6),
        rgba(60, 172, 223, 0.6)
      ),
      url("/assets/service.png");
    padding: 100px 0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 200px;
    }
  }
  @media only screen and (max-width: 768px){
    .popular_product {
    .products_grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
  .review_blog {
    padding: 50px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    
  }
  .best_deal {
    grid-template-columns:100%;
    gap: 30px;
    .right {
      .sale-product {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  .service_detail {
    padding: 50px 0;
    .container {
      padding: 0 30px;
    }
  }
  }
  @media only screen and (max-width: 426px){
    .popular_product {
    .products_grid {
      grid-template-columns: 100%;
      gap: 10px;
      padding: 0 10px;
    }
  }
  .review_blog {
    padding: 50px 10px;
    grid-template-columns: 1fr;
    gap: 50px;
    .review{
      width: 100%;

    }
  }
  .best_deal {
    padding: 50px 10px;
    .right {
      .sale-product {
        grid-template-columns: 100%;
        
      }
    }
  }
  .service_detail {
    padding: 50px 0;
    .container{
      flex-direction: column;
      gap: 20px;
    }
  }
  .offer-cards {
    grid-template-columns: 100%;
    padding: 50px 10px;
  }
  }
`;
export default HomePage;
