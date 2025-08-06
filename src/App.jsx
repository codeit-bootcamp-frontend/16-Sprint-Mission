import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from 'styled-components';

import AuthProvider from './context/AuthProvider';
import AppLayout from './layouts/AppLayout';
import ItemsPage from './pages/ItemsPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="/items" element={<ItemsPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
