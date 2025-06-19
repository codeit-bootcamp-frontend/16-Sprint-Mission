import KebabMenu from "../common/KebabMenu/KebabMenu";
import styles from "./ItemTitleHeader.module.css";

const ItemTitleHeader = ({ name, price, id, menuItems }) => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["title-container"]}>
        <h1 className={styles["title"]}>{name}</h1>
        <span className={styles["price"]}>{price}</span>
      </div>
      <KebabMenu id={id} menuItems={menuItems} />
    </div>
  );
};

export default ItemTitleHeader;
