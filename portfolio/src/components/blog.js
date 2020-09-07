import React from 'react';



function Blog() {
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
						<a href="#"><img src="assets/images/post_1.jpg" alt="" class="img-fluid"/></a>
						<div class="blog-entry-text">
							<h3><a href="#">Creative Product Designer From Facebook</a></h3>
							<p class="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

							<div class="meta">
								<a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
								<a href="#"><span class="icon-bubble"></span> 5 Comments</a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="blog-entry">
						<a href="#"><img src="assets/images/post_2.jpg" alt="" class="img-fluid"/></a>
						<div class="blog-entry-text">
							<h3><a href="#">Creative Product Designer From Facebook</a></h3>
							<p class="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

							<div class="meta">
								<a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
								<a href="#"><span class="icon-bubble"></span> 5 Comments</a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="blog-entry">
						<a href="#"><img src="assets/images/post_3.jpg" alt="" class="img-fluid"/></a>
						<div class="blog-entry-text">
							<h3><a href="#">Creative Product Designer From Facebook</a></h3>
							<p class="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

							<div class="meta">
								<a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
								<a href="#"><span class="icon-bubble"></span> 5 Comments</a>
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

export default Blog;