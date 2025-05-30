import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/App.css";
import Navi from "./components/Navi.jsx";
import ItemsMarket from "./pages/ItemsMarket.jsx";
import "./components/Product-toolbar.css";
import SearchBar from "./components/SearchBar.jsx";
import AddProductButton from "./components/AddProductButton.jsx";
import AddItemPage from "./pages/AddItemPage.jsx";
import SortDropdown from "./components/SortDropdown.jsx";
import "./components/ProductList.jsx";
import Pagination from "./components/Pagination.jsx";
import BestItemCard from "./components/BestItemCard.jsx";
import AllItemCard from "./components/AllItemCard.jsx";
import AllItemSection from "./components/AllItemSection.jsx";
import "./components/AllItemSection.css";

function App() {
  const [sortOption, setSortOption] = useState("recent");
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
        <Route path="/items" element={<ItemsMarket />} />
      </Routes>
      <main style={{ paddingTop: "80px" }}>
        <section className="product-toolbar">
          {" "}
          {/* 전체상품과 텍스트 위치 맞추기 위해서 */}
          <div className="toolbar-header">
            <h2 className="section-title">베스트 상품</h2>
          </div>
          <BestItemCard />
        </section>

        <section className="product-toolbar">
          <div className="toolbar-header">
            <h2 className="section-title">전체 상품</h2>

            <div className="toolbar-actions">
              <SearchBar />
              <AddProductButton />
              <SortDropdown sortOption={sortOption} onChange={setSortOption} />
            </div>
          </div>

          <AllItemSection items={items} />
        </section>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </BrowserRouter>
  );
}

export default App;
