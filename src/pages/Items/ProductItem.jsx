import heartIcon from '@assets/icon/ic_heart.png';
import loadFailImg from '@assets/images/loadFailImg.png';
import { useNavigate } from 'react-router-dom';
import styles from './styles/ProductItem.module.css';

function ProductItem({ className, item }) {
  const navigator = useNavigate();

  function getItem() {
    navigator(`/items/${item.id}`);
  }

  return (
    <div onClick={getItem} className={`${styles.card} ${className}`}>
      <img
        src={item.images[0] || loadFailImg}
        onError={(e) => (e.currentTarget.src = loadFailImg)}
        alt="상품이미지"
      />
      <div className={styles.name}>{item.name}</div>
      <div className={styles.price}>
        {`${item.price.toLocaleString('ko-KR')}원`}
      </div>
      <div className={styles.favorite}>
        <img src={heartIcon} alt="좋아요 아이콘" />
        {item.favoriteCount}
      </div>
    </div>
  );
}

export default ProductItem;
