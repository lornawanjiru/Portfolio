import React from 'react';



function Header() {
  return (
     <div className= "head">
		<nav class="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

			<div class="container">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>


				<div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
					<ul class="navbar-nav">
						<li class="nav-item"><a class="nav-link" href="#section-home">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="#section-portfolio">Portfolio</a></li>
						<li class="nav-item"><a class="nav-link" href="#section-resume">Resume</a></li>
						<li class="nav-item"><a class="nav-link" href="#section-about">About</a></li>
						<li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
					</ul>
				</div>
			</div>
			</nav>




<section class="site-hero"  id="section-home" data-stellar-background-ratio="0.5">
			<div class="container">
				<div class="row intro-text align-items-center justify-content-center">
					<div class="col-md-10 text-center pt-5">

						<h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Lorna Wanjiru</strong></h1>
						<strong class="d-block text-white text-uppercase letter-spacing">and I wanted to share my journey with you. </strong>

					</div>
				</div>
			</div>
			</section>  
	 </div> 
  );
}

export default Header;