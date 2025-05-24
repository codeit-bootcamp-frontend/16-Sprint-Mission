//item
import heartIcon from "./assets/heart_Icon.png";
const ItemCard = ({ item }) => {
  if (!item) {
    return (
      <article>
        <img src="" alt="no image" />
        <h3>상품명</h3>
        <p>0원</p>
        <img src={heartIcon} alt="heart" />
      </article>
    );
  }
  return (
    <article>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price.toLocaleString()}원</p>
      <img src={heartIcon} alt="heart" />
    </article>
  );
};

export default ItemCard;
