import { useEffect, useState } from 'react';
import { getProducts } from '../../../api/api';
import ItemCard from './ItemCard';
import styled from 'styled-components';

export const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1024) {
    return 2;
  } else {
    return 4;
  }
};

function BestProducts() {
  const [bestItems, setBestItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getProducts({ orderBy: 'favorite', pageSize: pageSize });
      setBestItems(res.list);
    };
    fetchItems();

    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageSize]);

  return (
    <BestProductsContainer>
      <div>베스트 상품</div>

      <ItemCardContainer>
        {bestItems?.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
          />
        ))}
      </ItemCardContainer>
    </BestProductsContainer>
  );
}

export default BestProducts;

const BestProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const ItemCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
