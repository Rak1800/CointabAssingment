import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FetchData from './fetchData/fetchdata'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Hello world</p>  
    <FetchData />
    </React.StrictMode>
);


