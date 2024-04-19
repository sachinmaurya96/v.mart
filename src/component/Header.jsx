import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <nav>
        <div className="logo">
          <span>V.</span>Mart
        </div>
        <div className={`nav-links ${open && "open"}`}>
          <NavLink className="link" to={"/"}>Home</NavLink>
          <NavLink className="link" to={"/shop"}>Shop</NavLink>
          <NavLink className="link" to={"/blog"}>Blog</NavLink>
          <NavLink className="link" to={"/contact"}>Contact</NavLink>
        </div>
        <div className="actions">
          <div className="search">
            <CiSearch size={25} />
          </div>
          <NavLink to={"/wishlist"}>
          <div className="wishlist">
            <CiHeart size={25} />
            <span>02</span>
          </div>
          </NavLink>
          <NavLink to="/cart">
          <div className="cart">
            <CiShoppingCart size={25} />
            <span>02($250)</span>
          </div>
          </NavLink>
         <NavLink to={"/profile"}>
         <div className="user">
            <img src="/assets/user.png" alt="" />
          </div>
         </NavLink>
          <div className="menu" onClick={()=>setOpen(prev=>!prev)}>
            {open ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
z-index: 10;
position: sticky;
top: 0;
width: 100vw;
border-bottom: 1px solid lightgray;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  nav {
    width: 100%;
  background-color: #fff;
  padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 30px;
      font-weight: 800;
      span {
        color: crimson;
      }
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 30px;

      .link {
        text-transform: uppercase;
        transition: 0.3s;
        &:hover {
          color: crimson;
        }
      }
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 30px;
      .user{
        width: 30px;
          height: 30px;
          border-radius: 50%;
        img{
          height: 100%;
          width: 100%;
          background-position: center;
          object-fit: cover;
          border-radius: 50%;
        }
      }
      div {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }
      .menu {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    nav{
      .actions{
        .menu{
          display: flex;
          align-items: center;
          width: max-content;
        }

      }
      .nav-links {
        padding: 10px 100px;
        position: absolute;
        flex-direction: column;
        align-items: start;
        background-color: #fff;
        top: -200px;
        width: 100%;
        transition: all 0.3s linear;
       left: 0;
       z-index: -3;
       border-bottom: 1px solid lightgray;
       box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      }
      .open{
        top: 80px;
      }
    }
  }
  @media only screen and (max-width: 768px){
    nav{
      padding: 20px 50px;
      .actions{
        gap: 20px;
      }
      .nav-links{
        padding: 10px 50px;
      }
    }
   
  }
  @media only screen and (max-width: 622px){
    nav{
      .actions{
        .user{
          display: none;
        }
      }
      flex-direction: column;
      align-items: center;
      .nav-links{
        padding: 5px ;
      }
    }
  }
`;
export default Header;
