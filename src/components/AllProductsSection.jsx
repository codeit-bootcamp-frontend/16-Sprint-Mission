import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CustomSortSelect from './CustomSortSelect';
import Pagination from './Pagination';
import ProductList from './ProductList';
import SearchInput from './SearchInput';
function AllProductsSection({
  allItems,
  setOrder,
  value,
  handlerSearchItems,
  currentPage,
  setCurrentPage,
  totalItemCount,
  SHOWITEMSLENGTH,
}) {
  return (
    <>
      <AllProductsToolbar>
        <AllItemTitle>전체상품</AllItemTitle>
        <StyledLink to='/addItem'>
          <CreateProductBtn>상품 등록하기</CreateProductBtn>
        </StyledLink>
        <SearchInput handlerSearchItems={handlerSearchItems} />
        <CustomSortSelect setOrder={setOrder} value={value} />
      </AllProductsToolbar>

      <ProductList allItems={allItems} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItemCount={totalItemCount}
        SHOWITEMSLENGTH={SHOWITEMSLENGTH}
      />
    </>
  );
}
const AllProductsToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px 0;
  @media screen and (min-width: 768px) {
    gap: 0 12px;
    justify-content: end;
  }
`;
const AllItemTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`;
const StyledLink = styled(Link)`
  width: 133px;
  height: 42px;
  border-radius: 8px;
  background-color: #3692ff;
  border: 0;
  @media all and (min-width: 768px) {
    order: 2;
  }
`;
const CreateProductBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export default AllProductsSection;
