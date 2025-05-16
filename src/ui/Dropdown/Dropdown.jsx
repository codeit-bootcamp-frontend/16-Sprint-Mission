import { useState } from "react";
import DropdownBtn from "./DropdownBtn";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ menu, onClick, defaultSelected }) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleMenuClick = (e) => {
    const selectedValue = e.target.textContent;
    setSelected(selectedValue);
    onClick(selectedValue);
  };

  return (
    <div className="dropdown">
      <DropdownBtn selected={selected} />
      <DropdownMenu items={menu} onClick={handleMenuClick} />
    </div>
  );
};

export default Dropdown;
