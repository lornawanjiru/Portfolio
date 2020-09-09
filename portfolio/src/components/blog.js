import React from 'react';



class Blog extends React.Component {
 render(){

	const {Title} = this.state
	const {Image} = this.state
	const {Desc} = this.state
	const {Date} = this.state

	
  return (
     <div className= "Blog">
         <section class="site-section" id="section-blog">
		<div class="container">
			<div class="row">
				<div class="col-md-12 mb-5">
					<div class="section-heading text-center">
						<h2>Blog on <strong>Medium</strong></h2>
					</div>
				</div>
			</div>            
			<div class="row">
				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="blog-entry">
						<a href="#"><img src={Image} alt="" class="img-fluid"/></a>
						<div class="blog-entry-text">
                           <h3><a href="#">{Title}</a></h3>
                             <p class="mb-4">{Desc}</p>

							<div class="meta">
                             <a href="#"><span class="icon-calendar"></span> {Date}</a>
								
							</div>
						</div>
					</div>
				</div>


			</div>
		</div>
	</section>
     </div> 
  );
  }
}
export default Blog;