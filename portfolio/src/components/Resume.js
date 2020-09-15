import React from 'react';



function Resume() {
  return (
     <div className="resume">
       <section className= "site-section " id="section-resume">
		<div className= "container">
			<div className= "row">
				<div className= "col-md-12 mb-5">
					<div className= "section-heading text-center">
						<h2>My <strong>Resume</strong></h2>
					</div>
				</div>
				<div className= "col-md-6">
					<h2 className= "mb-5">Education</h2>
					<div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> May 2018 - Present</span>
						<h3>Bsc. Computer Science </h3>
						<p>With this Degree I Learnt the foundation of my career.</p>
						<span className= "school">The Catholic University of Eastern Africa</span>
					</div>

					{/* <div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> March 2013 - Present Deacember.</span>
						<h3>Masteral in Information Technology</h3>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
						<span className= "school">New York University</span>
					</div> */}

					<div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> July 2020 </span>
						<h3>HUAWEI HCIA Routing and Switching</h3>
						<p>I completed my routing and switching certification whereby I passed and got a certificate. 
							I can’t say it was a easy course by it was enough to give
							 knowledge in basic networking hence easing my time as I did my network security course. </p>
						
					</div>

					<div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> August 2020</span>
						<h3>HUAWEI HCIA Security</h3>
						<p>In this course we went in depth of firewalls and the networking security risks. We were taught how to
							 secure and scan the systems hence trying to avoid the intrusion.</p>
						
					</div>

				</div>
				<div className= "col-md-6">


					<h2 className= "mb-5">Achievements </h2>

					<div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> Jan 2020 - Present</span>
						<h3>SHEHACKS.Ke LEAD</h3>
						<p>I was chosen as a SheHacks Lead in my school and with that position I was able to help students in 
							my school and encourage them in following their dreams in tech. </p>
						
					</div>

					<div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> Feb 2020 - Present</span>
						<h3>NETWORKING AND SECURITY ARTICLE</h3>
						<p> I love sharing my knowledge and that’s why I write articles. I love how it makes
							 me more proficient also with my field of interest. I have written various articles that are
							  step by step tutorials in doing different things and also blogs about certain things e.g.
							 how network professions use GitHub.</p>
						
					</div>

					<div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> August 2020 - Present</span>
						<h3>SECURITY TRAINER </h3>
						<p>Being a member of the SHEHACKS community I was able to become a trainer in web and 
							network security. I have worked with Cyberranges partnered with SilenSec 
							in one of the webinars where I tackled SQL INJECTION in Depth.</p>
						
					</div>

					{/* <div className= "resume-item mb-4">
						<span className= "date"><span className= "icon-calendar"></span> March 2013 - Present</span>
						<h3>Lead Product Designer</h3>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
						<span className= "school">Shopify</span>
					</div> */}


				</div>
			</div>
		</div>
	</section> 
     </div>
  
  );
}

export default Resume;