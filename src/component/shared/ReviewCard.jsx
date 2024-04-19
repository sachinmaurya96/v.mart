import React from 'react'
import styled from 'styled-components'

const ReviewCard = () => {
  return (
    <Wrapper>
      <div className="review_card">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sint quaerat officia tenetur sunt unde voluptate incidunt quibusdam culpa? Repellendus.</p>
        <div className="user_info">
            <div className="user_img">
                <img src="/assets/user.png" alt="" />
            </div>
            <div className="name_bio">
                <span className='name'>Sachin maurya</span>
                <span className="bio">Software developer</span>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
padding: 10px;
border: 1px solid lightgray;
border-radius: 10px;
    .review_card{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .user_info{
            display: flex;
            align-items: center;
            gap: 20px;
            .user_img{
                height: 70px;
                width: 70px;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    object-fit: cover;
                }
            }
            .name_bio{
                display: flex;
                flex-direction: column;
                .name{
                    font-weight: 600;
                    font-size: 20px;
                }
                .bio{
                    color: #5e5d5d;
                }
            }
        }
    }
    @media only screen and (max-width: 426px){
        .review_card{
        .user_info{
            .user_img{
                height: 50px;
                width: 50px;
                border-radius: 50%;
                overflow: hidden;
            }
        }
    }
    }
`
export default ReviewCard
