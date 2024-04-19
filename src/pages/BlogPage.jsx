import React from "react";
import styled from "styled-components";
import PageTop from "../component/shared/PageTop";
import BlogCard from "../component/shared/BlogCard";
import SideBlog from "../component/shared/SideBlog";
import { selectProducts } from "../utils";
import { blogs } from "../data/data";

const BlogPage = () => {
  const selectblogs = selectProducts(blogs,7)
  
  return (
    <Wrapper>
      <PageTop title={"Blog Posts"} />
      <div className="blog_page">
        <div className="left">
          <div className="blogs">
           {
            selectblogs.map((blog)=>(
              <BlogCard blog={blog} key={blog.id}/>
            ))
           }
          </div>
        </div>
        <div className="right">
          <div className="popular_blogs">
            <SideBlog blogs={blogs}/>
          </div>
          <div className="new">
            <SideBlog title="New Posts" blogs={blogs}/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.blog_page{
  padding: 50px 100px;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 50px;
  .right{
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
@media only screen and (max-width: 1220px){
  .blog_page{
    padding: 50px 30px;
  }
}
@media only screen and (max-width: 1024px){
  .blog_page{
    grid-template-columns: 100%;
    padding: 50px 50px;
    .right{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
  }
}
@media only screen and (max-width: 768px){
  .blog_page{
    grid-template-columns: 100%;
    padding: 50px 10px;
    .right{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  }
  
}
@media only screen and (max-width: 600px){
  .blog_page{
    grid-template-columns: 100%;
    padding: 50px 10px;
    .right{
    display: grid;
    grid-template-columns: 100%;
    gap: 50px;
  }
  }
  
}
`;
export default BlogPage;
