//하단 페이지네이션
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const maxPageButtons = 5;
    const half = Math.floor(maxPageButtons / 2);

    let start = Math.max(currentPage - half, 1);
    let end = start + maxPageButtons - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxPageButtons + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal",
            margin: "0 4px",
          }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
