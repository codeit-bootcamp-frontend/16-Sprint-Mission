// 전체 상품 리스트
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

function AllItemCard({ limit = 10 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent"
      )
      .then((res) => setItems(res.data.list));
  }, []);

  return (
    <section className="item-card-container">
      {items.slice(0, limit).map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
}

export default AllItemCard;
