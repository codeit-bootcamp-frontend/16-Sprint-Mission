import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { getData } from "../../data/api";
import styles from "./BestProductArea.module.scss";
import { getItemCount } from "../../utils/getItemCount";

const INIT_PAGE_SIZE = 4;
const ITEM_COUNT = {
  WEB: 4,
  TABLET: 2,
  MOBILE: 1,
};

const BestProductArea = () => {
  const [bestList, setBestList] = useState([]);
  const [pageSize, setPageSize] = useState(INIT_PAGE_SIZE);

  // 요구 정의서
  // 1. orderby="favorite", 4가지 상품을 베스트 상품 리스트에 렌더링
  // 2. 반응형에 따라 웹에선 4, 타블렛에선 2, 모바일에선 1 보여주기 (미디어 쿼리 사용하기)

  const getProductList = async (options) => {
    try {
      const data = await getData(options);
      if (!data) return;
      setBestList(data.list);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePageSize = () => {
    const itemCount = getItemCount(ITEM_COUNT);
    setPageSize(itemCount);
  };

  useEffect(() => {
    getProductList({ orderBy: "favorite", pageSize: INIT_PAGE_SIZE, page: 1 });

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => {
      window.removeEventListener("resize", updatePageSize);
    };
  }, []);

  return (
    <>
      <h2 className={styles.bestProductArea__title}>베스트 상품</h2>
      <div className={styles.bestProductArea__content}>
        <ProductList list={bestList.slice(0, pageSize)} type="best" />
      </div>
    </>
  );
};

export default BestProductArea;
