import React from 'react';



function Footer() {
  return (
     <div className= "footer">
         <footer class="site-footer">
		<div class="container">

			<div class="row mb-5">
				<p class="col-12 text-center">
					
					Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true" ></i> by <a href="#" target="_blank" className="text-primary">Lorna Wanjiru </a>
					
				</p>
			</div>
			
			<div class="row mb-5">
				<div class="col-md-12 text-center">
					<p>
						<a href="https://github.com/lornawanjiru" class="social-item"><span class="icon-github"></span></a>
						{/* <a href="#" class="social-item"><span class="icon-twitter"></span></a> */}
						<a href="https://www.instagram.com/___wan.jiru__/" class="social-item"><span class="icon-instagram2"></span></a>
						<a href="https://www.linkedin.com/in/lornawanjirumuchangi/" class="social-item"><span class="icon-linkedin2"></span></a>
						{/* <a href="#" class="social-item"><span class="icon-vimeo"></span></a> */}
					</p>
				</div>
			</div>
			
		</div>
	</footer>
     </div> 
  );
}

export default Footer;