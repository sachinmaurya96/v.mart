import React from 'react'
import styled from 'styled-components'

const ServiceCard = ({path,content}) => {
  return (
    <Wrapper>
      <div className="service_card">
        <div className="icon">
            <img src={path} alt="" />
        </div>
        <div className="content">
            <h4>{content.title}</h4>
            <p>{content.paragraph}</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    .service_card{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;

        .icon{
            img{
                width: 100px;
            }
        }
        .content{
            text-align: center;
            h4{
                font-weight: 600;
                font-size: 20px;
            }
            p{
                color: #5b5a5a;
            }
        }
    }
`
export default ServiceCard
