import { useMemo } from 'react';

import styled from 'styled-components';

import Arrow from '../assets/arrowIcon.png';

function Pagination({
  totalItemCount,
  setCurrentPage,
  currentPage,
  SHOWITEMSLENGTH,
}) {
  const ITEMS_PER_GROUP = 5;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalItemCount / SHOWITEMSLENGTH);

  // 현재 페이지 그룹 계산 (1~5=0, 6~10=1 ...)
  const currentGroupIndex = Math.floor((currentPage - 1) / ITEMS_PER_GROUP);

  // 현재 그룹의 페이지들만 계산
  const currentGroupPages = useMemo(() => {
    const startPage = currentGroupIndex * ITEMS_PER_GROUP + 1;
    const endPage = Math.min(startPage + ITEMS_PER_GROUP - 1, totalPages);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  }, [currentGroupIndex, totalPages]);

  const handlePrevGroup = e => {
    e.preventDefault();
    if (currentGroupIndex > 0) {
      const prevGroupStartPage = (currentGroupIndex - 1) * ITEMS_PER_GROUP + 1;
      setCurrentPage(prevGroupStartPage); // 직접 호출
    }
  };
  const handleNextGroup = e => {
    e.preventDefault();
    const maxGroupIndex = Math.floor((totalPages - 1) / ITEMS_PER_GROUP);
    if (currentGroupIndex < maxGroupIndex) {
      const nextGroupStartPage = (currentGroupIndex + 1) * ITEMS_PER_GROUP + 1;
      setCurrentPage(nextGroupStartPage); // 직접 호출
    }
  };
  // 개별 버튼 클릭
  const handlePageClick = e => {
    setCurrentPage(Number(e.target.value));
  };
  return (
    <PaginationWrapper>
      <PrevBtn disabled={currentGroupIndex === 0} onClick={handlePrevGroup} />

      {currentGroupPages.map(pageNum => (
        <Btn
          key={pageNum}
          value={pageNum}
          onClick={handlePageClick}
          className={pageNum === currentPage ? 'on' : ''}
        >
          {pageNum}
        </Btn>
      ))}

      <NextBtn
        disabled={
          currentGroupIndex >= Math.floor((totalPages - 1) / ITEMS_PER_GROUP)
        }
        onClick={handleNextGroup}
      />
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 40px;
`;
const Btn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  background: #fff;
  &.on {
    background-color: #2f80ed;
    border: 1px solid #2f80ed;
    color: #fff;
  }
  &:disabled {
    background-blend-mode: difference;
  }
`;
const PrevBtn = styled(Btn)`
  background-image: url(${Arrow});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
`;
const NextBtn = styled(Btn)`
  background-image: url(${Arrow});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(180deg);
`;
export default Pagination;
