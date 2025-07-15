//하단 페이지네이션
import React from "react";
import "../styles/Pagination.css";
import usePagination from "../hooks/usePagination.jsx";
import { ArrowLeft, ArrowRight } from "./ArrowIcon";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { pageNumbers } = usePagination(currentPage, totalPages); //페이지네이션 기능을 훅으로 빼두기

  //페이지 네이션 ui 부분
  return (
    <div className="pagination">
      <button
        className="page-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft />
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`page-button ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-button"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
