// 기본 상품 카드
import heartIcon from "./assets/heart_Icon.png";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.images[0]} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price.toLocaleString()}원</p>
      <img src={heartIcon} alt="좋아요" />
      <h3>{item.favoriteCount}</h3>
    </div>
  );
}

export default ItemCard;
