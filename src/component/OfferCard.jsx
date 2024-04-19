import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const OfferCard = ({img}) => {
  return (
    <Card>
     <Link>
     <img src={img} alt="" />
     </Link>
    </Card>
  )
}
const Card = styled.div`
overflow: hidden;
width: 100%;

    img{
        width: 100%;
        height: auto;
        background-position: center;
        object-fit: cover;
    }
    
`
export default OfferCard
