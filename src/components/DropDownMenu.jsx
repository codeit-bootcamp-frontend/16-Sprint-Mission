import styles from "./DropDownMenu.module.css";

const DropDownMenu = ({ menuItems, DropDownRef }) => {
  return (
    <ul className={styles["dropdown-menu"]} ref={DropDownRef}>
      {menuItems.map(({ label, onClick }) => (
        <li className={styles["dropdown-button"]} key={label} onClick={onClick}>
          {label}
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;
