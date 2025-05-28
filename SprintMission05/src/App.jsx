import "./App.css";
import { createGlobalStyle } from "styled-components";
import Items from "./components/layout/Items";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/layout/Home";
import Login from "./components/layout/Login";
import Privacy from "./components/layout/Privacy";
import FAQ from "./components/layout/FAQ";
import NotFound from "./components/layout/NotFound";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
