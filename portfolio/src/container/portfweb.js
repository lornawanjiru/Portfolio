import React, { useState } from 'react';


const portfweb = (props) => {

    return (
        
        <div className= "single-portfolio col-sm-4 all web">
                        <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src={props.Image} alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            {/* <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div> */}
                                        </div>
                                    </a>                                  
                         </div>
                        <div className= "p-inner">
                                   <h4>{props.Title}</h4>
                                    <div className= "cat">{props.Category} </div>
                         </div>                                         
         </div>  
        
    )
}
export default portfweb