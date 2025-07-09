import { useEffect, useState } from "react";
import AllProducts_navbar from "./AllProducts_navbar";
import styled from "styled-components";
import { Bold16, Medium14 } from "../style/Font";
import { useScreenSize } from "../hooks/useScreenSize";

const AllProducts_style = styled.div`
  display: grid;
  justify-content: center;
  gap: 0 24px;

  grid-template-columns: repeat(2, 168px);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 221px);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 221px);
  }
`;
const ProductCard = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 12px;

  height: 168px;

  @media (min-width: 768px) {
    height: 221px;
    border-radius: 16px;
  }

  @media (min-width: 1200px) {
    height: 221px;
  }
`;

//페이지UI//
///////////
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
`;

const PageButton = styled.button`
  width: 40px;
  height: 40px;

  background-color: transparent;
  border: 1px solid #e5e7eb;
  padding: 6px 12px;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background-color: #2f80ed;
  }
`;

const PageNumber = styled.span`
  font-weight: bold;
  padding: 0 8px;
`;

function AllProducts({ products }) {
  const [sortValue, setSortValue] = useState("recent");
  const [searchKeyword, setSearchKeyword] = useState("");

  const IMG_COUNT = {
    desktop: 10,
    tablet: 6,
    mobile: 4,
  };

  const { isDesktop, isTablet } = useScreenSize();

  const imgCount = isDesktop
    ? IMG_COUNT.desktop
    : isTablet
    ? IMG_COUNT.tablet
    : IMG_COUNT.mobile;

  const sortProducts = [...products].sort((a, b) => {
    if (sortValue === "recent") {
      return new Date(b.createAt) - new Date(a.createAt); //최신순
    } else if (sortValue === "favorite") {
      return b.favoriteCount - a.favoriteCount; //좋아요순
    }
    return 0;
  });

  return (
    <section>
      <AllProducts_navbar
        sortValue={sortValue}
        setSortValue={setSortValue}
        onSearch={setSearchKeyword}
      />
      <AllProducts_style>
        {sortProducts.slice(0, imgCount).map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.images[0]} alt={product.name} />
            <Medium14 style={{ margin: "16px 0 0 0" }}>{product.name}</Medium14>
            <Bold16 style={{ margin: "6px 0" }}>{product.price}원</Bold16>
            <div>
              <img src="./images/main-page/favoriteIcon.png" />
              <span style={{ marginLeft: "4px" }}>{product.favoriteCount}</span>
            </div>
          </ProductCard>
        ))}
      </AllProducts_style>
      <PaginationWrapper>
        <PageButton>{"<"}</PageButton>
        <PageNumber>1</PageNumber>
        <PageButton>{"2"}</PageButton>
        <PageButton>{"3"}</PageButton>
        <PageButton>{"4"}</PageButton>
        <PageButton>{"5"}</PageButton>
        <PageButton>{">"}</PageButton>
      </PaginationWrapper>
    </section>
  );
}
export default AllProducts;
