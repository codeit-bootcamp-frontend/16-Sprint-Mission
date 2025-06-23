import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination/Pagination";
import ProductList from "../../../../components/ProductList/ProductList";
import { getData } from "../../../../data/api";
import styles from "./AllProductArea.module.scss";
import { getItemCount } from "../../../../utils/getItemCount";

const SORT_TYPE = {
  recent: "최신순",
  favorite: "좋아요순",
};
const SortDropdown = ({ orderBy, setOrderBy }) => {
  const [sortOpen, setSortOpen] = useState(false);
  const handleClickSort = () => setSortOpen(!sortOpen);
  const handleSelectSort = (sort) => {
    setOrderBy(sort);
    setSortOpen(!sortOpen);
  };

  return (
    <>
      <button
        type="button"
        className={styles.sortSelectBox__current}
        onClick={handleClickSort}
      >
        <span>{SORT_TYPE[orderBy]}</span>
      </button>
      {sortOpen && (
        <div className={styles.sortSelectBox__list}>
          <ul>
            {Object.keys(SORT_TYPE).map((sort) => (
              <li key={sort}>
                <button type="button" onClick={() => handleSelectSort(sort)}>
                  {SORT_TYPE[sort]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const ITEM_COUNT = {
  WEB: 10,
  TABLET: 6,
  MOBILE: 4,
};

const INIT_PAGE_SIZE = getItemCount(ITEM_COUNT);

const AllProductArea = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [pageSize, setPageSize] = useState(INIT_PAGE_SIZE);
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // 요구 정의서
  // 1. orderby="recent", 10가지 상품을 전체 상품 리스트에 렌더링
  // 2. 반응형에 따라 웹에선 10, 타블렛에선 6, 모바일에선 4 보여주기 (미디어 쿼리 사용하기)
  // 3. 전체 상품에서 드롭다운으로 최신순/좋아요순 정렬 기능 추가
  // 4. [심화] 페이지네이션 기능 구현

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

  const updatePageSize = () => {
    const itemCount = getItemCount(ITEM_COUNT);
    setPageSize(itemCount);
  };

  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => {
      window.removeEventListener("resize", updatePageSize);
    };
  }, []);

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
