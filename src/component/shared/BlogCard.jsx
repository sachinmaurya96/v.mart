import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getDateMonth } from '../../utils'

const BlogCard = ({blog}) => {
   const date = getDateMonth(blog)
  return (
    <Wrapper>
      <Link to={`/blog/${blog.id}`}>
      <div className="blog_card">
        <div className="date">
            <span className="month">{date.monthName}</span>
            <span className="day">{date.date}</span>
        </div>
        <div className="image">
            <img src={blog.photo_url} alt={blog.title} />
        </div>
        <div className="blog_content">
            <div className="blog_title">
              <h4>{blog.title}</h4>
            </div>
            <p>{blog.content_text.slice(0,100)}...</p>
            <hr color='crimson'/>
            <div className="user_detail">
                <div className="user">
                    <img src="/assets/user.png" alt="" />
                </div>
                <div className="name_like_views">
                    <span className="name">Name</span>
                    <span className="like">25 Likes</span>
                    <span className="views">05 Views</span>
                </div>
            </div>
        </div>
      </div>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    .blog_card{
        display: grid;
        grid-template-columns: 50px 250px 1fr;
        .date{
            padding: 5px;
            display: flex;
            flex-direction: column;
            .month{
                font-weight: 600;
                color: gray;
            }
            .day{
                color: crimson;
                font-size: 30px;
                font-weight: 600;
            }
        }
        .image{
            padding: 10px;
            img{
                width: 100%;
               
            }
        }
        .blog_content{
            padding: 10px;
            .blog_title{
                h4{
                    line-height: 25px;
                    font-weight: 400;
                    color: black;

                    &:hover{
                        color: crimson;
                        transition: .2s;
                    }
                }
            }
            p{
                color: gray;
                font-size: 13px;
            }
            hr{
                margin: 10px 0;
                height: 0.1px;
            }
            .user_detail{
                display: flex;
                gap: 10px;
                align-items: center;
                .user{
                    width: 50px ;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        height: 100%;
                        width: 100%;
                        background-position: center;
                        object-fit: cover;

                    }
                }
                .name_like_views{
                    span{
                        padding: 0 10px;
                    }
                    .like{
                        border-left: 5px solid lightgray;
                        border-right: 5px solid lightgray;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 600px){
        .blog_card{
            .date{
                display: none;
            }
            display: grid;
            
            grid-template-columns: 100%;

            .blog_content{
            
        
            .user_detail{
                .name_like_views{
                    display: flex;
                    flex-wrap: wrap;
                    span{
                        padding: 0 10px;
                    }
                    .like{
                        border-left: 5px solid lightgray;
                        border-right: 5px solid lightgray;
                    }
                }
            }
        }
        }
    }

`
export default BlogCard
