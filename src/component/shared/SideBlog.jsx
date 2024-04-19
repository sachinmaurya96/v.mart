import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectProducts } from '../../utils'

const SideBlog = ({title="Popular Posts", blogs}) => {
    const selectBlog = selectProducts(blogs,7)
  return (
    <Wrapper>
      <div className="title">
        <span>{title}</span>
      </div>
      <hr />
      <div className="blog_list">
       <ul>
      {
        selectBlog.map((blog)=>(
            <li key={blog.id}>
            <div className="image"><img src={blog.photo_url} alt={blog.title} /></div>
            <div className="blog_title"><Link to={`/blog/${blog.id}`}><span>{blog.title}</span><br /><span className='description'>{blog.description}</span></Link></div>
        </li>
        ))
      }
       </ul>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
width: 100%;
padding: 20px;
border: 1px solid lightgray;
border-radius: 10px;
.title{
    font-size: 20px;
    font-weight: 600;
   
}
hr{
    margin: 10px 0;
}
.blog_list{
    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
        li{
            list-style: none;
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 10px;
            .blog_title:hover{
                color: crimson;
                transition: all.2s;
                cursor: pointer;
            }
            .blog_title{
                .description{
                    font-size: 15px;
                    color: gray;
                }
            }
            .image{
               width: 100px;
               height: 70px;
                overflow: hidden;
                border-radius: 5px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background-position: center;
                }
            }
        }
    }
}
@media only screen and (max-width: 600px){
    padding: 0%;
    border: none;
    .blog_list{
    ul{
       
        li{
            .blog_title{
                font-size: 15px;
            }
        }
    }
}
}
`
export default SideBlog
