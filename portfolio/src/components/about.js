import React from 'react';



function Aboutme() {
  return (
     <div className= "About">
	    <section className= "site-section" id="section-about">
		<div className= "container">
			<div className= "row mb-5 align-items-center">
				<div className= "col-lg-7 pr-lg-5 mb-5 mb-lg-0">
					<img src="assets/images/me.png" alt="" className= "img-fluid"/>
				</div>
				<div className= "col-lg-5 pl-lg-5">
					<div className= "section-heading">
						<h2>About <strong>Me</strong></h2>
					</div>
					
					<p className= "lead">I am an undergraduate student at the Catholic University of Eastern Africa
					 doing a Bachelor Degree of Computer Science. I am passionate with networking and Cybersecurity 
					 and hence I have certified both under HUAWEI. Am a hardworking and a team player hence able to
					 work with people and do my work with less or even no supervision.</p>
					<p className= "mb-5  ">You will realise i haven't mentioned Web design. Well Web design is my technology curiosity mother. It is basically what i learnt first
					I pictured it as in in-built ability that i was taught but majorly did the teaching. I use my passion in this three topics as my super power.
					to save anyone who needs it. Contact me incase you need any saving.   </p>

					<p>
						<a href="#section-contact" className= "btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
						<a href="#" className= "btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
					</p>
				</div>
			</div>


		</div>
	</section>

     
     </div> 
  );
}

export default Aboutme;