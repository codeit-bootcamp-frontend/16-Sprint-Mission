import { useEffect, useState } from "react";
import ProductList from "../../../../components/ProductList/ProductList";
import { getData } from "../../../../data/api";
import styles from "./BestProductArea.module.scss";
import usePagination from "../../../../hooks/usePagination";

const INIT_PAGE_SIZE = 4;
const ITEM_COUNT = {
  WEB: 4,
  TABLET: 2,
  MOBILE: 1,
};

const BestProductArea = () => {
  const { pageSize } = usePagination(ITEM_COUNT);
  const [bestList, setBestList] = useState([]);

  const getProductList = async (options) => {
    try {
      const data = await getData(options);
      if (!data) return;
      setBestList(data.list);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductList({ orderBy: "favorite", pageSize: INIT_PAGE_SIZE, page: 1 });
  }, []);

  return (
    <>
      <h2 className={styles.bestProductArea__title}>베스트 상품</h2>
      <div className={styles.bestProductArea__content}>
        <ProductList list={bestList} type="best" pageSize={pageSize} />
      </div>
    </>
  );
};

export default BestProductArea;
