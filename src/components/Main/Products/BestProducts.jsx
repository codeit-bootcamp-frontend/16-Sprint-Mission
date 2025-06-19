import { useEffect, useState } from "react";
import Heart from "../../../images/HeartLogo.svg";
import "./BestProducts.css";

// 단일 상품 카드 컴포넌트
const BestProductCard = ({ item }) => {
  return (
    <div className="BestProducts__card">
      <img
        className="BestProducts__card--image"
        src={item.images}
        alt={item.description}
      />
      <p>{item.description}</p>
      <p className="BestProducts__card--price">
        {item.price.toLocaleString()}원
      </p>
      <div className="BestProducts__card--likes">
        <button>
          <img src={Heart} alt="좋아요" width={16} height={16} />
        </button>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
};

// 베스트 상품 목록 컴포넌트
const BestProducts = () => {
  const [bestItems, setBestItems] = useState([]);

  useEffect(() => {
    const fetchBestItems = async () => {
      try {
        const res = await fetch(
          "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
        );
        const data = await res.json();
        setBestItems(data.list); // 'list' 속성에서 배열 추출
      } catch (err) {
        console.error("상품 불러오기 실패:", err);
      }
    };

    fetchBestItems();
  }, []);

  return (
    <div className="BestProducts">
      <h3>베스트 상품</h3>
      <div className="BestProducts__list">
        {bestItems.map((item) => (
          <BestProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
