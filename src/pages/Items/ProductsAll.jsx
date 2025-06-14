import { useContext, useEffect } from 'react';
import { useLoadItems } from '@hooks/useLoadItems';
import { useResizeInnerWidth } from '@hooks/useResizeInnerWidth';
import LoadFailed from './LoadFailed';
import Pagination from './Pagination';
import { ProductData } from './ProductDataProvider';
import ProductItem from './ProductItem';
import ProductsFilterBar from './ProductsFilterBar';
import styles from './styles/ProductsAll.module.css';

function ProductsAll() {
  const { products, setProducts, setTotal, queryStrings, setQueryStrings } =
    useContext(ProductData);

  //resize발생하면 페이지사이즈 다시 가져다줘
  const { pageSize } = useResizeInnerWidth('all');

  useEffect(() => {
    setQueryStrings((prev) => ({ ...prev, pageSize }));
  }, [pageSize]);

  // 쿼리스트링으로 아이템 가져오기 가져다줘
  const { loadFail, result } = useLoadItems(queryStrings);

  useEffect(() => {
    if (result.list) {
      setProducts(result.list);
      setTotal(result.totalCount);
    }
  }, [result]);

  return (
    <>
      <section className={styles.items__all}>
        <div className={styles.filterArea}>
          <h2>전체 상품</h2>
          <ProductsFilterBar />
        </div>
        {loadFail ? (
          <LoadFailed />
        ) : (
          <ul className={styles.allList}>
            {products.map((item) => {
              return (
                <li className={styles.card} key={item.id}>
                  <ProductItem
                    className={styles.item}
                    item={item}
                  ></ProductItem>
                </li>
              );
            })}
          </ul>
        )}
        <Pagination />
      </section>
    </>
  );
}

export default ProductsAll;
