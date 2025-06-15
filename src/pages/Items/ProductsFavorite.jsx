import { useEffect, useState } from "react";
import { useLoadItems } from "@hooks/useLoadItems";
import { useResizeInnerWidth } from "@hooks/useResizeInnerWidth";
import LoadFailed from "./LoadFailed";
import ProductItem from "./ProductItem";
import styles from "./styles/ProductsFavorite.module.css";

function ProductsFavorite() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [favoriteQueryStrings, setFavoriteQueryStrings] = useState({
    page: 1,
    orderBy: "favorite",
    pageSize: 4,
  });

  //resize 발생 시 pageSize 새로 가져다줘
  const { pageSize } = useResizeInnerWidth("favor");

  useEffect(() => {
    setFavoriteQueryStrings((prev) => ({ ...prev, pageSize }));
  }, [pageSize]);

  //쿼리 변경 시 가져오기
  const { loadFail, result } = useLoadItems(favoriteQueryStrings);

  useEffect(() => {
    if (result.list) {
      setFavoriteItems(result.list);
    }
  }, [result]);

  return (
    <section className={styles.items__favorite}>
      <h2>베스트 상품</h2>
      {loadFail ? (
        <LoadFailed />
      ) : (
        <ul className={styles.favoriteList}>
          {favoriteItems.map((item) => (
            <li className={styles.card} key={item.id}>
              <ProductItem className={styles.item} item={item}></ProductItem>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductsFavorite;
