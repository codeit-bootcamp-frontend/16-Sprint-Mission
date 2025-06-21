import "./css/Card.css";
import HeartIcon from "./HeartIcon.js";
import defaultImg from "../img/img_default.svg";

const Card = ({ data }) => {
  const { images, name, price, favoriteCount } = data;
  return (
    <div>
      <img
        className="card__image"
        alt="중고상품 이미지"
        src={images[0] ?? defaultImg}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = defaultImg;
        }}
      />
      <div className="card__info">
        <div className="card__info__title">{name}</div>
        <div className="card__info__price">
          {price.toLocaleString("ko-KR")}원
        </div>

        <div className="card__icon__group">
          <HeartIcon />
          <span className="heart__icon__count">{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
