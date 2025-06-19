import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import styles from "./Pagination.module.css";
import "./Pagination.css";

function Pagination({ currPage, totalProducts, pageSize, handlePage }) {
  const [startPage, setStartPage] = useState(1);
  const visiblePageCount = 5;
  const totalPages = Math.ceil(totalProducts / pageSize);

  useEffect(() => {
    const newStartPage =
      Math.floor((currPage - 1) / visiblePageCount) * visiblePageCount + 1;
    setStartPage(newStartPage);
  }, [currPage]);

  const getPageNumbers = () => {
    const pages = [];
    for (let i = startPage; i < startPage + visiblePageCount; i++) {
      if (i <= totalPages) {
        pages.push(i);
      } else {
        break;
      }
    }
    return pages;
  };

  const goToPreviousPage = () => {
    if (currPage > 1) {
      handlePage(currPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currPage < totalPages) {
      handlePage(currPage + 1);
    }
  };

  const goToPage = (pageNumber) => {
    handlePage(pageNumber);
  };

  const goToPreviousGroup = () => {
    setStartPage(Math.max(1, startPage - visiblePageCount));
    handlePage(Math.max(1, currPage - visiblePageCount));
  };

  const goToNextGroup = () => {
    setStartPage(
      Math.min(totalPages - visiblePageCount + 1, startPage + visiblePageCount)
    );
    handlePage(Math.min(totalPages, currPage + visiblePageCount));
  };

  const pageNumbersToShow = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <button
        className={styles.page}
        onClick={goToPreviousPage}
        disabled={startPage === 1}
      >
        <IoIosArrowBack />
      </button>
      {pageNumbersToShow.map((number) => (
        <button
          key={number}
          onClick={() => goToPage(number)}
          className={currPage === number ? "active pageNation" : "pageNation"}
        >
          {number}
        </button>
      ))}
      <button
        className={styles.page}
        onClick={goToNextPage}
        disabled={startPage + visiblePageCount > totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
export default Pagination;
