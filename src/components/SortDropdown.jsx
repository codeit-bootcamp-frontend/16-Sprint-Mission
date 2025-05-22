import { useEffect, useRef, useState } from "react";
import styles from "./SortDropdown.module.css";

const SortDropDown = ({ dropdownItems, setKey }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownButtonRef = useRef();
  const dropdownListRef = useRef();

  const handleDropDownButtonClick = () => {
    setIsSelected(!isSelected);
  };

  const handleDropDownOutsideClick = (e) => {
    if (dropdownListRef.current.contains(e.target)) {
      return;
    } else if (dropdownButtonRef.current.contains(e.target)) {
      return;
    } else {
      setIsSelected(false);
    }
  };

  const handleDropDownListClick = (e) => {
    setSelectedIndex(Number(e.currentTarget.dataset.index));
    setKey(e.currentTarget.dataset.keyname);
    setIsSelected(false);
  };

  useEffect(() => {
    if (isSelected) {
      document.addEventListener("mousedown", handleDropDownOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDropDownOutsideClick);
    };
  }, [isSelected]);

  return (
    <div className={styles["dropdown-container"]}>
      <div
        className={styles["dropdown-button"]}
        onClick={handleDropDownButtonClick}
        ref={dropdownButtonRef}
      >
        <span className={styles["dropdown-button-text"]}>
          {dropdownItems[selectedIndex].label}
        </span>
        <div className={styles["dropdown-button-icon"]} />
      </div>
      {isSelected && (
        <ul className={styles["dropdown-list"]} ref={dropdownListRef}>
          {dropdownItems.map(({ label, key }, index) => (
            <li
              className={styles["dropdown-option"]}
              key={key}
              data-keyname={key}
              data-index={index}
              onClick={handleDropDownListClick}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropDown;
