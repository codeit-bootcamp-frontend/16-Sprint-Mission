import searchIcon from "../assets/input/search.svg";
import styles from "./SearchItem.module.css";

function SearchItem({ value, onChange }) {
  return (
    <div className={styles.search}>
      <img className={styles.img} src={searchIcon} alt="검색 아이콘" />
      <input
        className={styles.input}
        value={value}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchItem;
