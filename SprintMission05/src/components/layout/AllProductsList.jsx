import styled from "styled-components";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api/getProducts";
import Pagination from "./Pagination";
import Button from "../common/Button/Button";

const PAGESIZE = 10;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px auto;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    color: #111827;
  }
`;

const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 221px));
  grid-template-rows: repeat(2, minmax(0, 317px));
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledProductImage = styled.img`
  width: 221px;
  height: 221px;
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

const StyledForm = styled.form`
  display: flex;
  gap: 12px;

  input {
    width: 470px;
    height: 42px;
    background-color: #f3f4f6;
    border: 1px solid #f3f4f6;
    border-radius: 12px;
    padding: 9px 20px 0 16px;
    font-size: 16px;
    font-weight: 400;
    color: #9ca3af;
  }

  select {
    width: 130px;
    height: 42px;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 400;
    color: #1f2937;

    option {
      text-align: center;
      color: #1f2937;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

function AllProductsListItem({ item }) {
  return (
    <div>
      <StyledProductImage src={item.images[0]} alt={item.name} />
      <ProductName>{item.name}</ProductName>
      <ProductPrice>{item.price.toLocaleString()}원</ProductPrice>
      <ProductFavorite>♡ {item.favoriteCount}</ProductFavorite>
    </div>
  );
}

function AllProductsList() {
  const nav = useNavigate();
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts({
          order: order,
          page: page,
        });

        const sorted = [...data.list].sort((a, b) => {
          if (order === "recent") {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
          if (order === "favorite") {
            return b.favoriteCount - a.favoriteCount;
          }
          return 0;
        });

        setItems(sorted);
        setTotalCount(data.totalCount);
        setHasNextPage(data.totalCount - page * PAGESIZE > PAGESIZE);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [order, page]);

  if (isLoading && items.length === 0) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  const handleNewestClick = () => setOrder("recent");
  const handleFavoriteClick = () => setOrder("favorite");
  const handleClick = () => {
    nav("/additem");
  };

  const totalPages = Math.ceil(totalCount / PAGESIZE);

  return (
    <div>
      <Header>
        <h2>전체상품</h2>
        <StyledForm>
          <input type="text" placeholder="검색할 상품을 입력하세요" />
          <Button
            state="inactive"
            size="small"
            text="상품 등록하기"
            onClick={handleClick}
          />
          <select
            name="sort"
            value={order}
            onChange={(e) => {
              setPage(1);
              if (e.target.value === "recent") handleNewestClick();
              if (e.target.value === "favorite") handleFavoriteClick();
            }}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </StyledForm>
      </Header>

      <StyledProductList>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <AllProductsListItem item={item} />
            </li>
          );
        })}
      </StyledProductList>

      <Pagination
        currentPage={page}
        onPageChange={setPage}
        hasNextPage={hasNextPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default AllProductsList;
