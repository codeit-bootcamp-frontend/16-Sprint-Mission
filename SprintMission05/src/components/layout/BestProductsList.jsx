import styled from "styled-components";
import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

const BestProductsListWrapper = styled.div`
  width: 1200px;
`;

const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 282px));
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Header = styled.header`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #111827;
  margin: 24px auto;
`;

const StyledProductImage = styled.img`
  width: 282px;
  height: 282px;
  object-fit: cover; // 이미지가 찌그러지지 않고 잘림
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
`;

const ProductPrice = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #1f2937;
`;
const ProductFavorite = styled.p`
  font-size: 12px;
  color: #4b5563; /* 회색 */
`;

function BestProductsListItem({ item }) {
  return (
    <div>
      <StyledProductImage src={item.images[0]} alt={item.name} />
      <ProductName>{item.name}</ProductName>
      <ProductPrice>{item.price.toLocaleString()}원</ProductPrice>
      <ProductFavorite>♡ {item.favoriteCount}</ProductFavorite>
    </div>
  );
}

function BestProductsList() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({
          order: "favoriteCount",
          offset: 0,
          limit: 4,
        });
        const sortedTop4 = data.list
          .sort((a, b) => b.favoriteCount - a.favoriteCount)
          .slice(0, 4);

        setItems(sortedTop4);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <BestProductsListWrapper>
      <Header>베스트 상품</Header>
      <StyledProductList>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <BestProductsListItem item={item} />
            </li>
          );
        })}
      </StyledProductList>
    </BestProductsListWrapper>
  );
}

export default BestProductsList;
