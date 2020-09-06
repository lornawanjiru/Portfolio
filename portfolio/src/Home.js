import React from 'react';
import './comp.css';
import back from './images/back.jpg';


function Home() {
  return (
    <div styles={{backgroundImage:`url(${back})`}}>
        <header className="content">
            <p>
                Hi,<br></br>
                Join me as I briefly narrate my career journey 
            </p>
        </header>
        <div className="button">

        </div>
      
    </div>
  );
}

export default Home;