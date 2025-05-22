import styles from "./PaginationButton.module.css";

const ICON_TYPE_ENABLE_SRC = {
  prev: {
    false: "/images/ic_prevPageClick_inactive.png",
    true: "/images/ic_prevPageClick_active.png",
  },
  number: {
    false: null,
    true: null,
  },
  next: {
    false: "/images/ic_nextPageClick_inactive.png",
    true: "/images/ic_nextPageClick_active.png",
  },
};

const PaginationButton = ({
  type,
  pageNumber = null,
  onClick,
  isEnabled = true,
  currentPageNumber = 0,
}) => {
  const ButtonClassName = currentPageNumber === pageNumber ? "selected" : "";
  return (
    <button
      value={pageNumber}
      className={`${styles["pagination-button"]} ${styles[ButtonClassName]}`}
      onClick={onClick}
      disabled={!isEnabled}
    >
      {type !== "number" && (
        <img
          className={styles["pagination-button-image"]}
          src={ICON_TYPE_ENABLE_SRC[type][isEnabled]}
          width={16}
        />
      )}
      {type === "number" && pageNumber}
    </button>
  );
};

export default PaginationButton;
