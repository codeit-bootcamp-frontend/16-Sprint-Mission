import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage/HomePage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="items" element={<ProductsPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
