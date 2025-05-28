import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = ({ currentPage, setCurrentPage }) => {
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // 표시할 상품 개수
  const maxVisible = 5;

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=recent`
        );
        const data = await res.json();
        const count = data.totalCount || 1; //보호 처리
        setTotalPages(Math.ceil(count / pageSize));
      } catch (err) {
        console.error("페이지 수 불러오기 실패:", err);
      }
    };

    fetchTotalPages();
  }, []);

  const currentGroup = Math.floor((currentPage - 1) / maxVisible);
  const maxGroup = Math.floor((totalPages - 1) / maxVisible);
  const startPage = currentGroup * maxVisible + 1;
  const endPage = Math.min(startPage + maxVisible - 1, totalPages);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevGroup = () => {
    const prevStart = (currentGroup - 1) * maxVisible + 1;
    if (currentGroup > 0) setCurrentPage(prevStart);
  };

  const handleNextGroup = () => {
    const nextStart = (currentGroup + 1) * maxVisible + 1;
    if (currentGroup < maxGroup) setCurrentPage(nextStart);
  };

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i); // 현재 그룹에 해당하는 페이지만 저장
  }

  return (
    <div className="footer">
      {/*이전 페이지 버튼*/}
      <button
        className="footer__btn"
        onClick={handlePrevGroup}
        disabled={currentGroup === 0}
      >
        &lt;
      </button>

      {/* 페이지 숫자 버튼 */}
      {pages.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => handleClick(pageNum)}
          className={`footer__btn ${pageNum === currentPage ? "active" : ""}`} //현재 페이지 조건부 클래스
        >
          {pageNum}
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        className="footer__btn"
        onClick={handleNextGroup}
        disabled={currentGroup === maxGroup}
      >
        &gt;
      </button>
    </div>
  );
};

export default Footer;
