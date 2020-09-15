import React from 'react';



function Footer() {
  return (
     <div className= "footer">
         <footer className= "site-footer">
		<div className= "container">

			<div className= "row mb-5">
				<p className= "col-12 text-center">
					
					Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className= "icon-heart text-danger" aria-hidden="true" ></i> by <a href="#" target="_blank" className="text-primary">Lorna Wanjiru </a>
					
				</p>
			</div>
			
			<div className= "row mb-5">
				<div className= "col-md-12 text-center">
					<p>
						<a href="https://github.com/lornawanjiru" className= "social-item"><span className= "icon-github"></span></a>
						{/* <a href="#" className= "social-item"><span className= "icon-twitter"></span></a> */}
						<a href="https://www.instagram.com/___wan.jiru__/" className= "social-item"><span className= "icon-instagram2"></span></a>
						<a href="https://www.linkedin.com/in/lornawanjirumuchangi/" className= "social-item"><span className= "icon-linkedin2"></span></a>
						{/* <a href="#" className= "social-item"><span className= "icon-vimeo"></span></a> */}
					</p>
				</div>
			</div>
			
		</div>
	</footer>
     </div> 
  );
}

export default Footer;