import { useState } from 'react';
import styled from 'styled-components';

import { PRODUCTS_PAGE_SIZES } from '../data/pageSize';

const StyledPageButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 9999px;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary100 : '#fff'};
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.gray100 : theme.colors.gray500};
  font-weight: 600;
  cursor: pointer;
`;

const ProductPagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 40px auto 72px;
`;

const ProductPagenation = ({ setPage, total, deviceType }) => {
  const [startNumber, setStartNumber] = useState(1);
  const [currentNumber, setCurrentNumber] = useState(1);
  const { all: pageSize } = PRODUCTS_PAGE_SIZES[deviceType];
  const maxPage = Math.ceil(total / pageSize);

  const pageNumbersToShow = Array.from(
    { length: 5 },
    (_, i) => startNumber + i
  );

  const handlePrevGroupClick = () => {
    if (startNumber > 1) {
      const newStart = startNumber - 5;
      setStartNumber(newStart);
      setCurrentNumber(newStart);
      setPage(newStart);
    }
  };

  const handleNextGroupClick = () => {
    if (startNumber + 4 < maxPage) {
      const newStart = startNumber + 5;
      setStartNumber(newStart);
      setCurrentNumber(newStart);
      setPage(newStart);
    }
  };

  const handlePageClick = (e) => {
    setPage(e.target.value);
    setCurrentNumber(Number(e.target.value));
  };

  return (
    <ProductPagenationWrapper>
      <StyledPageButton onClick={handlePrevGroupClick}>{'<'}</StyledPageButton>
      {pageNumbersToShow.map((e) => {
        return (
          e <= maxPage && (
            <StyledPageButton
              key={e}
              value={e}
              onClick={handlePageClick}
              $selected={currentNumber === e}
            >
              {e}
            </StyledPageButton>
          )
        );
      })}
      <StyledPageButton onClick={handleNextGroupClick}>{'>'}</StyledPageButton>
    </ProductPagenationWrapper>
  );
};

export default ProductPagenation;
