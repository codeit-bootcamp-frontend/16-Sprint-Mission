import styles from "./Pagination.module.scss";
import arrow from "../../assets/images/icons/ic_pagination_arrow.svg";

const Pagination = () => {
  return (
    <div className={styles["pagination"]}>
      <button
        type="button"
        className={`${styles["pagination__button"]} ${styles["pagination__button-prev"]}`}
      >
        <img src={arrow} alt="이전으로" />
      </button>
      <ul className={styles["pagination__list"]}>
        <li>
          <button
            type="button"
            className={`${styles["pagination__button"]} ${styles["pagination__button-current"]}`}
          >
            1
          </button>
        </li>
        <li>
          <button type="button" className={styles["pagination__button"]}>
            2
          </button>
        </li>
        <li>
          <button type="button" className={styles["pagination__button"]}>
            3
          </button>
        </li>
        <li>
          <button type="button" className={styles["pagination__button"]}>
            4
          </button>
        </li>
        <li>
          <button type="button" className={styles["pagination__button"]}>
            5
          </button>
        </li>
      </ul>
      <button
        type="button"
        className={`${styles["pagination__button"]} ${styles["pagination__button-next"]}`}
      >
        <img src={arrow} alt="다음으로" />
      </button>
    </div>
  );
};

export default Pagination;
