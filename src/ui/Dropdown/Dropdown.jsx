import { useState } from "react";
import styles from "./Dropdown.module.css";
import DropdownBtn from "./DropdownBtn";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ menu, onClickMenu, defaultSelected }) => {
  const [selected, setSelected] = useState(defaultSelected);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = (e) => {
    const selectedValue = e.target.textContent;
    setSelected(selectedValue);
    onClickMenu(selectedValue);
    setIsDropdownOpen((prev) => !prev);
  };

  const showDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownBtn selected={selected} onClickDropdownBtn={showDropdownMenu} />
      <DropdownMenu
        items={menu}
        onClick={handleMenuClick}
        isDropdownOpen={isDropdownOpen}
      />
    </div>
  );
};

export default Dropdown;
