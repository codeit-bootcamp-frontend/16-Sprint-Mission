import { useContext } from "react";
import styles from "../styles/FilterProducts.module.css";
import { ProductAllContext } from "../context/ProductAllContext";

function FilterProducts() {
  const { queryStrings, setQueryStrings } = useContext(ProductAllContext);

  // dataset.value에 의한 queryStrings변경
  const handleChange = (e) => {
    if (e.target.tagName !== "LI") return;
    setQueryStrings((prev) => ({
      ...prev,
      orderBy: e.target.dataset.value,
    }));
  };

  return (
    <div className={styles[`filter-bar`]}>
      <button>상품 등록하기</button>
      <div className={styles.filter__search}>
        <label
          className={styles[`filter__search-icon`]}
          htmlFor="searchInput"
          aria-label="검색창 아이콘"
        />
        <input
          aria-label="검색할 상품 입력"
          id="searchInput"
          className={styles[`filter__search-input`]}
          placeholder="검색할 상품을 입력해주세요"
        ></input>
      </div>
      <label htmlFor="showDropdown" className={styles.filter__select}>
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

export default FilterProducts;
