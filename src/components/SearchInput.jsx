import React from "react";
import styles from "./SearchInput.module.css";

export default function SearchInput({ value, onChange, onSearch }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="상품 검색"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button className={styles.button} onClick={onSearch}>
        검색
      </button>
    </div>
  );
}
