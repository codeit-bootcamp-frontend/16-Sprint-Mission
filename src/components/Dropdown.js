/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useEffect, useRef, useState } from "react";
import { BREAK_POINT } from "../style/BreakPoints";

import { ReactComponent as SortIcon } from "../assets/sortIcon.svg";
import useViewportWidth from "../hooks/useViewportWidth";

function Dropdown({ setOrderBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [label, setLabel] = useState("recent");
  const containerRef = useRef();
  const width = useViewportWidth();

  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleChange = (val) => {
    setLabel(val);
    setOrderBy(val);
  };

  return (
    <div ref={containerRef} css={dropdownWrapper}>
      <button
        onClick={toggleOpen}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        css={dropdownButton}
      >
        {width < BREAK_POINT.md ? (
          <SortIcon />
        ) : (
          (label === "recent" ? "최신순" : "인기순") + " ▼"
        )}
      </button>

      {isOpen && (
        <ul css={dropdownSelect}>
          <li css={dropdownOption} onClick={() => handleChange("recent")}>
            최신순
          </li>
          <li css={dropdownOption} onClick={() => handleChange("favorite")}>
            인기순
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

const dropdownWrapper = css`
  position: relative;
`;

const dropdownButton = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  aspect-ratio: 1/1;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`;

const dropdownSelect = css`
  position: absolute;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #fff;
  margin-top: 4px;
  right: 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 7px 0;
  z-index: 10;
`;

const dropdownOption = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 42px;

  &:hover {
    background-color: #e5e7eb;
  }
`;
