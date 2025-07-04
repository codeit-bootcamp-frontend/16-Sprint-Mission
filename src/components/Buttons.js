/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";

function Buttons({ page, pageSize, setPage, totalCount }) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const groupSize = 5;
  const currentGroup = Math.floor((page - 1) / groupSize);
  const startPage = currentGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const pageNums = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNums.push(i);
  }

  return (
    <div css={button}>
      <button
        onClick={() => handlePageClick(startPage - 1)}
        disabled={startPage === 1}
      >
        <ArrowLeft role="img" aria-label="왼쪽 화살표" />
      </button>

      {pageNums.map((p) => (
        <button
          key={p}
          onClick={() => handlePageClick(p)}
          css={p === page ? selected : undefined}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => handlePageClick(endPage + 1)}
        disabled={endPage >= totalPages}
      >
        <ArrowRight role="img" aria-label="오른쪽 화살표" />
      </button>
    </div>
  );
}

export default Buttons;

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 24px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #e5e7eb;
    border-radius: 40px;
    font-weight: 600;
    font-size: 16px;
    color: #4b5563;

    &:active {
      background-color: #2f80ed;
      color: #f9fafb;
    }
  }
`;

const selected = css`
  background-color: #2f80ed;
  color: #f9fafb !important;
`;
