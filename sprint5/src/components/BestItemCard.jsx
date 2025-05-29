// 베스트 상품 리스트
import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./BestItemCard.css";

function BestItemCard({ limit = 4 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://panda-market-api.vercel.app/products?page=1&pageSize=100&orderBy=favorite"
      )
      .then((response) => {
        const top4 = response.data.list.slice(0, limit);
        setItems(top4);
      });
  }, []);

  return (
    <section className="item-card-container">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
}

export default BestItemCard;
