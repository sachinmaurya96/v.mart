import React from 'react'
import styled from 'styled-components'
import Breadcrumb from './Breadcrumb'

const PageTop = ({title}) => {
  return (
    <Wrapper>
       <div className="title ">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    .title{
  height: 300px ;
  width: 100%;
  background: linear-gradient(
        0deg,
        rgba(60, 172, 223, 0.8),
        rgba(60, 172, 223, 0.8)
      ),
      url("/assets/cover.png");
      object-fit: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 0 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
  h1{
    font-size: 50px;

  }
  .breadcrumb{
    font-size: 20px;
    font-weight: 600;
  }
}
@media only screen and (max-width: 768px) {
  .title{
    padding: 0 50px;
    height: 200px;
    h1{
      font-size: 40px;
    }
  }
}
@media only screen and (max-width: 426px){
  .title{
    padding: 0 10px;
    height: 150px;
    h1{
      font-size: 25px;
    }
    .breadcrumb{
      font-weight: 400;
      font-size: 17px;
    }
  }
}
`
export default PageTop
