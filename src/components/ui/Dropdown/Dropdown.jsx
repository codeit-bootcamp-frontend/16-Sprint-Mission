/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Dropdown = ({ items = [], onClick, isDropdownOpen }) => {
  return (
    <ul css={DropdownMenuStyle(isDropdownOpen)}>
      {items.map((item) => (
        <li key={item}>
          <button onClick={onClick} className="dropdown-menu-btn">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

const DropdownMenuStyle = (isActive) => css`
  position: absolute;
  right: 0;
  top: 110%;
  width: 100%;
  min-width: 130px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  display: ${isActive ? "block" : "none"};
  z-index: 9;

  li {
    width: 100%;
    background: #fff;

    &:hover {
      color: var(--primary-color);
    }
  }

  li + li {
    border-top: 1px solid var(--border-color);
  }

  .dropdown-menu-btn {
    width: 100%;
    padding: 12px 8px;
    font-size: 1rem;
  }
`;
