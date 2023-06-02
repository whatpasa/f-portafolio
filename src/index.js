import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Semana1 from './Semana1'
import Semana2 from './Semana2'
import Semana3 from './Semana3'
import Semana4 from './Semana4'
import Semana5 from './Semana5'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    <Semana1 />
    <Semana2 />
    <Semana3 />
    <Semana4 />
    <Semana5 />

    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
