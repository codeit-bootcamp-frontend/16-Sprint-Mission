import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductsPage from "./pages/products/ProductsPage";
import BoardPage from "./pages/board/BoardPage";
import AddProductPage from "./pages/products/AddProductPage";
import ProductsLayout from "./pages/products/ProductsLayout";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />

          <Route path="/products" element={<ProductsLayout />}>
            <Route index element={<ProductsPage />} />
            <Route path="addProduct" element={<AddProductPage />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>

          <Route path="/board" element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
