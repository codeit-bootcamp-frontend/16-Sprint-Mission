import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "../styles/ProductsFavorite.module.css";
import { useResizeRequest } from "../hooks/useResizeRequest ";
import FailLoad from "./FailLoad";
import { getProducts } from "../service/api";

function ProductsFavorite() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [favoriteQueryStrings, setFavoriteQueryStrings] = useState({
    page: 1,
    orderBy: "favorite",
    pageSize: 4,
  });
  const [favoriteError, setFavoriteError] = useState(null);

  //innerWidth바뀌면 쿼리 다시 설정해줘
  useResizeRequest("favor", setFavoriteQueryStrings);

  //쿼리 변경 시 가져오기
  useEffect(() => {
    async function loadFavoriteItems() {
      try {
        const result = await getProducts(favoriteQueryStrings);
        setFavoriteItems(result.list);
      } catch (err) {
        setFavoriteError(err);
      }
    }
    loadFavoriteItems();
  }, [favoriteQueryStrings]);

  return (
    <section className={styles.items__favorite}>
      <h2>베스트 상품</h2>
      {favoriteError ? (
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
