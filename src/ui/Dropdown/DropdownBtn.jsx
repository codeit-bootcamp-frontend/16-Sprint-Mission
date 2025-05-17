import styles from "./DropdownBtn.module.css";
import arrowDownImg from "../../assets/images/ic_arrow_down.png";

const DropdownBtn = ({ selected, onClickDropdownBtn, isActive }) => {
  return (
    <button
      type="button"
      className={`
        ${styles["dropdown-btn"]}
        ${isActive ? styles.active : ""}
      `}
      onClick={onClickDropdownBtn}
    >
      {selected}
      <img src={arrowDownImg} alt="더보기" />
    </button>
  );
};

export default DropdownBtn;
