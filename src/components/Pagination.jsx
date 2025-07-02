import { useEffect, useState } from "react";
import styled from "styled-components";
import Arrow from "../assets/arrowIcon.png";
const PagetnationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
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
function Pagetnation({
  totalCount,
  currentPageSetter,
  currentPage,
  SHOWITEMSLENGTH,
}) {
  const [pageGroup, setPageGroup] = useState([]);
  const [pageGroupIndex, setPageGroupIndex] = useState(0);
  const [pendingPage, setPendingPage] = useState(null); //중간 저장용

  useEffect(() => {
    if (pendingPage !== null) {
      currentPageSetter(pendingPage);
    }
  }, [pendingPage, currentPageSetter]);

  useEffect(() => {
    const sliceArrayByLimit = (totalPage) => {
      const totalPageArray = Array(totalPage)
        .fill()
        .map((_, idx) => idx + 1);

      const result = Array(Math.ceil(totalPage / 5))
        .fill()
        .map(() => totalPageArray.splice(0, 5));

      return result;
    };
    const pageOfItems = Math.ceil(totalCount / SHOWITEMSLENGTH);
    const createGroup = sliceArrayByLimit(pageOfItems);
    setPageGroup(createGroup);
    setPageGroupIndex(0);
  }, [totalCount, SHOWITEMSLENGTH]);
  const handlePrevBtn = (e) => {
    e.preventDefault();
    setPageGroupIndex((prev) => {
      const prevIdx = prev - 1;
      if (prevIdx >= 0) {
        const prevPage = pageGroup[prevIdx][0];
        setPendingPage(prevPage);
        return prevIdx;
      }
      return prev;
    });
  };
  const handlenextBtn = (e) => {
    e.preventDefault();
    setPageGroupIndex((prev) => {
      const nextIdx = prev + 1;
      if (nextIdx < pageGroup.length) {
        const nextPage = pageGroup[nextIdx][0];
        setPendingPage(nextPage);
        return nextIdx;
      }
      return prev;
    });
  };
  const handleCurrentPage = (e) => {
    currentPageSetter(Number(e.target.value));
  };
  return (
    <PagetnationWrapper>
      <PrevBtn disabled={!pageGroupIndex} onClick={handlePrevBtn} />

      {pageGroup[pageGroupIndex]?.map((el, idx) => (
        <Btn
          onClick={handleCurrentPage}
          value={el}
          key={idx}
          className={el === currentPage ? "on" : ""}
        >
          {el}
        </Btn>
      ))}
      <NextBtn
        disabled={pageGroupIndex === pageGroup.length - 1}
        onClick={handlenextBtn}
      />
    </PagetnationWrapper>
  );
}
export default Pagetnation;
