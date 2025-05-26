import React, { useState } from "react";

const Pagination = () => {
  const arrayData = Array.from(
    { length: 50 },
    (_, index) => `Item ${index + 1}`
  ); // 예시 데이터

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7; //현재 페이지에 보여줄 아이템 수 7?

  const totalPages = Math.ceil(arrayData.length / itemsPerPage); //전체 페이지 수

  const paginatedData = arrayData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //페이지 넘기기 기능
  return (
    <div>
      <ul>
        {paginatedData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◀
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Pagination;
