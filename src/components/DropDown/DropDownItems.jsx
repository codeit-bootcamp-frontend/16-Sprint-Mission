import styles from "./DropDownItems.module.css";

const SORT_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

function DropDownItems({ onItemClick }) {
  return (
    <ul className={styles.container}>
      {SORT_OPTIONS.map(({ value, label }) => (
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
