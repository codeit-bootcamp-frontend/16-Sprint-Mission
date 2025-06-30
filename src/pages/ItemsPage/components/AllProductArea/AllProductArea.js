import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination/Pagination";
import ProductList from "../../../../components/ProductList/ProductList";
import { getData } from "../../../../data/api";
import styles from "./AllProductArea.module.scss";
import usePagination from "../../../../hooks/usePagination";
import SortDropdown from "../SortDropdown/SortDropdown";

const ITEM_COUNT = {
  WEB: 10,
  TABLET: 6,
  MOBILE: 4,
};

const AllProductArea = () => {
  const { currentPage, setCurrentPage, pageSize } = usePagination(ITEM_COUNT);
  const [totalCount, setTotalCount] = useState(0);
  const [orderBy, setOrderBy] = useState("recent");
  const [productList, setProductList] = useState([]);

  const getProductList = async (options) => {
    try {
      const data = await getData(options);
      if (!data) return;
      setProductList(data.list);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductList({
      page: currentPage,
      pageSize: pageSize,
      orderBy: orderBy,
    });
  }, [currentPage, pageSize, orderBy]);

  return (
    <>
      <div className={styles.allProductArea__utils}>
        <h2 className={styles.allProductArea__title}>전체 상품</h2>
        <div className={styles.utils__searchBox}>
          <form action="" className={styles.searchBox__form}>
            <input
              type="text"
              name=""
              id=""
              placeholder="검색할 상품을 입력해주세요"
            />
          </form>
        </div>
        <Link to="/additem" className={styles.utils__productAdd}>
          상품 등록하기
        </Link>
        <div className={styles.utils__sortSelectBox}>
          <SortDropdown orderBy={orderBy} setOrderBy={setOrderBy} />
        </div>
      </div>
      <div className={styles.allProductArea__content}>
        <ProductList list={productList} />
        <Pagination
          pageSize={pageSize}
          totalCount={totalCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default AllProductArea;
