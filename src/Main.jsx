import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductsPage from "./pages/products/ProductsPage";
import BoardPage from "./pages/board/BoardPage";
import AddProductPage from "./pages/products/AddProductPage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductsPage />} />
          <Route path="/items" element={<ProductsPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/addItem" element={<AddProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
