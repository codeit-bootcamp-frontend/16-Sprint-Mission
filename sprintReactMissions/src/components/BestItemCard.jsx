// 베스트 상품 리스트
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "../styles/BestItemCard.css";
import axiosInstance from "../lib/axiosInstance";

function BestItemCard({ limit = 4 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/products", {
        params: {
          page: 1,
          pageSize: 100,
          orderBy: "favorite",
        },
      })
      .then((response) => {
        const topItems = response.data.list.slice(0, limit);
        setItems(topItems);
      });
  }, [limit]);

  return (
    <section className="best-item-card">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
}

export default BestItemCard;
