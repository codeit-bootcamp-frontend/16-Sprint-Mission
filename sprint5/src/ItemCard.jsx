// 기본 상품 카드
import heartIcon from "./assets/heart_Icon.png";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img
        src={
          item.images && item.images.length > 0
            ? item.images[0]
            : "대체이미지주소.png"
        }
        alt={item.name}
      />
      <h3>{item.name || "상품이미지"}</h3>
      <p>{item.price.toLocaleString()}원</p>
      <img src={heartIcon} alt="좋아요" />
      <h3>{item.favoriteCount}</h3>
    </div>
  );
}

export default ItemCard;
