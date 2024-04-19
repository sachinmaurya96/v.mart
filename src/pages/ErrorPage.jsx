import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <div className="container">
        <h1>404</h1>
        <p>Sorry, The page you are looking for does not exist</p>
        <div className="action">
          <button onClick={()=>navigate(-1)}>Previous</button>
          <button onClick={()=>navigate("/")}>Home</button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 100vw;
height: 100vh;
  .container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    h1{
      font-size: 100px;
    }
    p{
      font-size: 20px;
    }
    .action{
      display: flex;
      gap: 20px;
      button{
        font-size: 15px;
        padding: 5px 10px;
        cursor: pointer;
        border: none;
        outline:none;
        transition: 0.3s;
        background-color: #aaa9a9;

        &:hover{
          background-color: black;
          color: #fff;
        }
      }
    }
  }

`
export default ErrorPage
