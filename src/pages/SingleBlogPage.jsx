import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { blogs } from "../data/data";
import SideBlog from "../component/shared/SideBlog";

const SingleBlogPage = () => {
  const params = useParams()
  let blog = blogs.filter((blog)=>blog.id == params.id)
  blog=blog[0]
  
console.log(blogs)
  return (
    <Wrapper>
      <div className="Blog_deatil ">
        <div className="left">
          <article>
            <h1>
            {blog?.title}
            </h1>
            <div className="user_detail">
              <div className="user">
                <div className="image">
                  <img src="/assets/user.png" alt={"user"} />
                </div>
                <span className="name">Sachin Maurya</span>
              </div>
              <div className="action">
              <span>45 Likes</span>
              <span>55 Views</span>
              <span>33 Rections</span>
              </div>
            </div>
            <div className="main_img">
              <img src={blog?.photo_url} alt="featured image" />
            </div>
            <div className="blog_content" dangerouslySetInnerHTML={{__html : blog?.content_html}}>
            </div>
          </article>
        </div>
        <div className="right">
          <div className="popular_post">
          <SideBlog blogs={blogs}/>
          </div>
          <div className="new_post">
          <SideBlog blogs={blogs} title="New Post"/>
          </div>
        </div>
      </div>
      <div className="you_like">
        
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
 .Blog_deatil{
  padding: 50px 100px;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 50px;
  .left{
    article{
      h1{
        font-size: 50px;
        margin-bottom: 30px;
      }
      .user_detail{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        width: 100%;
        border-top: 1px solid crimson;
        padding: 20px 0;
        .action{
          display: flex;
          gap: 20px;
          align-items: center;
          span:nth-child(2){
          border-left: 5px solid lightgray;
          border-right: 5px solid lightgray;
          padding: 0 20px;
        }
        }
        
        .user{
          display: flex;
          gap: 10px;
          align-items: center;

          .image{
            width: 50px;
            height: 50px;
            overflow: hidden;
            border-radius: 50%;
            img{
              height: 100%;
              width: 100%;
              object-fit: cover;
              background-position: center;
            }
          }
        }
      }
      .main_img{
        width: 100%;
        height: 600px;
        overflow: hidden;
        margin: 20px 0;
        border-radius: 10px;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-position: center;
        }
       
      }
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
 }
 @media only screen and (max-width: 1200px){
  .Blog_deatil{
    padding: 50px 20px;

  }
  
 }
 @media only screen and (max-width: 1024px){
  .Blog_deatil{
   grid-template-columns: 100%;
    .right{
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 30px;
    }
    .left{
      article{
        .h1{
          font-size: 40px;
        }
        .main_img{
          width: 100%;
          height: 500px;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px){
  .Blog_deatil{
    .right{
     grid-template-columns: 100%;
    }
    .left{
      article{
        h1{
          font-size: 40px;
        }
        .main_img{
          height: 400px;
          img{
            
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 426px){
  .Blog_deatil{
    .left{
      article{
        h1{
          font-size: 30px;
        }
        .main_img{
          height: 300px;
        }
      }
    }
  }
}
@media only screen and (max-width: 321px){
  .Blog_deatil{
    padding: 50px 10px;
    .left{
      article{
        h1{
          font-size: 25px;
        }
        .main_img{
          height: 250px;
        }

        .user_detail{
        .action{
          gap: 10px;
          span:nth-child(2){
          padding: 0 10px;
        }
        }
      }
      }
    }
  }
}
`;
export default SingleBlogPage;
