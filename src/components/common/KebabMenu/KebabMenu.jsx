import { useEffect, useRef, useState } from "react";
import styles from "./KebabMenu.module.css";
const KebabMenu = ({ id, menuItems, onOpen = null, onClose = null }) => {
  const [isKebabSelected, setIsKebabSelected] = useState();

  const DropDownRef = useRef();
  const kebabRef = useRef();

  const handleDropDownOutsideClick = (e) => {
    if (DropDownRef.current && DropDownRef.current.contains(e.target)) {
      return;
    } else if (kebabRef.current.contains(e.target)) {
      return;
    } else {
      setIsKebabSelected(false);
    }
  };

  const handleKebabClick = () => {
    setIsKebabSelected(!isKebabSelected);
  };

  useEffect(() => {
    if (!isKebabSelected) {
      if (onClose) onClose();
      document.removeEventListener("mousedown", handleDropDownOutsideClick);
    } else {
      if (onOpen) onOpen();
      document.addEventListener("mousedown", handleDropDownOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDropDownOutsideClick);
    };
  }, [isKebabSelected]);

  return (
    <div className={styles["container"]}>
      <img
        name={id}
        className={styles["kebab-button"]}
        src={"/images/ic_kebab.png"}
        width={24}
        onClick={handleKebabClick}
        ref={kebabRef}
      />
      {isKebabSelected && (
        <ul className={styles["dropdown-menu"]} ref={DropDownRef}>
          {menuItems.map(({ label, onClick }) => (
            <li className={styles["dropdown-button"]} key={label} onClick={onClick}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KebabMenu;
