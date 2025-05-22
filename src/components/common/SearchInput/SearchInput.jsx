import styles from "./SearchInput.module.css";

const SearchInput = ({ inputValue, onInputChange, onInputEnterPress }) => {
  return (
    <div className={styles["search-input-container"]}>
      <img
        className={styles["search-input-icon"]}
        src={"./images/ic_search.png"}
        width={24}
      />
      <input
        className={styles["search-input"]}
        placeholder="검색할 상품을 입력해주세요"
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onInputEnterPress}
      ></input>
    </div>
  );
};

export default SearchInput;
