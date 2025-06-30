import "./css/Dropdown.css";
import sortIcon from "../img/sort.svg";
import arrowDownIcon from "../img/arrow_down.svg";
import { createContext, useContext, useRef, useEffect } from "react";
const DropdownContext = createContext();

const Dropdown = ({
  children,
  className = "",
  onClickDropdown,
  onClickDropdownItem,
  onCloseDropdown = () => {},
  dropdownList,
  showDropdown,
  value,
}) => {
  const dropdownRef = useRef(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onCloseDropdown();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider
      value={{
        className,
        onClickDropdown,
        onClickDropdownItem,
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
  const { value, onClickDropdown } = useContext(DropdownContext);
  return (
    <div className="dropdown__button" onClick={onClickDropdown}>
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
  const { showDropdown, dropdownList, onClickDropdownItem } =
    useContext(DropdownContext);
  if (!showDropdown) return null;
  return (
    <ul className={`dropdown__list ${listClassName}`}>
      {dropdownList?.map((item, index) => (
        <li
          key={`${item.value}-${index}`}
          onClick={() => onClickDropdownItem(item)}
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
