import { useState, useEffect } from "react";
import { useProductData } from "../api.jsx";
import { pageSizebyScreenWidth } from "./pageSizebyScreenWidth.jsx";
import SortSelect from "./SortSelect.jsx";
import ProductDisplay from "./ProductDisplay.jsx";
import Pagination from "./Pagination.jsx";
import "./css/ProductList.css";

function ProductList() {
  const [sortKey, setSortKey] = useState("updatedAt");
  const [page, setPage] = useState(1); //현재 페이지
  const [pageSize, setPageSize] = useState(4); //상품 개수

  // 브라우저 크기에 따라 상품 개수 변경
  useEffect(() => {
    const width = window.innerWidth;
    const sizes = pageSizebyScreenWidth(width);
    setPageSize(sizes.all);
    console.log("ProductList: 화면 크기 설정", width, sizes.all);
  }, []);

  // api 불러오기
  const { products, totalPages } = useProductData({ page, pageSize, isPageinated: true });

  // 원본 products를 직접 정렬하면 React가 상태가 바뀌었다고 인식하지 못해서 화면이 다시 렌더링되지 않는 일이 생긴다.
  const sortedItems = [...products].sort((a, b) => {
    if ("updatedAt" === sortKey) return a[sortKey] - b[sortKey];
    if ("favoriteCount" === sortKey) return b[sortKey] - a[sortKey];
    return 0;
  });

  return (
    <div className="ProductList__warp">
      <div className="ProductList__header">
        <h1>전체 상품</h1>
        <form>
          <input type="text" placeholder="검색할 상품을 입력해주세요" />
          <button className="btn  btn--color1 btn--small">상품 등록하기</button>
        </form>
        <SortSelect sortKey={sortKey} onChange={setSortKey} />
      </div>
      <ProductDisplay sortedItems={sortedItems} bestList={false} />
      <Pagination currentPage={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

export default ProductList;
