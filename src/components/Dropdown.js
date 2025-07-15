import "./css/Dropdown.css";
import sortIcon from "../img/sort.svg";
import arrowDownIcon from "../img/arrow_down.svg";
import { createContext, useContext, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
const DropdownContext = createContext();

const Dropdown = ({
  children,
  className = "",
  onToggleDropdown,
  onDropdownItemClick,
  onCloseDropdown = () => {},
  dropdownList,
  showDropdown,
  value,
}) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, onCloseDropdown);

  return (
    <DropdownContext.Provider
      value={{
        className,
        onToggleDropdown,
        onDropdownItemClick,
        onCloseDropdown,
        dropdownList,
        showDropdown,
        value,
      }}
    >
      <div ref={dropdownRef} className={`dropdown__container ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const Button = () => {
  const { value, onToggleDropdown } = useContext(DropdownContext);
  return (
    <div className="dropdown__button" onClick={onToggleDropdown}>
      <span className="dropdown__text">{value.name}</span>
      <img
        src={arrowDownIcon}
        alt="드롭다운 아이콘"
        className="dropdown__button__icon"
      />
      <img src={sortIcon} alt="분류아이콘" className="dropdown__sort__icon" />
    </div>
  );
};

const List = ({ listClassName = "" }) => {
  const { showDropdown, dropdownList, onDropdownItemClick } =
    useContext(DropdownContext);
  if (!showDropdown) return null;
  return (
    <ul className={`dropdown__list ${listClassName}`}>
      {dropdownList?.map((item, index) => (
        <li
          key={`${item.value}-${index}`}
          onClick={() => onDropdownItemClick(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

Dropdown.Button = Button;
Dropdown.List = List;

export default Dropdown;
