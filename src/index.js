import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home'; 
import ButtonAppBar  from './ButtonAppBar';
import reportWebVitals from './reportWebVitals'; 
import Types from './Types';    
 



ReactDOM.render(
  <React.StrictMode>  
    <div>
    <ButtonAppBar bottomGutter/> 
    <Home/>    
    </div>  

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
