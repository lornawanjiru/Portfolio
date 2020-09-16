import React, {useState,useEffect} from 'react';
import Blogcard from '../container/blogcard';
import bloginfo from '../apis/blog';


const Blog = () => {
	 
	const [blogs,setblog] = useState([]);

	const fetchBlog  = async () =>{
        const response = await bloginfo.get('blog/')
        setblog(response.data)
    }
const createBlogcard = () => {
  return (
     <div className= "Blog">
     <section className= "site-section" id="section-blog">
		<div className= "container">		
		<div className= "row  ">
				
			{blogs.map(blogss => {

				if(!blogss){
					return <div>Loading..</div>

				} else { 
					return( 

					
						
							<Blogcard 
							   Title={blogss.Title}
							   Desc={blogss.Desc}							   
							   Date={blogss.Date} 
							   Image={blogss.Image}
							   />

					
					)
				}
			})}
			
		</div>
		
		</div>
	</section>
     </div> 
  );
  }
  useEffect(()=>{
	fetchBlog()
},[])
return (
	<>
		<div className= "row">
				<div className= "col-md-12 mb-5">
					<div className= "section-heading text-center">
						<h2>Blog on <strong>Medium</strong></h2>
					</div>
				</div>
		</div> 
		
		{createBlogcard()}
		
	</>
)
}
export default Blog;