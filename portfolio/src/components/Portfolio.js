import React from 'react';



function Header() {
  return (
     <div className= "my-portfolio">
         <section class="site-section" id="section-portfolio">
            <div class="container">
                <div class="row">
                    <div class="section-heading text-center col-md-12">
                        <h2>My <strong>Portfolio</strong></h2>
                    </div>
                </div>
                <div class="filters">
                    <div className="colour-inc">
                      
                    <ul>
                        <li class="active" data-filter="*">All</li>
                        <li data-filter=".cyber-security">Cyber Security</li>
                        <li data-filter=".net">Network design and Development</li>
                        <li data-filter=".web">Web Design</li>
                        {/* <li data-filter=".photography">Photography</li> */}
                    </ul>
                  
                    </div>
                </div> 
                <div class="filters-content">
                    <div class="row grid">
                            <div class="single-portfolio col-sm-4 all cyber-security">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Web and Network security</h4>
                                    <div class="cat">Article</div>
                                </div>                                         
                            </div>                                            
                            <div class="single-portfolio col-sm-4 all net">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Network Architecture Design</h4>
                                    <div class="cat">Design</div>
                                </div>                                         
                            </div>  
                            <div class="single-portfolio col-sm-4 all web">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4> Web Portfolios & Blogs </h4>
                                    <div class="cat">Design </div>
                                </div>                                         
                            </div>  
                            <div class="single-portfolio col-sm-4 all net">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Network Architecture Development</h4>
                                    <div class="cat">Projects</div>
                                </div>                                         
                            </div>  
                            <div class="single-portfolio col-sm-4 all cyber-security">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Both Web and Network security</h4>
                                    <div class="cat">CTFs Write ups</div>
                                </div>                                         
                            </div>  
                            <div class="single-portfolio col-sm-4 all web">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Ecommerce</h4>
                                    <div class="cat">Design</div>
                                </div>                                         
                            </div>  
                            {/* <div class="single-portfolio col-sm-4 all web">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Others</h4>
                                    <div class="cat">Design</div>
                                </div>                                         
                            </div>  
                            <div class="single-portfolio col-sm-4 all net">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Product Box Package Mockup</h4>
                                    <div class="cat">Mockup</div>
                                </div>                                         
                            </div>  
                            <div class="single-portfolio col-sm-4 all cyber-security">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <img class="image img-fluid" src="assets/images/p2.jpg" alt=""/>
                                    </div>
                                    <a href="images/p2.jpg" class="img-pop-up">  
                                        <div class="middle">
                                            <div class="text align-self-center d-flex"><img src="assets/images/preview.png" alt=""/></div>
                                        </div>
                                    </a>                                  
                                </div>
                                <div class="p-inner">
                                    <h4>Tutorial videos</h4>
                                    <div class="cat">Coming soon</div>
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