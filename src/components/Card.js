import "../css/components/Card.css";
import heartIcon from "../img/heart.svg";
import defaultImg from "../img/img_default.svg";
function Card({ data }) {
  return (
    <div>
      <img
        className="card__image"
        alt="중고상품 이미지"
        src={data.images[0] ?? defaultImg}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = defaultImg;
        }}
      />
      <div className="card__info">
        <div className="card__info__title">{data.name}</div>
        <div className="card__info__price">
          {data.price.toLocaleString("ko-KR")}원
        </div>

        <div className="card__icon__group">
          <img src={heartIcon} alt="하트 아이콘" className="heart__icon" />
          <span className="heart__icon__count">{data.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
