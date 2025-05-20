function Pagination({ currentPage, totalPages, setPage }) {
  //페이지 변경
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // console.log("현재페이지 : ", currentPage);
  // console.log("총 페이지 : ", totalPages);
  const pageNumbers = []; //버튼에 쓸 숫자가 들어간다.

  const start = currentPage - 2 < 1 ? 1 : currentPage - 2;
  const end = start + 4 > totalPages ? totalPages : start + 4;

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* {currentPage > 1 && } */}
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        이전
      </button>
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => handlePageChange(num)} style={{ fontWeight: num === currentPage ? "bold" : "normal" }}>
          {num}
        </button>
      ))}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        다음
      </button>
    </div>
  );
}

export default Pagination;
