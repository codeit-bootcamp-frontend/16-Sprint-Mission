// 기본 상품 카드
import heartIcon from "../assets/heart_Icon.png";
import "./ItemCard.css";
import ItemImage from "./ItemImage.jsx";

function ItemCard({ item }) {
  const imageSrc = item.images?.[0]; //fallback 용

  return (
    <div className="item-card">
      <ItemImage src={imageSrc} alt={item.name} />
      <h3>{item.name || "상품이미지"}</h3>
      <p>{item.price.toLocaleString()}원</p>
      <div className="like-section">
        <img src={heartIcon} alt="좋아요" className="heart-icon" />
        <span>{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default ItemCard;
