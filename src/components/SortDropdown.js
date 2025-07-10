import Dropdown from "./Dropdown";

const SortDropdown = ({
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
      <Dropdown.Button />
      <Dropdown.List />
    </Dropdown>
  );
};

export default SortDropdown;
