import styles from "./DropdownBtn.module.css";
import arrowDownImg from "../../assets/images/ic_arrow_down.png";

const DropdownBtn = ({ selected }) => {
  return (
    <button type="button" className={styles["dropdown-btn"]}>
      {selected}
      <img src={arrowDownImg} alt="더보기" />
    </button>
  );
};

export default DropdownBtn;
