import { useState } from 'react';
import styled from 'styled-components';

import { ColorTypes, FontTypes } from '../../styles/theme';
import { applyFontStyles } from '../../styles/mixins';
import sort from '../../assets/images/icons/ic_sort.svg';

function DropdownList({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('recent');

  const handleSelect = (value) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <DropdownListContainer>
      <StSortButton onClick={() => setIsOpen((prev) => !prev)}>
        {window.innerWidth < 768 ? (
          <StSortIcon
            src={sort}
            alt="sort"
          />
        ) : (
          <SortWrapper>
            <SortText>{selected === 'recent' ? '최신순' : '좋아요순'}</SortText>
            <SortText>▾</SortText>
          </SortWrapper>
        )}
      </StSortButton>

      {isOpen && (
        <DropdownMenu>
          <li onClick={() => handleSelect('recent')}>최신순</li>
          <Divider />
          <li onClick={() => handleSelect('favorite')}>좋아요순</li>
        </DropdownMenu>
      )}
    </DropdownListContainer>
  );
}

export default DropdownList;

const DropdownListContainer = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;

  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};
  border-radius: 12px;
  padding: 5px;

  @media (min-width: 768px) {
    width: 130px;
    height: 42px;
    padding-left: 20px;
  }
`;

const StSortIcon = styled.img`
  width: 26px;
  height: 26px;
`;

const StSortButton = styled.button`
  width: 100%;
  height: 100%;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
`;

const SortText = styled.div`
  ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_800)};
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 46px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_WHITE]};
  border-radius: 12px;
  z-index: 100;

  li {
    padding: 9px 0px;
    cursor: pointer;
    ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_800)};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_WHITE]};
`;
