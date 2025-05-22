import ItemCard from "../ItemCard/ItemCard";
import ItemCardSkeleton from "../ItemCardSkeleton/ItemCardSkeleton";
import styles from "./ItemsContainer.module.css";

const ItemsContainer = ({ listName, itemList, pageSize }) => {
  return (
    <div className={`${styles["items-container"]} ${styles[listName]}`}>
      {itemList.length === 0
        ? Array.from({ length: pageSize }, (_, i) => {
            return <ItemCardSkeleton key={i} />;
          })
        : itemList.map((item) => {
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
