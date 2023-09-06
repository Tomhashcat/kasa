import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './components/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="Root-h1">Bonjour et au revoir</h1>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

