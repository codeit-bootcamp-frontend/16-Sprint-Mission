import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getProducts } from '../../../api/api';
import useDeviceSize from '../../../hooks/useDeviceSize';
import ItemCard from './ItemCard';

function BestProducts() {
  const { isMobile, isTablet, isDesktop } = useDeviceSize();

  const getPageSize = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isDesktop) return 4;
    return 1;
  };

  const [bestItems, setBestItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  useEffect(() => {
    setPageSize(getPageSize());
  }, [isMobile, isTablet, isDesktop]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getProducts({ orderBy: 'favorite', pageSize });
      setBestItems(res.list);
    };
    fetchItems();
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
