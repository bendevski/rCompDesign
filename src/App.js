import React from 'react';
import logo from './logo.svg';
import './App.css';

function Post(props){
  return(
    <div>
    <aside>
      {props.date}
    </aside>
    
      <h1>{props.title}</h1>
      <p>{props.abstract}</p>
      <h2>{props.poster}</h2>
    </div>
  )
}






function App() {
  return (
    <div>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default App;
