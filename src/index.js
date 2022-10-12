import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Principal from './proyecto/principal';
import reportWebVitals from './reportWebVitals';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './proyecto/estilo.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Principal/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
