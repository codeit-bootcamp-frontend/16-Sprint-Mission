import { useState, useEffect } from "react";
import { useProductData } from "../api.jsx";
import { pageSizebyScreenWidth } from "./pageSizebyScreenWidth.jsx";
import ProductDisplay from "./ProductDisplay.jsx";
import "./css/ProductList.css";

function BestProductList() {
  const [visibleCount, setVisibleCount] = useState(1); // 보여줄 상품 개수

  // api 불러오기, 20개 불러온 뒤 반응형에 따라 자름
  const { products } = useProductData({ pageSize: 20, isPageinated: false });

  const sortedItems = [...products].sort((a, b) => b.favoriteCount - a.favoriteCount).slice(0, visibleCount);

  // 브라우저 크기에 따라 상품 개수 변경
  useEffect(() => {
    const width = window.innerWidth;
    const sizes = pageSizebyScreenWidth(width);
    setVisibleCount(sizes.best);
  }, []);

  return (
    <div className="ProductList__warp">
      <div className="ProductList__header">
        <h1>인기 상품</h1>
      </div>
      <ProductDisplay sortedItems={sortedItems} bestList={true} />
    </div>
  );
}

export default BestProductList;
