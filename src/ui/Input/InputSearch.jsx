import { useEffect, useState } from "react";
import styles from "./InputSearch.module.css";
import searchImg from "../../assets/images/ic-search.svg";

const InputSearch = ({ keyword, onSearch, className, placeholder }) => {
  const [value, setValue] = useState(keyword);

  const handleSearch = () => {
    onSearch({ keyword: value });
  };

  useEffect(() => {
    setValue(keyword);
  }, [keyword]);

  return (
    <div className={`${styles["search-area"]} ${className}`}>
      <img src={searchImg} alt="상품 검색" className={styles["search-ico"]} />
      <input
        id="inputSearch"
        type="search"
        name="keyword"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default InputSearch;
