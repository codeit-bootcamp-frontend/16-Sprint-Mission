import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'; //글로벌 스타일
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

const container = document.getElementById('root')!;
if (!container) {
  throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
