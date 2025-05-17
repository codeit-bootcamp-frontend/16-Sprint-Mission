import styles from "./DropdownBtn.module.css";
import arrowDownImg from "../../assets/images/ic_arrow_down.png";

const DropdownBtn = ({ selected, onClickDropdownBtn }) => {
  return (
    <button
      type="button"
      className={styles["dropdown-btn"]}
      onClick={onClickDropdownBtn}
    >
      {selected}
      <img src={arrowDownImg} alt="더보기" />
    </button>
  );
};

export default DropdownBtn;
