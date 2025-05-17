import ItemCard from './ItemCard';
import styles from './itemsContainer.module.css';

const ItemsContainer = ({ listName, itemList }) => {
  return (
    <div className={`${styles['items-container']} ${styles[listName]}`}>
      {itemList.map((item) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            imageUrl={item.images?.[0]}
            name={item.name}
            price={item.price}
            favoriteCount={item.favoriteCount}
          />
        );
      })}
    </div>
  );
};

export default ItemsContainer;
