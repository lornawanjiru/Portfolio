import React from 'react';
import Blog from '../components/blog';
import axios from 'axios';

class Bloglist extends React.Component  {
  
    state = {
		blogs: []
	}

	componentDidMount(){
		  axios.get('http://127.0.0.1:8000/api/')
		   .then(res =>{
			   this.setState({
				   blogs: res.data
			   });
			   console.log(res.data);
		   })
		   
	}
    render(){
  return (
     <Blog data={this.state.blogs} />
 );
}
}
export default Bloglist;