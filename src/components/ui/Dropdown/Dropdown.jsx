/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import DropdownBtn from "./DropdownBtn";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ menu, onClickMenu, defaultSelected, iconType }) => {
  const [selected, setSelected] = useState(defaultSelected);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownBtnActive, setIsDropdownBtnActive] = useState(false);

  const handleMenuClick = (e) => {
    const selectedValue = e.target.textContent;
    setSelected(selectedValue);
    onClickMenu(selectedValue);
    setIsDropdownOpen((prev) => !prev);
    setIsDropdownBtnActive((prev) => !prev);
  };

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsDropdownBtnActive((prev) => !prev);
  };

  return (
    <div css={DropdownStyle}>
      <DropdownBtn
        selected={selected}
        onClickDropdownBtn={handleDropdown}
        isActive={isDropdownBtnActive}
        iconType={iconType}
      />
      <DropdownMenu
        items={menu}
        onClick={handleMenuClick}
        isDropdownOpen={isDropdownOpen}
      />
    </div>
  );
};

export default Dropdown;

const DropdownStyle = css`
  position: relative;
`;
