import React from 'react';
import emailjs from 'emailjs-com';


function Contactme() {

		function sendEmail(e) {
			e.preventDefault();

			emailjs.sendForm('gmail', 'template_blyx66q', e.target, 'user_BJqoDD4bZ6O0THfFsaHWF')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
			e.target.reset()
		}

    return (
     <div className= "Contact">
      <section className= "site-section" id="section-contact">
        <div className= "container">
           <div className= "row">
                <div className= "col-md-12 mb-5">
					<div className= "section-heading text-center">
						<h2><strong>Get In Touch</strong></h2>
					</div>
				</div>
                <div className= "col-md-7 mb-5 mb-md-0">
					<form onSubmit={sendEmail} method="POST" className= "site-form">
						
						<h3 className= "mb-5">Get In Touch</h3>
						<div className= "form-group">
							<input type="text" className= "form-control px-3 py-4" placeholder="Your Name" name="name" />
						</div>
						<div className= "form-group">
							<input type="email" className= "form-control px-3 py-4" placeholder="Your Email" name="email" />
						</div>
						<div className= "form-group">
							<input type="text" className= "form-control px-3 py-4" placeholder="Your Phone" name="phone" />
						</div>
						<div className= "form-group mb-5">
							<textarea className= "form-control px-3 py-4"cols="30" rows="10" placeholder="Write a Message" name="desc" ></textarea>
						</div>
						<div className= "form-group">
							<input type="submit" className= "btn btn-primary  px-4 py-3" value="Send Message"/>
						</div>
						
						
					</form>
				</div>
                <div className= "col-md-5 pl-md-5">
					<h3 className= "mb-5">My Contact Details</h3>
					<ul className= "site-contact-details">
						<li>
							<span className= "text-uppercase">Email</span>
							lornamuchangi@gmail.com
						</li>
						<li>
							<span className= "text-uppercase">Phone</span>
							+245 717426148
						</li>
						<li>
							<span className= "text-uppercase">Site</span>
							myportfolio.com
						</li>
						<li>
							<span className= "text-uppercase">Address</span>
							Kenya, Nairobi <br></br>
							51476 - 00200  <br></br>
							
						</li>
					</ul>
				</div>
            </div>
        </div>
      </section>
     </div> 
  );
}

export default Contactme;