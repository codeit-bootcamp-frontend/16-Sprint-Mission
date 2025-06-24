import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import MarketPage from './components/pages/MarketPage/MarketPage';
import AddItemPage from './components/pages/AddItemPage';
import CommunityFeedPage from './components/pages/CommunityFeedPage';

function App() {
  return (
    <>
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
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
