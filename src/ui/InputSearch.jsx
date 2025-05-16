import { useState } from "react";
import styles from "./InputSearch.module.css";
import searchImg from "../assets/images/ic-search.svg";

const InputSearch = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className={styles["search-area"]}>
      <img src={searchImg} alt="상품 검색" className={styles["search-ico"]} />
      <input
        type="search"
        name="keyword"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputSearch;
