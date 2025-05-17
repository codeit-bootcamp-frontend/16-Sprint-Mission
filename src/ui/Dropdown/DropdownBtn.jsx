import styles from "./DropdownBtn.module.css";
import arrowDownImg from "../../assets/images/ic_arrow_down.png";
import sortImg from "../../assets/images/ic_sort.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MOBILE = 600;

const DropdownBtn = ({ selected, onClickDropdownBtn, isActive, iconType }) => {
  const { width } = useWindowDimensions();

  return (
    <button
      type="button"
      className={`
        ${styles["dropdown-btn"]}
        ${isActive ? styles.active : ""}
      `}
      onClick={onClickDropdownBtn}
    >
      {width >= MOBILE ? (
        <>
          {selected}
          <img src={arrowDownImg} alt="더보기" />
        </>
      ) : (
        <img
          src={iconType === "orderIcon" ? sortImg : arrowDownImg}
          alt="정렬"
        />
      )}
    </button>
  );
};

export default DropdownBtn;
