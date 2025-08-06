import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import MarketPage from './components/pages/MarketPage/MarketPage';
import AddItemPage from './components/pages/AddItemPage/AddItemPage';
import CommunityFeedPage from './components/pages/CommunityFeedPage';
import ItemDetailPage from './components/pages/ItemDetailPage/ItemDetailPage';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Header />

            <div>
              <Routes>
                <Route
                  index
                  element={<HomePage />}
                />
                <Route
                  path="/login"
                  element={<LoginPage />}
                />
                <Route
                  path="/signup"
                  element={<SignupPage />}
                />
                <Route
                  path="/items"
                  element={<MarketPage />}
                />
                <Route
                  path="/additem"
                  element={<AddItemPage />}
                />
                <Route
                  path="/community"
                  element={<CommunityFeedPage />}
                />
                <Route
                  path="/items/:productId"
                  element={<ItemDetailPage />}
                />
              </Routes>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
