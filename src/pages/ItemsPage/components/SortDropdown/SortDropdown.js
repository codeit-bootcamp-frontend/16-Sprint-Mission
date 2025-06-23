import { useState } from "react";
import styles from "./SortDropdown.module.scss";

const SORT_TYPE = {
  recent: "최신순",
  favorite: "좋아요순",
};

const SortDropdown = ({ orderBy, setOrderBy }) => {
  const [sortOpen, setSortOpen] = useState(false);
  const handleClickSort = () => setSortOpen(!sortOpen);
  const handleSelectSort = (sort) => {
    setOrderBy(sort);
    setSortOpen(!sortOpen);
  };

  return (
    <>
      <button
        type="button"
        className={styles.sortSelectBox__current}
        onClick={handleClickSort}
      >
        <span>{SORT_TYPE[orderBy]}</span>
      </button>
      {sortOpen && (
        <div className={styles.sortSelectBox__list}>
          <ul>
            {Object.keys(SORT_TYPE).map((sort) => (
              <li key={sort}>
                <button type="button" onClick={() => handleSelectSort(sort)}>
                  {SORT_TYPE[sort]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SortDropdown;
