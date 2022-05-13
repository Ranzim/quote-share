import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js";
import './index.css';
import App from './App';
// import Card from './component/Card';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <>
   <BrowserRouter>
  <App/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

