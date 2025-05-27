import { useState } from "react";
import leftBtn from "../../assets/leftBtn.svg";
import rightBtn from "../../assets/rightBtn.svg";
import "./PageBar.css";

const PageBar = ({ totalPage, activePage, onPageChange }) => {
  const maxVisiblePages = 5;
  const [currentGroup, setCurrentGroup] = useState(0);
  const startPage = currentGroup * maxVisiblePages + 1;

  const pages = Array.from(
    {
      length: Math.min(maxVisiblePages, totalPage - startPage + 1),
    },
    (_, i) => startPage + i
  );

  const maxGroup = Math.floor((totalPage - 1) / maxVisiblePages);

  return (
    <div className="pageBar">
      <button
        className="pageButton"
        disabled={activePage === 1}
        onClick={() => setCurrentGroup((prev) => Math.max(prev - 1, 0))}
      >
        <img src={leftBtn} alt="왼쪽" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pageButton ${activePage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pageButton"
        disabled={activePage === 1}
        onClick={() => setCurrentGroup((prev) => Math.min(prev + 1, maxGroup))}
      >
        <img src={rightBtn} alt="오른쪽" />
      </button>
    </div>
  );
};

export default PageBar;
