import heart from "../../assets/heart.png";

function Item({ item }) {
  return (
    <div>
      <img src={item.img} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.price}원</p>
        <div>
          <img src={heart} alt="하트" />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default Item;
