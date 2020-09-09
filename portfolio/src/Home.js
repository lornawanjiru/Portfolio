import React from 'react';
import Header from './components/header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Aboutme from './components/about';
import Blog from './components/blog';
import Contactme from './components/contact';
import Footer from './components/footer';
import axios from 'axios';

class Home extends React.Component{
	state = {
		blogs: [],
	}

	componentDidMount(){
		  axios.get('http://127.0.0.1:8000/')
		   .then(res =>{
			   this.setState({
				   blogs: res.data
			   });
			   console.log(res.data);
		   })
		   
	}
    render(){
  return (
     <div className= "portfolio">
		 <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
			 <Header />
			 <Portfolio />
			 <Resume  />
			 <Aboutme />
			 <Blog data={this.state.blogs}/>
			 <Contactme />
			 <Footer/>
         </body>
	 </div> 
  );
}
}
export default Home;