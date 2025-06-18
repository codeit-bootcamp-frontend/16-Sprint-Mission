import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./components/App.css";
import Navi from "./components/Navi.jsx";
import ItemsMarket from "./pages/ItemsMarket.jsx";
import "./components/Product-toolbar.css";
import "./components/ProductList.jsx";
import "./components/AllItemSection.css";
import useFetchItems from "./hooks/useFetchItems.jsx";
import Main from "./pages/Main";

function App() {
  const [sortOption, setSortOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const { items, totalPages } = useFetchItems(sortOption, currentPage);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=10&orderBy=${sortOption}`
        );
        setItems(response.data.list);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("상품을 불러오지 못했습니다!", error);
      }
    };

    fetchItems();
  }, [sortOption, currentPage]);

  return (
    <BrowserRouter>
      <Navi style={{ paddingTop: "80px" }} />

      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route
          path="/main"
          element={
            <Main
              sortOption={sortOption}
              setSortOption={setSortOption}
              items={items}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/items" element={<ItemsMarket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
