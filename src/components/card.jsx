import './card.css';
import Heart from '../public/items/ic_heart.png';

function Card({ element }) {
  return (
    <div className="wrapper">
      <img
        src={element.images[0]}
        alt={`${element.id}번째 판매 물품 대표 사진`}
        className='card-image'
      />
      <div className='card-text-container'>
        <h2>{element.name}</h2>
        <h3>{element.price.toLocaleString()}원</h3>
        <div className='card-favorite-container'>
          <img src={Heart} alt={`${element.id}번째 판매 물품 즐겨찾기 아이콘`} />
          <span>{element.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
