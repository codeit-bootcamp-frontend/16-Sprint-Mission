import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'; //글로벌 스타일
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
if (!container) {
  throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
