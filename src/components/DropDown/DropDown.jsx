import { FaSortAmountDown } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";

import DropDownItems from "./DropDownItems.jsx";
import { useScreenSize } from "../../utils/useScreenSize";
import { useState } from "react";
import styles from "./DropDown.module.css";

const DEFAULT_VALUE = "최신순";

function DropDown({ onChangeOrder }) {
  const [currentValue, setCurrentValue] = useState(DEFAULT_VALUE);
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useScreenSize();

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleOnChangeValue = (value, label) => {
    setCurrentValue(label);
    onChangeOrder(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropDown} onClick={handleToggle}>
      {screenSize === "sm" ? (
        <label>
          <FaSortAmountDown />
        </label>
      ) : (
        <label className={styles.onLarge}>
          <div>{currentValue} </div>
          <div>
            <FaSortDown />
          </div>
        </label>
      )}
      {isOpen && <DropDownItems onItemClick={handleOnChangeValue} />}
    </div>
  );
}

export default DropDown;
