import styled from "styled-components";
import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

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

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        // 데스크탑
        setVisibleCount(4);
      } else if (width >= 768) {
        // 태블릿
        setVisibleCount(2);
      } else {
        // 모바일
        setVisibleCount(1);
      }
    };

    updateVisibleCount(); // 처음 한 번 실행
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({
          order: "favorite",
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
        {items.slice(0, visibleCount).map((item) => {
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

const BestProductsListWrapper = styled.div`
  width: 344px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 696px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 282px));
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  justify-content: center;

  max-width: 344px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 696px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: 1200px;
    gap: 24px;
  }
`;

const Header = styled.header`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #111827;
  margin: 24px auto;
`;

const StyledProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover; // 이미지가 찌그러지지 않고 잘림
  border-radius: 16px;
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
