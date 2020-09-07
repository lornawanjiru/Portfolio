import React from 'react';
import Header from './components/header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Aboutme from './components/about';
import Blog from './components/blog';
import Contactme from './components/contact';
import Footer from './components/footer';


function Home() {
  return (
     <div className= "portfolio">
		 <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
			 <Header/>
			 <Portfolio/>
			 <Resume />
			 <Aboutme/>
			 <Blog/>
			 <Contactme/>
			 <Footer/>
         </body>
	 </div> 
  );
}

export default Home;