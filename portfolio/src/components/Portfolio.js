import React from 'react';



function Header() {
  return (
     <div className= "my-portfolio">
         <section className= "site-section" id="section-portfolio">
            <div className= "container">
                <div className= "row">
                    <div className= "section-heading text-center col-md-12">
                        <h2>My <strong>Portfolio</strong></h2>
                    </div>
                </div>
                <div className= "filters">
                    <div className="colour-inc">
                      
                    <ul>
                        <li className= "active" data-filter="*">All</li>
                        <li data-filter=".cyber-security">Cyber Security</li>
                        <li data-filter=".net">Network design and Development</li>
                        <li data-filter=".web">Web Design</li>
                        {/* <li data-filter=".photography">Photography</li> */}
                    </ul>
                  



                    </div>
                </div> 
                <div className= "filters-content">
                    <div className= "row grid">
                            <div className= "single-portfolio col-sm-4 all cyber-security">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Web and Network security</h4>
                                    <div className= "cat">Article</div>
                                </div>                                         
                            </div>                                            
                            <div className= "single-portfolio col-sm-4 all net">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Network Architecture Design</h4>
                                    <div className= "cat">Design</div>
                                </div>                                         
                            </div>  
                            <div className= "single-portfolio col-sm-4 all web">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4> Web Portfolios & Blogs </h4>
                                    <div className= "cat">Design </div>
                                </div>                                         
                            </div>  
                            <div className= "single-portfolio col-sm-4 all net">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Network Architecture Development</h4>
                                    <div className= "cat">Projects</div>
                                </div>                                         
                            </div>  
                            <div className= "single-portfolio col-sm-4 all cyber-security">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Both Web and Network security</h4>
                                    <div className= "cat">CTFs Write ups</div>
                                </div>                                         
                            </div>  
                            <div className= "single-portfolio col-sm-4 all web">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Ecommerce</h4>
                                    <div className= "cat">Design</div>
                                </div>                                         
                            </div>  
                            {/* <div className= "single-portfolio col-sm-4 all web">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Others</h4>
                                    <div className= "cat">Design</div>
                                </div>                                         
                            </div>  
                            <div className= "single-portfolio col-sm-4 all net">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Product Box Package Mockup</h4>
                                    <div className= "cat">Mockup</div>
                                </div>                                         
                            </div>  
                            <div className= "single-portfolio col-sm-4 all cyber-security">
                                <div className= "relative">
                                    <div className= "thumb">
                                        <div className= "overlay overlay-bg"></div>
                                        <img className= "image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" className= "img-pop-up">  
                                        <div className= "middle">
                                            <div className= "text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div className= "p-inner">
                                    <h4>Tutorial videos</h4>
                                    <div className= "cat">Coming soon</div>
                                </div>                                         
                            </div>  
   */}
                    </div>
                </div>

            </div>
         </section>
	</div>
     


  );
}

export default Header;