import React from 'react';


const Blogcard = (props) => {

    return (
        <div className= "col-sm-6 col-lg-4 mb-4">
        <div className= "blog-entry">
		    <a href="#"><img src= {props.Image}alt="" className= "img-fluid"/></a>
               <div className= "blog-entry-text">
							
				<h3><a href="#">{props.Title}</a></h3>
					<p className= "mb-4">{props.Desc}</p>

					<div className= "meta">
					<a href="#"><span className= "icon-calendar"></span> {props.Date}</a>
									
					</div>
			</div>				
								
		</div>
        </div>
    )
}
export default Blogcard