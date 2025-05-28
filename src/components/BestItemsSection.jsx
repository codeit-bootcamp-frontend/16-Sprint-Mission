import useItem from "./Hooks/useItem";
import ItemCard from "./ItemCard";
import styles from "../pages/ItemsPage.module.css";

function BestItemsSection({ bp }) {
  const bestCountMap = { mobile: 1, tablet: 2, desktop: 4 };
  const bestCount = bestCountMap[bp];
  const { items: bestItems = [] } = useItem({
    page: 1,
    pageSize: bestCount,
    orderBy: "favorite",
  });

  return (
    <section className={styles.bestItemsSection}>
      <h2>베스트 상품</h2>
      <div className={styles.bestGrid}>
        {bestItems.map((item) => (
          <ItemCard
            key={item.id}
            imageClassName={styles.bestImgWrap}
            image={item.images[0]}
            name={item.name}
            price={item.price}
            favoriteCount={item.favoriteCount}
          />
        ))}
      </div>
    </section>
  );
}

export default BestItemsSection;
