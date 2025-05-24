import "../css/components/Card.css";
import heartIcon from "../img/heart.svg";
function Card({ data }) {
  return <div>
    <img className="card__image" alt="중고상품 이미지"/>
    <div className="card__info">
    <div className="card__info__title">제목</div>
      <div className="card__info__price">가격</div>

      <div className="card__icon__group">
        <img src={heartIcon} alt="하트 아이콘" className="heart__icon"/>
        <span className="heart__icon__count">111</span>
        
      </div>
    </div>
    </div>;
}

export default Card;
