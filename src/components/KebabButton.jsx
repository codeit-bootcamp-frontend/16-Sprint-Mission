import styles from "./KebabButton.module.css";

const KebabButton = ({ id, onClick, kebabRef }) => {
  return (
    <img
      name={id}
      className={styles["kebab-button"]}
      src={"/images/ic_kebab.png"}
      width={24}
      onClick={onClick}
      ref={kebabRef}
    />
  );
};

export default KebabButton;
