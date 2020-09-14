import React, { useState } from 'react';


const Bloglist = (props) => {

    return (
        <div className="ui list">
			
            {props.blogs && props.blogs.map(blog => (
                <div className="item" key={blog}>
                    {blog}
                </div>  
            ))}}
        </div>
    )
}
export default Bloglist