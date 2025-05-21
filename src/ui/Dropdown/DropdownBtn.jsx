import styles from "./DropdownBtn.module.css";
import arrowDownImg from "../../assets/images/ic_arrow_down.png";
import sortImg from "../../assets/images/ic_sort.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MOBILE_BREAKPOINT = 600;

const DropdownBtn = ({ selected, onClickDropdownBtn, isActive, iconType }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < MOBILE_BREAKPOINT;

  return (
    <button
      type="button"
      className={`
        ${styles["dropdown-btn"]}
        ${isActive ? styles.active : ""}
      `}
      onClick={onClickDropdownBtn}
    >
      {isMobile ? (
        <img
          src={iconType === "orderIcon" ? sortImg : arrowDownImg}
          alt="정렬"
        />
      ) : (
        <span className={styles["dropdown-btn-container"]}>
          {selected}
          <img src={arrowDownImg} alt="더보기" />
        </span>
      )}
    </button>
  );
};

export default DropdownBtn;
