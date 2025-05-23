import styles from "../../styles/ProductsFavorite.module.css";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useResizeRequest } from "../../hooks/useResizeRequest ";
import FailLoad from "./FailLoad";
import { useLoadItems } from "../../hooks/useLoadItems";

function ProductsFavorite() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [favoriteQueryStrings, setFavoriteQueryStrings] = useState({
    page: 1,
    orderBy: "favorite",
    pageSize: 4,
  });

  //resize 발생 시 pageSize 새로 가져다줘
  const [pageSize] = useResizeRequest("favor");
  useEffect(() => {
    setFavoriteQueryStrings((prev) => {
      return { ...prev, pageSize };
    });
  }, [pageSize]);

  //쿼리 변경 시 가져오기
  const [loadFail, result] = useLoadItems(favoriteQueryStrings);

  useEffect(() => {
    if (result.list) {
      setFavoriteItems([...result.list]);
    }
  }, [result]);

  return (
    <section className={styles.items__favorite}>
      <h2>베스트 상품</h2>
      {loadFail ? (
        <FailLoad></FailLoad>
      ) : (
        <ul className={styles["favorite-list"]}>
          {favoriteItems.map((item) => (
            <li className={styles[`favorite-list__card`]} key={item.id}>
              <ProductItem
                className={styles["favorite-list__item"]}
                item={item}
              ></ProductItem>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductsFavorite;
