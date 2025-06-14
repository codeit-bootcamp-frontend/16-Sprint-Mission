import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "./ProductDataProvider";
import styles from "./styles/ProductsFilterBar.module.css";

function ProductsFilterBar() {
  const { queryStrings, setQueryStrings } = useContext(ProductData);

  // dataset.value에 의한 queryStrings변경
  const handleChange = (e) => {
    if (e.target.tagName !== "LI") return;

    setQueryStrings((prev) => ({
      ...prev,
      orderBy: e.target.dataset.value,
    }));
  };

  return (
    <div className={styles.filterContainer}>
      <button>
        <Link to="/addItem">상품 등록하기</Link>
      </button>
      <div className={styles.search}>
        <label
          className={styles.searchIcon}
          htmlFor="searchInput"
          aria-label="검색창 아이콘"
        />
        <input
          id="searchInput"
          className={styles.searchInput}
          placeholder="검색할 상품을 입력해주세요"
        ></input>
      </div>
      <label htmlFor="showDropdown" className={styles.selector}>
        {queryStrings.orderBy === "recent" ? "최신 순" : "좋아요 순"}
        <input
          aria-haspopup="listbox"
          id="showDropdown"
          type="checkbox"
        ></input>
        <ul role="listbox" onClick={handleChange}>
          <li
            role="option"
            aria-selected={queryStrings.orderBy === "recent"}
            data-value="recent"
          >
            최신 순
          </li>
          <li
            role="option"
            aria-selected={queryStrings.orderBy === "favorite"}
            data-value="favorite"
          >
            좋아요 순
          </li>
        </ul>
      </label>
    </div>
  );
}

export default ProductsFilterBar;
