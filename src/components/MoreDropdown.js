import "./css/MoreDropdown.css";
import Dropdown from "./Dropdown";
import moreIcon from "../img/more.svg";

const MoreDropdown = ({
  className,
  onClickDropdown,
  onClickDropdownItem,
  onCloseDropdown,
  dropdownList,
  showDropdown,
  value,
}) => {
  return (
    <Dropdown
      className={className}
      onClickDropdown={onClickDropdown}
      onClickDropdownItem={onClickDropdownItem}
      onCloseDropdown={onCloseDropdown}
      dropdownList={dropdownList}
      showDropdown={showDropdown}
      value={value}
    >
      <img src={moreIcon} alt="드롭다운 더보기 아이콘" />
      <Dropdown.List listClassName={"dropdown__list__more"} />
    </Dropdown>
  );
};

export default MoreDropdown;
