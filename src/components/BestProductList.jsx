import "./BestProductList.css";
import { useState } from "react";
import ProductForm from "./ProductForm";
import useWindowDimensions from "../hooks/useWindowDimensions";

const BestProductList = ({ items }) => {
  const { width } = useWindowDimensions();

  let pageSize = 4; // Desktop
  if (width >= 768 && width <= 1199) pageSize = 2; // Tablet
  if (width >= 480 && width <= 767) pageSize = 1; // Mobile

  const [order, setOrder] = useState("favoriteCount");

  const sortedItems = [...items]
    .sort((a, b) => b[order] - a[order])
    .slice(0, pageSize);

  return (
    <article className="best_product_list_wrapper">
      <h2>베스트 상품</h2>
      <div className="best_product_list">
        {sortedItems.map((item, index) => (
          <ProductForm key={item.id} item={item} index={index} />
        ))}
      </div>
    </article>
  );
};
export default BestProductList;
