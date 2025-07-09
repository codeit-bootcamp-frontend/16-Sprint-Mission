import styled from 'styled-components';

import Product from './Product';

const COLS_BY_DEVICE = {
  mobile: 2,
  tablet: 3,
  desktop: 5,
};

const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(
    ${({ $deviceType }) => COLS_BY_DEVICE[$deviceType]},
    1fr
  );
  gap: 32px 8px;
  margin-top: 16px;
`;

const ProductGrid = ({ productList, deviceType }) => {
  if (productList === null) return;

  const resultList = productList.map((e) => (
    <Product
      key={e.id}
      name={e.name}
      price={e.price}
      images={e.images}
      favoriteCount={e.favoriteCount}
    />
  ));

  return (
    <ProductGridWrapper $deviceType={deviceType}>
      {resultList}
    </ProductGridWrapper>
  );
};

export default ProductGrid;
