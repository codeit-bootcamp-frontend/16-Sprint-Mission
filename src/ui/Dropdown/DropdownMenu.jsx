import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ items, onClick, isDropdownOpen }) => {
  return (
    <ul
      className={`
        ${styles["dropdown-menu"]}
        ${isDropdownOpen ? styles.active : ""}
      `}
    >
      {items.map((item) => (
        <li key={item}>
          <button onClick={onClick} className={styles["dropdown-menu-btn"]}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
