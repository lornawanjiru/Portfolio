import React, {useState,useEffect} from 'react';
import Portfweb from '../container/portfweb';
import porfinfo from '../apis/blog';


const Portfolio = () => {
	 
	const [Portfolio,setPortfolio] = useState([]);

	const fetchPortfolio  = async () =>{
        const response = await porfinfo.get('portfolio/')
        setPortfolio(response.data)
    }
const createPortfolio = () => {
  return (
     <div className= "my-portfolio">
         <section className= "site-section" id="section-portfolio">
            <div className= "container">                               
                    <div className= "row ">
                                                        
                    {Portfolio.map(ports => {

                        if(!ports){
                            return <div>Loading..</div>

                        } else
                         { 
                            return( 

                                
                                    
                                    <Portfweb
                                        Title={ports.Title}
                                        Category={ports.Category}							                                       
                                        Image={ports.Image}
                                    />
                                  


                            
                            )
                        }
                        })}    
                            
                            
                            
                    </div>
                

            </div>
         </section>
	</div>
     


  );
}
useEffect(()=>{
	fetchPortfolio()
},[])
return (
	<>
		 <div className= "row">
                    <div className= "section-heading text-center col-md-12">
                        <h2>My <strong>Portfolio</strong></h2>
                    </div>
         </div>           
            
            
                 
                {createPortfolio()}
            
          
		
	</>
)
}
export default Portfolio;