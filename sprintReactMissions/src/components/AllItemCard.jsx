// 전체 상품 리스트 items 렌더링 역할
import React from "react";
import ItemCard from "./ItemCard";

const Default_Limit = 10; // 기본 limit 값

function AllItemCard({ items = [], limit = Default_Limit }) {
  return (
    <section className="item-card-container">
      {items.slice(0, limit).map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
}

export default AllItemCard;
