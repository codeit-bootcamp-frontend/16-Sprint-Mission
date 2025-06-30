import React, { Suspense, useEffect, useState } from 'react';
import SkeletonUi from '@components/SkeletonUi';
import { useLoadItems } from '@hooks/useLoadItems';
import { useResizeInnerWidth } from '@hooks/useResizeInnerWidth';
import LoadFailed from './LoadFailed';
import styles from './styles/ProductsFavorite.module.css';

const LazyProductItem = React.lazy(() => import('./ProductItem'));

function ProductsFavorite() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [favoriteQueryStrings, setFavoriteQueryStrings] = useState({
    page: 1,
    orderBy: 'favorite',
    pageSize: 4,
  });

  //resize 발생 시 pageSize 새로 가져다줘
  const { pageSize } = useResizeInnerWidth('favor');

  useEffect(() => {
    setFavoriteQueryStrings((prev) => ({ ...prev, pageSize }));
  }, [pageSize]);

  //쿼리 변경 시 가져오기
  const { loadFailed, result } = useLoadItems(favoriteQueryStrings);

  useEffect(() => {
    if (result.list) {
      setFavoriteItems(result.list);
    }
  }, [result]);

  return (
    <section className={styles.itemsFavorite}>
      <h2>베스트 상품</h2>
      {loadFailed ? (
        <LoadFailed />
      ) : (
        <ul className={styles.favoriteList}>
          {favoriteItems.map((item) => (
            <Suspense
              key={item.id}
              fallback={<SkeletonUi className="favoriteItemsSkeleton" />}
            >
              <li className={styles.card}>
                <LazyProductItem className={styles.item} item={item} />
              </li>
            </Suspense>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductsFavorite;
