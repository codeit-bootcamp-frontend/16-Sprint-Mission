import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './components/Nav';
import "../src/components/css/reset.css";
import "../src/components/css/common.css";
import "../src/components/css/font.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <App />
  </>
);