import { useEffect, useState } from 'react';
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

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1024) {
    return 6;
  } else {
    return 10;
  }
};

function AllProducts() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [orderBy, setOrderBy] = useState('recent');

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getProducts({ pageSize: pageSize, orderBy: orderBy });
      setItems(res.list);
    };
    fetchItems();

    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageSize, orderBy]);

  return (
    <AllProductsContainer>
      {window.innerWidth >= 768 ? (
        <>
          <HeaderContainer>
            <div>전체 상품</div>
            <HeaderWrapper>
              <SearchBar />
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
              <SearchBar />
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
        <Circle>
          <img
            src={left}
            alt="이전"
          />
        </Circle>
        <Circle>1</Circle>
        <Circle>2</Circle>
        <Circle>3</Circle>
        <Circle>4</Circle>
        <Circle>5</Circle>
        <Circle>
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
  ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_GRAY_500)};
`;
