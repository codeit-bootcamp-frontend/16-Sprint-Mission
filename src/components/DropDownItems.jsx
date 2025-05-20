import styles from "./DropDownItems.module.css";

function DropDownItems({ onItemClick }) {
  const handleItemClick = (value, label) => {
    onItemClick(value, label);
  };
  return (
    <ul className={styles.container}>
      <li
        className={styles.items}
        onClick={() => handleItemClick("recent", "최신순")}
        value="recent"
      >
        최신순
      </li>
      <li
        className={styles.items}
        onClick={() => handleItemClick("favorite", "좋아요순")}
        value="favorite"
      >
        좋아요순
      </li>
    </ul>
  );
}

export default DropDownItems;
