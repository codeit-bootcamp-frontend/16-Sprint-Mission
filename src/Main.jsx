import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductsPage from "./pages/products/ProductsPage";
import BoardPage from "./pages/board/BoardPage";
import AddProductPage from "./pages/products/AddProductPage";
import ProductsLayout from "./pages/products/ProductsLayout";
import ProductDetailPage from "./pages/products/ProductDetailPage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductsPage />} />

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
