import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import ItemCard from './ItemCard';
import SearchBar from '../../UI/SearchBar';
import AddItemButton from './AddItemButton';
import DropdownList from '../../UI/DropdownList';
import left from '../../../assets/images/icons/arrow_left.svg';
import right from '../../../assets/images/icons/arrow_right.svg';

import { ColorTypes, FontTypes } from '../../../styles/theme';
import { applyFontStyles } from '../../../styles/mixins';
import { getProducts } from '../../../api/api';
import useDeviceSize from '../../../hooks/useDeviceSize';

function AllProducts() {
  const { isMobile, isTablet, isDesktop } = useDeviceSize();

  const deviceSize = useMemo(() => {
    if (isMobile) return 4;
    if (isTablet) return 6;
    if (isDesktop) return 10;
    return 4;
  }, [isMobile, isTablet, isDesktop]);

  const [pageSize, setPageSize] = useState(deviceSize);
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setPageSize(deviceSize);
  }, [deviceSize]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getProducts({
        pageSize: pageSize,
        orderBy: orderBy,
        page: currentPage,
        keyword: debouncedKeyword,
      });
      setItems(res.list);
      setTotalCount(res.totalCount);
    };

    fetchItems();
  }, [pageSize, orderBy, currentPage, debouncedKeyword]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedKeyword]);

  const totalPages = Math.ceil(totalCount / pageSize);
  const visiblePageCount = 5;
  const safeCurrentPage = Math.max(currentPage, 1);
  const currentGroup = Math.floor((safeCurrentPage - 1) / visiblePageCount);
  const startPage = currentGroup * visiblePageCount + 1;
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <AllProductsContainer>
      {isDesktop ? (
        <>
          <HeaderContainer>
            <div>전체 상품</div>
            <HeaderWrapper>
              <SearchBar onSearch={setKeyword} />
              <AddItemButton />
              <DropdownList onChange={(value) => setOrderBy(value)} />
            </HeaderWrapper>
          </HeaderContainer>
        </>
      ) : (
        <>
          <HeaderContainer>
            <HeaderWrapper>
              <div>전체 상품</div>
              <AddItemButton />
            </HeaderWrapper>

            <SecondHeaderWrapper>
              <SearchBar onSearch={setKeyword} />
              <DropdownList onChange={(value) => setOrderBy(value)} />
            </SecondHeaderWrapper>
          </HeaderContainer>
        </>
      )}

      <ItemCardContainer>
        {items?.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
          />
        ))}
      </ItemCardContainer>

      <Pagination>
        <Circle onClick={() => setCurrentPage(currentPage - 1)}>
          <img
            src={left}
            alt="이전"
          />
        </Circle>
        {pageNumbers.map((pageNum) => (
          <Circle
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            $isActive={pageNum === currentPage}
          >
            {pageNum}
          </Circle>
        ))}
        <Circle onClick={() => setCurrentPage(currentPage + 1)}>
          <img
            src={right}
            alt="다음"
          />
        </Circle>
      </Pagination>
    </AllProductsContainer>
  );
}

export default AllProducts;

const AllProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 29px;
  margin-bottom: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    gap: 12px;
  }
`;

const SecondHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

const ItemCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};
  cursor: pointer;

  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors[ColorTypes.PRIMARY_100] : 'transparent')};
  ${({ $isActive }) =>
    $isActive
      ? applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_WHITE)
      : applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_GRAY_500)};
`;
