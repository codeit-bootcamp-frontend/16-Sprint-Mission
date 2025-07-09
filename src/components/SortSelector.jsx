import { useState } from 'react';
import styled from 'styled-components';

import SortIcon from '../assets/icon/ic_sort.png';

const StyledSelectorContainer = styled.div`
  position: relative;
`;

const StyledOptionsLists = styled.ul`
  position: absolute;
  z-index: 10;
  top: calc(100% + 4px);
  right: 0;
  width: 130px;
  list-style: none;

  & > li:first-child button {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  & > li:last-child button {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;

const StyledSelectorButtonIcon = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  background-color: #ffffff;
  cursor: pointer;
`;

const StyledSelectorButton = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  height: 42px;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  background-color: #ffffff;
  cursor: pointer;
`;

const StyledOptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-bottom: 0px;
  background-color: #ffffff;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary100 : 'inherit'};
  font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 'inherit')};
  cursor: pointer;
`;

const SortImg = styled.img`
  vertical-align: bottom;
  aspect-ratio: 1/1;
`;

const SortSelector = ({
  options,
  defaultValue,
  onSelect: handleOptionSelect,
  deviceType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(
    defaultValue
      ? options.find((opt) => opt.value === defaultValue)?.label
      : options[0].label
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedLabel(option.label);
    setIsOpen(false);
    handleOptionSelect && handleOptionSelect(option.value);
  };

  return (
    <StyledSelectorContainer>
      {deviceType === 'mobile' ? (
        <StyledSelectorButtonIcon onClick={handleToggle}>
          <SortImg
            src={SortIcon}
            alt="정렬 선택 아이콘"
            width={'24px'}
            height={'auto'}
          />
        </StyledSelectorButtonIcon>
      ) : (
        <StyledSelectorButton onClick={handleToggle}>
          {selectedLabel}
          <span>▼</span>
        </StyledSelectorButton>
      )}
      {isOpen ? (
        <StyledOptionsLists>
          {options.map((option) => (
            <li key={option.value}>
              <StyledOptionButton
                onClick={() => handleSelect(option)}
                $isSelected={selectedLabel === option.label}
              >
                {option.label}
              </StyledOptionButton>
            </li>
          ))}
        </StyledOptionsLists>
      ) : (
        <></>
      )}
    </StyledSelectorContainer>
  );
};

export default SortSelector;
