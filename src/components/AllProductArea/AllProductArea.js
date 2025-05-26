import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import ProductList from "../ProductList/ProductList";
import styles from "./AllProductArea.module.scss";

const AllProductArea = () => {
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
          <button type="button" className={styles.sortSelectBox__current}>
            <span>최신순</span>
          </button>
          <div className={styles.sortSelectBox__list}>
            <ul>
              <li>
                <button type="button">최신순</button>
              </li>
              <li>
                <button type="button">좋아요순</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.allProductArea__content}>
        <ProductList />
        <Pagination />
      </div>
    </>
  );
};

export default AllProductArea;
