// 상품 카드
import React, { useEffect, useState } from "react";
import axios from "axios";
import heartIcon from "./assets/heart_Icon.png";

function ItemCard({ limit }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent"
        );
        setItems(response.data.list); // list 배열만 꺼내서 items에 저장
      } catch (error) {
        console.error("상품 정보를 불러오는데 실패했습니다!", error);
      }
    };

    fetchItems();
  }, []);

  const shownItems = limit ? items.slice(0, limit) : items;

  return (
    <section className="item-card-container">
      {shownItems.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price.toLocaleString()}원</p>
          <button>
            <img src={heartIcon} alt="좋아요" />
          </button>
        </div>
      ))}
    </section>
  );
}

export default ItemCard;
