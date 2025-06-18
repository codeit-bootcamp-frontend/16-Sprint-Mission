import { useState } from "react";

const usePagination = () => {
  const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);

  const onClickNextPage = () => {
    setPaginationCurrentPage((prev) => prev + 1);
  };

  const onClickPrevPage = () => {
    setPaginationCurrentPage((prev) => prev - 1);
  };

  const onClickPage = (page) => {
    setPaginationCurrentPage(page);
  };

  return {
    paginationCurrentPage,
    setPaginationCurrentPage,
    onClickNextPage,
    onClickPrevPage,
    onClickPage,
  };
};

export default usePagination;
