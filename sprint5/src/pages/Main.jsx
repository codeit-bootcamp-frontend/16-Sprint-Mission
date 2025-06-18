// main 태그 부분
import React, { useState } from "react";
import useFetchItems from "../hooks/useFetchItems";
import BestItemCard from "../components/BestItemCard";
import SearchBar from "../components/SearchBar";
import AddProductButton from "../components/AddProductButton";
import SortDropdown from "../components/SortDropdown";
import AllItemSection from "../components/AllItemSection";
import Pagination from "../components/Pagination";

const Main = () => {
  const [sortOption, setSortOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const { items, totalPages } = useFetchItems(sortOption, currentPage); //  커스텀 훅 사용

  return (
    <main style={{ paddingTop: "80px" }}>
      <section className="product-toolbar">
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
  );
};

export default Main;
