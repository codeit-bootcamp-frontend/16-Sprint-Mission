import { useState, useEffect } from "react";
import { pageSizebyScreenWidth } from "../../utils/pageSizebyScreenWidth.js";
import { useProductData } from "../../hooks/useProductData.jsx";
import ProductDisplay from "./ProductDisplay.jsx";
import { useSortedItems } from "../../hooks/useSortedItems.jsx";
import "../../styles/ProductList.css";

function BestProductList() {
  const [visibleCount, setVisibleCount] = useState(1); // 보여줄 상품 개수

  const { products } = useProductData({ pageSize: 20 });

  const sortedItems = useSortedItems(products, "favoriteCount");

  // 브라우저 크기에 따라 상품 개수 변경
  useEffect(() => {
    const width = window.innerWidth;
    const sizes = pageSizebyScreenWidth(width);
    setVisibleCount(sizes.best);
  }, []);

  return (
    <div>
      <div className="Products__header mb16">
        <h1>베스트 상품</h1>
      </div>
      <ProductDisplay sortedItems={sortedItems.slice(0, visibleCount)} bestList={true} />
    </div>
  );
}

export default BestProductList;
