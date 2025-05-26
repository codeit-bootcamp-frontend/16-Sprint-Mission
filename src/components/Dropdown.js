import "../css/components/Dropdown.css";
import sortIcon from "../img/sort.svg";
import arrowDownIcon from "../img/arrow_down.svg";

function Dropdown({
  className,
  onClickDropdown,
  onClickDropdownItem,
  dropdownList,
  showDropdown,
  value,
}) {
  return (
    <div
      className={`dropdown__container ${className}`}
      onClick={onClickDropdown}
    >
      <div className="dropdown__button">
        <span className="dropdown__text">{value.name}</span>
        <img
          src={arrowDownIcon}
          alt="드롭다운 아이콘"
          className="dropdown__button__icon"
        />
        <img src={sortIcon} alt="분류아이콘" className="dropdown__sort__icon" />
      </div>
      {showDropdown && (
        <ul className="dropdown__list">
          {dropdownList?.map((item) => (
            <li key={item.value} onClick={() => onClickDropdownItem(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
