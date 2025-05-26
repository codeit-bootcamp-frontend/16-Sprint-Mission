// 상품 카드
import React, { useEffect, useState } from "react";
import axios from "axios";
import heartIcon from "./assets/heart_Icon.png";

const ItemCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products"
        );
        console.log(response.data);
        setItems(response.data.list); // list 배열만 꺼내서 items에 저장장
      } catch (error) {
        console.error("상품 정보를 불러오는데 실패했습니다!", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <section className="item-card-container">
      {items.map((item) => (
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
};

export default ItemCard;
