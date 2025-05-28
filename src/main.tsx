import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'; //글로벌 스타일
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const container = document.getElementById('root')!;
if (!container) {
  throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    {/* 사용자 인증 정보를 관리하는 컨텍스트*/}
    <AuthProvider>
      {/* React Router를 사용하여 라우팅 관리 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();
