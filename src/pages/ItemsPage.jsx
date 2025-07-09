import { useState } from 'react';
import styled from 'styled-components';

import ProductGrid from '../components/ProductGrid';
import ProductList from '../components/ProductList';
import ProductPagenation from '../components/ProductPagenation';
import SortSelector from '../components/SortSelector';
import useDebounce from '../hooks/useDebounce';
import useInput from '../hooks/useInput';
import useProductsLoading from '../hooks/useProductsLoading';
import useViewportDevice from '../hooks/useViewportDevice';
import Button from './../components/Button';
import LoadingIndicator from './../components/LoadingIndicator';
import SearchBar from './../components/SearchBar';

const ItemPageWrapper = styled.div`
  padding: 0 16px;
`;

const BestProductsWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
const AllProductsWrapper = styled.div`
  margin: 24px auto 0;
  max-width: 1200px;
`;

const BestProductsHeading = styled.h1`
  margin: 16px 0;
  font-size: 1.25em;
`;

const AllProductsTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    margin: 16px 0;
    font-size: 1.25em;
    flex: 1 0 0;
    order: 0;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 12px;

    & > a {
      order: 2;
    }
  }
`;

const StyledProductRegistButton = styled(Button)`
  width: 132px;
  height: 40px;
`;

const ItemsPage = () => {
  const deviceType = useViewportDevice();
  const { value: searchValue, handleChange: handleInputChange } = useInput('');
  const [order, setOrder] = useState('recent');
  const debouncedKeyword = useDebounce(searchValue);
  const {
    bestProducts,
    allProducts,
    setPage,
    total,
    isBestProductsLoading,
    isBestProductsError,
    isAllProductsLoading,
    isAllProductsError,
  } = useProductsLoading(deviceType, order, debouncedKeyword);

  const handleSelect = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  const result =
    isBestProductsLoading && isAllProductsLoading ? (
      <LoadingIndicator />
    ) : (
      <ItemPageWrapper>
        <BestProductsWrapper>
          <BestProductsHeading>베스트 상품</BestProductsHeading>
          {!isBestProductsLoading ? (
            <ProductList productList={bestProducts} />
          ) : (
            <LoadingIndicator />
          )}
        </BestProductsWrapper>
        <AllProductsWrapper>
          <AllProductsTitle>
            <h1>전체 상품</h1>
            <StyledProductRegistButton
              link={'/addItem'}
              aria-label={'상품 등록하기 버튼'}
              type={'square'}
            >
              상품 등록하기
            </StyledProductRegistButton>
            <SearchBar value={searchValue} onChange={handleInputChange} />
            <SortSelector
              options={[
                { value: 'recent', label: '최신순' },
                { value: 'favorite', label: '좋아요순' },
              ]}
              defaultValue={order ? order : 'recent'}
              deviceType={deviceType}
              onSelect={handleSelect}
            />
          </AllProductsTitle>
          {!isBestProductsLoading ? (
            <>
              <ProductGrid productList={allProducts} deviceType={deviceType} />
              <ProductPagenation
                setPage={setPage}
                total={total}
                deviceType={deviceType}
              />
            </>
          ) : (
            <LoadingIndicator />
          )}
        </AllProductsWrapper>
      </ItemPageWrapper>
    );

  return result;
};

export default ItemsPage;
