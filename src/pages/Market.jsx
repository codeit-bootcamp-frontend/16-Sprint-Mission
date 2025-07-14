import { useEffect, useMemo, useState } from 'react';

import styled from 'styled-components';

import { fetchProducts } from '../Api';
import AllProductsSection from '../components/AllProductsSection';
import BestProductsSection from '../components/BestProductsSection';
import { useWindowWidth } from '../hooks/useWindowWidth';

function Market() {
  const [bestItems, setBestItems] = useState(null);
  const [allItems, setAllItems] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [order, setOrder] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [allPageSize, setAllPageSize] = useState(null);
  const [totalItemCount, setTotalItemCount] = useState(0);

  const resizeWidth = useWindowWidth();

  const deviceType = useMemo(() => {
    if (resizeWidth >= 1023) return 'pc';
    if (resizeWidth >= 768) return 'tablet';
    return 'mobile';
  }, [resizeWidth]);

  useEffect(() => {
    if (deviceType === 'tablet') setAllPageSize(6);
    else if (deviceType === 'pc') setAllPageSize(10);
    else setAllPageSize(4);
  }, [deviceType]);

  // 화면 사이즈에 따라 bestItems 조정 (memoization)
  const resizeBestItems = useMemo(() => {
    if (!bestItems) return [];
    if (resizeWidth < 767) return bestItems.slice(0, 1);
    if (resizeWidth < 1023) return bestItems.slice(0, 2);
    return bestItems;
  }, [resizeWidth, bestItems]);

  // 컴포넌트 최초 로드 시 베스트 상품 가져오기
  useEffect(() => {
    const loadBestProducts = async () => {
      const { list, totalCount } = await fetchProducts({
        page: 1,
        pageSize: 4,
        orderBy: 'favorite',
      });
      setBestItems(list);
      setTotalItemCount(totalCount);
    };

    loadBestProducts();
  }, []);

  // 검색어 / 정렬 기준 변경 시 전체 상품 다시 불러오기
  useEffect(() => {
    if (!allPageSize) return;

    const loadAllProducts = async () => {
      const { list } = await fetchProducts({
        page: currentPage,
        pageSize: allPageSize,
        orderBy: order,
        keyword: searchValue,
      });
      setAllItems(list);
    };

    loadAllProducts();
  }, [order, searchValue, allPageSize, currentPage]);

  // 검색 핸들러
  const handleSearchItems = value => {
    setSearchValue(value);
  };

  // 정렬
  const sortedItems = useMemo(() => {
    if (!allItems) return [];
    return [...allItems].sort((a, b) => b[order] - a[order]);
  }, [allItems, order]);

  // 로딩 처리
  if (!bestItems || !allItems) return <div>loading...</div>;

  // 렌더
  return (
    <MarketWrapper>
      <BestItemWrapper>
        <BestItemTitle>베스트 상품</BestItemTitle>
        <BestProductsSection bestItems={resizeBestItems} />
      </BestItemWrapper>

      <AllProductsWrapper>
        <AllProductsSection
          value={order}
          setOrder={setOrder}
          allItems={sortedItems}
          handlerSearchItems={handleSearchItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItemCount={totalItemCount}
          SHOWITEMSLENGTH={allPageSize}
        />
      </AllProductsWrapper>
    </MarketWrapper>
  );
}

const MarketWrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;
const BestItemWrapper = styled.div`
  width: 100%;
  padding-bottom: 24px;
`;
const BestItemTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 16px;
`;

const AllProductsWrapper = styled.div`
  width: 100%;
`;
export default Market;
