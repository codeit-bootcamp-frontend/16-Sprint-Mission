import { useState, useEffect } from "react";
import greater from "../assets/greater.png";
import less from "../assets/less.png";

const Pagination = ({ totalCount, page, onPageChange, pageSize }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const [groupStart, setGroupStart] = useState(1);
  const groupSize = 5;

  //현재 페이지가 6일 때 어떤 그룹인지 계산 하면...
  //page = 6, groupSize = 5
  //(6 - 1) / 5 = 1, Math.floor(1) = 1
  //1 * 5 + 1 = 6 → 6번 페이지는 6~10 그룹의 첫 번째
  useEffect(() => {
    const newGroupStart = Math.floor((page - 1) / groupSize) * groupSize + 1;
    setGroupStart(newGroupStart);
  }, [page]);

  if (totalPages <= 1) return null;

  //현재 그룹의 페이지 목록 생성
  //위 useEffect에서 계산한 groupStart를 시작 ex)page가 1~5면 groupStart 1, 6~10면 groupStart 6
  const pages = [];
  for (let i = groupStart; i < groupStart + groupSize && i <= totalPages; i++) {
    pages.push(i);
  }

  // page 23이면, 현재 그룹은 21~25 페이지이고, groupStart은 21
  // groupStart - 1 = 20 → 20번 페이지로 이동
  const handlePrevGroup = () => {
    if (groupStart > 1) {
      onPageChange(groupStart - 1);
    }
  };

  const handleNextGroup = () => {
    if (groupStart + groupSize <= totalPages) {
      onPageChange(groupStart + groupSize);
    }
  };

  return (
    <div className="pagination">
      {groupStart > 1 && (
        <button className="pagination_less" onClick={handlePrevGroup}>
          <img src={less} />
        </button>
      )}

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={num === page ? "active" : ""}
        >
          {num}
        </button>
      ))}

      {groupStart + groupSize <= totalPages && (
        <button className="pagination_greater" onClick={handleNextGroup}>
          <img src={greater} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
