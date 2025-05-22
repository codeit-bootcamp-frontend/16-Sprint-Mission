import styles from "./ItemDescription.module.css";

const ItemDescription = ({ description, tags = [] }) => {
  return (
    <div className={styles["description-container"]}>
      <div className={styles["subtitle-container"]}>
        <h2 className={styles["subtitle"]}>상품 소개</h2>
        <span className={styles["description"]}>{description}</span>
      </div>
      <div className={styles["subtitle-container"]}>
        <h2 className={styles["subtitle"]}>상품 태그</h2>
        <div className={styles["tag-container"]}>
          {tags.map((tag) => {
            return (
              <div key={tag} className={styles["tag"]}>
                {`#${tag}`}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
