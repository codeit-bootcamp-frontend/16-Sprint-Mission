import { useState } from 'react';

import styled from 'styled-components';

import MoSelectIcon from '../assets/MOsortIcon.png';
import PcSelectIcon from '../assets/PCsortIcon.png';

function CustomSortSelect({ value, setOrder }) {
  // 정렬 옵션 정의
  const [isOpen, setIsOpen] = useState(false);
  // 현재 선택된 옵션의 label을 찾기
  const option = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  const selectedOption = option.find(opt => opt.value === value)?.label;
  // 옵션 클릭 시 처리
  const handleOptionClick = value => {
    setOrder(value);
    setIsOpen(false);
  };

  // 드롭다운 열고 닫기 토글
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomSelectWrapper onClick={toggleDropdown}>
      {selectedOption}
      <CurrentSelectionDisplay>
        {isOpen && (
          <OptionList>
            {option.map((el, idx) => (
              <OptionItem
                key={idx}
                className={el.value === value ? 'selected' : ''}
                onClick={() => handleOptionClick(el.value)}
              >
                {el.label}
              </OptionItem>
            ))}
          </OptionList>
        )}
      </CurrentSelectionDisplay>
      {/* 옵션 리스트: isOpen 상태에 따라 조건부 렌더링 */}
    </CustomSelectWrapper>
  );
}
// 1. 전체 커스텀 셀렉트 컨테이너
const CustomSelectWrapper = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background-image: url(${MoSelectIcon});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  font-size:0;

  @media screen and (min-width:768px){
    width: 130px; 
    font-size: 16px;
    text-align: left;
    line-height: 42px;
    padding-left: 20px;
    background-image: url(${PcSelectIcon});
    order: 3;
    background-position: 80% center;
  }
}
`;

// 2. 선택된 값을 보여주는 커스텀 디스플레이 영역 (버튼 역할)
const CurrentSelectionDisplay = styled.div``;

// 3. 드롭다운 옵션 리스트
const OptionList = styled.ul`
  width: 130px;
  position: absolute;
  top: calc(100% + 4px);
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  right: 0;
  z-index: 2;
`;

// 4. 각 옵션 아이템
const OptionItem = styled.li`
  height: 42px;
  line-height: 42px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
  font-size: 16px;
  &.selected {
    font-weight: 600;
  }
`;

export default CustomSortSelect;
