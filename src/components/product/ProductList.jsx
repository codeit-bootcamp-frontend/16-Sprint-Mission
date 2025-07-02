import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { pageSizebyScreenWidth } from "../../utils/pageSizebyScreenWidth.js";
import { useProductData } from "../../hooks/useProductData.jsx";
import { useSortedItems } from "../../hooks/useSortedItems.jsx";
import SortSelect from "../SortSelect.jsx";
import ProductDisplay from "./ProductDisplay.jsx";
import Pagination from "./Pagination.jsx";
import Button from "../Button.jsx";
import "../../styles/ProductList.css";

function ProductList() {
  const [pageSize, setPageSize] = useState(() => pageSizebyScreenWidth(window.innerWidth).all); //상품 개수
  const [sortKey, setSortKey] = useState("updatedAt");

  const { products, currentPage, goToPage, totalPages } = useProductData({ pageSize: pageSize });

  const sortedItems = useSortedItems(products, sortKey);

  // 브라우저 크기에 따라 상품 개수 변경
  useEffect(() => {
    const width = window.innerWidth;
    const sizes = pageSizebyScreenWidth(width);
    setPageSize(sizes.all);
    // console.log("ProductList: 화면 크기 설정", width, sizes.all);
  }, []);

  return (
    <div>
      <div className="Products__header Products__header--items mb16">
        <h1>전체 상품</h1>
        <Button className="Products__register" btnSize="small" radius="xs">
          <Link to="/additem">상품 등록하기</Link>
        </Button>
        <form className="Products__form">
          <input type="text" placeholder="검색할 상품을 입력해주세요" />
          <button></button>
        </form>
        <SortSelect sortKey={sortKey} onChange={setSortKey} />
      </div>
      <ProductDisplay sortedItems={sortedItems} bestList={false} />
      <Pagination currentPage={currentPage} totalPages={totalPages} setPage={goToPage} />
    </div>
  );
}

export default ProductList;
