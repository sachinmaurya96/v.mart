import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SignupPage = () => {
  return (
    <Wrapper>
      <div className="form_container">
        <div className="title"><h1>Register</h1></div>
        <form >
          <div>
            <label htmlFor="first_name">First Name</label>
            <input placeholder='First Name' type="text" />
          </div>
          <div>
            <label htmlFor="first_name">Last Name</label>
            <input type="text" placeholder='Last Name'/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Email'/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" placeholder='Password'/>
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="text" placeholder='Confirm Password'/>
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </form>
        <div className="alredy_account">
          <p>Already have an account? <Link to={"/login"} className='link'>Login</Link></p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 100%;
padding: 50px 0;
display: flex;
justify-content: center;
align-items: center;
  .form_container{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
   
    h1{
      font-size: 50px;
      text-align: center;
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        input{
          padding: 8px;
          outline: none;
          background: #edecec;
          border-radius: 5px;
          border: none;
        }
        button{
            padding: 10px 0;
            width: 100%;
            border: none;
            outline: none;
            background-color: #5e4fe5;
            color: #fff;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
          }
      }
    }
    .alredy_account{
      p{
        text-align: center;
        font-size: 15px;
      color: gray;
      .link{
        color: #00c8ff;
      }
      }
    }
  }
  @media only screen and (max-width: 426px){
    .form_container{
      width: 400px;
    }
  }
  
  @media only screen and (max-width: 376px){
    .form_container{
      width: 365px;
    }
  }
  @media only screen and (max-width: 321px){
    .form_container{
      width: 310px;
    }
  }
`
export default SignupPage
