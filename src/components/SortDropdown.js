import Dropdown from "./Dropdown";

const SortDropdown = ({
  className,
  onToggleDropdown,
  onDropdownItemClick,
  onCloseDropdown,
  dropdownList,
  showDropdown,
  value,
}) => {
  return (
    <Dropdown
      className={className}
      onToggleDropdown={onToggleDropdown}
      onDropdownItemClick={onDropdownItemClick}
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
