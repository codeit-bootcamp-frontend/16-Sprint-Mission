import "../components/css/Pagination.css";
import preve from "../assets/arrow_left.png";
import next from "../assets/arrow_right.png";

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
    <div className="pagination ">
      {/* {currentPage > 1 && } */}
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        <img src={preve} alt="이전" />
      </button>
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => handlePageChange(num)} className={num === currentPage ? "active" : undefined}>
          {num}
        </button>
      ))}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <img src={next} alt="다음" />
      </button>
    </div>
  );
}

export default Pagination;
