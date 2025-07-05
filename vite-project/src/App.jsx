import { useEffect, useState } from "react";
import { getAllProducts } from "./api/allProducts";
import { getBestProducts } from "./api/bestProducts";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import PandaMarketPage from "./components/PandaMarketPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Faq from "./components/Faq";
import AddItem from "./components/AddItem";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setbestProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setAllProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getBestProducts()
      .then((data) => setbestProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PandaMarketPage />} // 메인 페이지
        />
        <Route
          path="/items"
          element={
            <Products allProducts={allProducts} bestProducts={bestProducts} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;
