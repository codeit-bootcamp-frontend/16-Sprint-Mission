import styles from '../css/ItemTemp.module.css';

function ProductItem({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.images[0]}></img>
      <div className={styles.card__name}>{item.name}</div>
      <div className={styles.card__price}>{item.price.toLocaleString('ko-KR')}</div>
      <div className={styles.card__favorite}>❤{item.favoriteCount}</div>
    </div>
  );
}

export default ProductItem;
