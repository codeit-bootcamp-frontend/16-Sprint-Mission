import { useState } from "react";
import styles from "./Dropdown.module.css";
import DropdownBtn from "./DropdownBtn";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ menu, onClick, defaultSelected }) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleMenuClick = (e) => {
    const selectedValue = e.target.textContent;
    setSelected(selectedValue);
    onClick(selectedValue);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownBtn selected={selected} />
      <DropdownMenu items={menu} onClick={handleMenuClick} />
    </div>
  );
};

export default Dropdown;
