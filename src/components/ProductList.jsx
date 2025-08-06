import styled from 'styled-components';

import Product from './Product';

const StyledProductList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const ProductList = ({ productList }) => {
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
  return <StyledProductList>{resultList}</StyledProductList>;
};

export default ProductList;
