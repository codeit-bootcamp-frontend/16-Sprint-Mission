import styles from "./DropdownBtn.module.css";

const DropdownBtn = ({ selected }) => {
  return (
    <button type="button" className={styles}>
      {selected}
    </button>
  );
};

export default DropdownBtn;
