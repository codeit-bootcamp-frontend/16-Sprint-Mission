import heart from "../../assets/heart.svg";

function Item({ item }) {
  return (
    <div className="itemCard">
      <img src={item.images} alt={item.name} className="itemImage" />
      <div className="itemDescription">
        <p className="itemTitle">{item.name}</p>
        <h2 className="itemPrice">{item.price.toLocaleString()}원</h2>
        <div className="favoriteHeart">
          <img src={heart} alt="하트" />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default Item;
