import React from 'react';
import bloglist from '../container/bloglist'

const Blogcard = (props) => {

    return (
        <div class="col-sm-6 col-lg-4 mb-4">
        <div class="blog-entry">
		    <a href="#"><img src= "assets/images/post_2.jpg"alt="" class="img-fluid"/></a>
               <div class="blog-entry-text">
							
				<h3><a href="#">{props.blogs.title}</a></h3>
					<p class="mb-4">{props.blogs.desc}</p>

					<div class="meta">
					<a href="#"><span class="icon-calendar"></span> {props.blogs.date}</a>
									
					</div>
			</div>				
								
		</div>
        </div>
    )
}
export default Blogcard