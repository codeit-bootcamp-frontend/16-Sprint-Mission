import { useEffect, useState } from 'react';
import { getProducts } from '../../../api/api';
import ItemCard from './ItemCard';
import SearchBar from '../../UI/SearchBar';
import AddItemButton from './AddItemButton';
import DropdownList from '../../UI/DropdownList';
import styled from 'styled-components';

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
  useEffect(() => {
    const fetchItems = async () => {
      const res = await getProducts({ pageSize: pageSize });
      setItems(res.list);
    };
    fetchItems();

    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageSize]);

  return (
    <AllProductsContainer>
      {window.innerWidth >= 768 ? (
        <>
          <HeaderContainer>
            <div>전체 상품</div>
            <HeaderWrapper>
              <SearchBar />
              <AddItemButton />
              <DropdownList />
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
              <DropdownList />
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
    </AllProductsContainer>
  );
}

export default AllProducts;

const AllProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 29px;
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
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
