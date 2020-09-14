import React, {useState,useEffect} from 'react';
import Blogcard from '../container/blogcard';
import projects from '../apis/project';


const Blog = () => {
	 
	const [blog,setblog] = useState([]);

	const fetchblog  = async () =>{
        const response = await projects.get('/projects/')
        setblog(response.data)
    }
    const createBlogCard = () => {
  return (
     <div className= "Blog">
         <section class="site-section" id="section-blog">
		<div class="container">
			
			{blog.map(blog => {

				if(!blog){
					return <div>Loading..</div>

				} else { 
					return( 

					<div class="row">
						
							<Blogcard 
							   Title={blog.Title}
							   Desc={blog.Desc}
							   Image={blog.Image}
							   Date={blog.Date} />

					</div>
					)
				}
			})}
		</div>
	</section>
     </div> 
  );
  }
  useEffect(()=>{
	fetchblog()
},[])
return (
	<>
		<div class="row">
				<div class="col-md-12 mb-5">
					<div class="section-heading text-center">
						<h2>Blog on <strong>Medium</strong></h2>
					</div>
				</div>
		</div> 
		{createBlogCard()}
	</>
)
}
export default Blog;