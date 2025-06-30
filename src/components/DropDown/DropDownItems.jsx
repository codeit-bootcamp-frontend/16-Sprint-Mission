import { useState } from "react";
import styles from "./DropDownItems.module.css";

const SORT_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

function DropDownItems({className, onItemClick , option = SORT_OPTIONS}) {
  const [options, setOption] = useState(option)

  return (
    <ul className={!className ? styles.container : styles.commentDropDown}>
      {options.map(({ value, label }) => (
        <li
          key={value}
          className={styles.items}
          onClick={() => onItemClick(value, label)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}

export default DropDownItems;
