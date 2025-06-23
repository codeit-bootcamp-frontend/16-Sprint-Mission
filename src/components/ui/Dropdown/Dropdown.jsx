/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Dropdown = ({
  items = [],
  onClick,
  isDropdownOpen,
  isCommentDropdown,
}) => {
  return (
    <ul css={DropdownMenuStyle({ isDropdownOpen, isCommentDropdown })}>
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

const DropdownMenuStyle = ({ isDropdownOpen, isCommentDropdown }) =>
  css`
    position: absolute;
    right: 0;
    top: ${isCommentDropdown ? "30px" : "110%"};
    width: ${isCommentDropdown ? "auto" : "100%"};
    min-width: 130px;
    border: ${isCommentDropdown
      ? "1px solid #d1d5db"
      : "1px solid var(--border-color)"};
    border-radius: var(--border-radius-sm);
    overflow: hidden;
    display: ${isDropdownOpen ? "block" : "none"};
    z-index: 9;

    li {
      width: 100%;
      background: #fff;
      color: ${isCommentDropdown ? "var(--gray500)" : "inherit"};

      &:hover {
        color: var(--primary-color);
      }
    }

    li + li {
      border-top: ${isCommentDropdown
        ? "none"
        : "1px solid var(--border-color)"};
    }

    .dropdown-menu-btn {
      width: 100%;
      padding: 12px 8px;
      font-size: 1rem;
    }
  `;
