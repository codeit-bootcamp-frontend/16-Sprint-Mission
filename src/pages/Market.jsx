// src/pages/Market.jsx
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getData } from "../Api";
import ItemsList from "../components/ItemsList";
import Pagetnation from "../components/Pagination";
import { useWindowWidth } from "../hooks/useWindowWidth";
import SearchInput from "../components/SearchInput";
import CustomSortSelect from "../components/CustomSortSelect";
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
const AllItemTitle = styled(BestItemTitle)`
  padding: 0;
  flex: 1;
`;
const ProductRegistration = styled.button`
  width: 133px;
  height: 42px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-radius: 8px;
  background-color: #3692ff;
  border: 0;
  @media all and (min-width: 768px) {
    order: 2;
  }
`;

const AllProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 0;
  padding-bottom: 16px;
  @media all and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 12px;
  }
`;
const breakpoints = [
  { max: 600, bestPageSize: 1, itemsPageSize: 4 },
  { max: 768, bestPageSize: 2, itemsPageSize: 6 },
  { max: Infinity, bestPageSize: 4, itemsPageSize: 10 },
];
function Market() {
  const [items, setItems] = useState(null);
  const [favoriteData, setFavoriteData] = useState(null);
  const [order, setOrder] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);
  const [bestItempageSize, setBestItemPageSize] = useState(null);
  const [itemPageSize, setItemPageSize] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const resizeWidth = useWindowWidth();
  const bestItemsFlag = 1;

  useEffect(() => {
    if (!resizeWidth) return;
    const { bestPageSize, itemsPageSize } = breakpoints.find(
      (bp) => resizeWidth <= bp.max
    );
    setItemPageSize(itemsPageSize);
    setBestItemPageSize(bestPageSize);
    setCurrentPage(1);
  }, [resizeWidth]);
  useEffect(() => {
    if (bestItempageSize == null) return;
    const fetchBestItem = async () => {
      const bestItems = await getData("favorite", 1, bestItempageSize);
      setFavoriteData(bestItems.list);
    };
    fetchBestItem();
  }, [bestItempageSize]);
  useEffect(() => {
    if (itemPageSize == null) return;
    const fetchAll = async () => {
      const allItems = await getData(
        order,
        currentPage,
        itemPageSize,
        searchValue
      );
      setItems(allItems.list);

      setTotalProduct(allItems.totalCount);
    };

    fetchAll();
  }, [order, currentPage, itemPageSize, searchValue]);

  if (!items || !favoriteData) {
    return <div>로딩 중...</div>;
  }
  const bestItems = favoriteData.sort(
    (a, b) => b["favoriteCount"] - a["favoriteCount"]
  );
  const sortItems = items.sort((a, b) => b[order] - a[order]);

  const handlerSearchItems = (value) => {
    setSearchValue(value);
  };
  return (
    <MarketWrapper>
      <BestItemWrapper>
        <BestItemTitle>베스트 상품</BestItemTitle>
        <ItemsList
          bestItemsFlag={bestItemsFlag}
          itemsCount={bestItempageSize}
          items={bestItems}
        />
      </BestItemWrapper>

      <AllProductsWrapper>
        <AllItemTitle>전체상품</AllItemTitle>
        <ProductRegistration>상품 등록하기</ProductRegistration>
        <SearchInput handlerSearchItems={handlerSearchItems} />
        <CustomSortSelect value={order} setOrder={setOrder} />
      </AllProductsWrapper>

      <ItemsList itemsCount={itemPageSize} items={sortItems} />
      <Pagetnation
        totalCount={totalProduct}
        currentPageSetter={setCurrentPage}
        currentPage={currentPage}
        SHOWITEMSLENGTH={itemPageSize}
      />
    </MarketWrapper>
  );
}

export default Market;
