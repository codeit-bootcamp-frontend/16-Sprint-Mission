import styled from "styled-components";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/getProducts";
import Pagination from "./Pagination";
import Button from "../common/Button/Button";
import optionIcon from "../../assets/ic_sort.png";
import Input from "../common/Input";

const PAGESIZE = 10;

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

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        // 데스크탑
        setVisibleCount(10);
      } else if (width >= 768) {
        // 태블릿
        setVisibleCount(6);
      } else {
        // 모바일
        setVisibleCount(4);
      }
    };

    updateVisibleCount(); // 처음 한 번 실행
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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
          <Input placeholder="검색할 상품을 입력하세요" />
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
        {items.slice(0, visibleCount).map((item) => {
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 66px auto 0;
  max-width: 344px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 696px;
    gap: 16px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    max-width: 1200px;
    gap: 24px;
  }
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

const StyledForm = styled.form`
  position: relative;
  display: flex;
  gap: 12px;

  input {
    position: absolute;
    top: 50px;
    right: 56px;

    width: 288px;
    height: 42px;
    background-color: #f3f4f6;
    border: 1px solid #f3f4f6;
    border-radius: 12px;
    padding: 9px 20px 0 16px;
    font-size: 16px;
    font-weight: 400;
    color: #9ca3af;

    @media (min-width: 768px) {
      width: 242px;
      position: static;
    }

    @media (min-width: 1200px) {
      width: 470px;
    }
  }

  select {
    position: absolute;
    top: 50px;
    right: 0;

    width: 42px;
    height: 42px;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 400;
    color: #1f2937;
    appearance: none; /* 기본 화살표 없애기 */
    background-image: url(${optionIcon}); /* 화살표 아이콘 넣기 (이미지 직접 준비해) */
    background-repeat: no-repeat;
    background-position: right 12px center;

    @media (min-width: 768px) {
      appearance: auto;
      background-image: none;
      position: static;
      width: 130px;
    }

    option {
      text-align: center;
      color: #1f2937;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
