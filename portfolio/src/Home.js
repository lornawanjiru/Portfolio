import React from 'react';
import Header from './components/header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Aboutme from './components/about';
import Blog from './components/blog';
import Contactme from './components/contact';
import Footer from './components/footer';
import axios from 'axios';
import Bloglist from './container/bloglist';
import Blogcard from './container/blogcard';

class Home extends React.Component{
	
    render(){
  return (
     <div className= "portfolio">
		 <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
			 <Header />
			 <Portfolio />
			 <Resume  />
			 <Aboutme />
			 <Blog/>
			 {/* <Blogcard/> */}
			 <Contactme />
			 <Footer/>
         </body>
	 </div> 
  );
}
}
export default Home;