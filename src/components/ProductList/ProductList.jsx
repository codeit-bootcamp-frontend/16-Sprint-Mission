/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { getItems } from "../../services/api";
import { DEFAULT_ITEM_PAGE_SIZE } from "../../constants/pagesize";
import { ITEMS_ORDER_MAP } from "../../constants/sortOptions";
import useAsync from "../../hooks/useAsync";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import InputSearch from "../../ui/Input/InputSearch";
import Pagination from "../Pagination";
import ProductListResults from "./ProductListResults";

const DEFAULT_ORDER = Object.keys(ITEMS_ORDER_MAP)[0];
const dropdownMenuItems = Object.keys(ITEMS_ORDER_MAP);

const ProductList = ({ title, pageSize = DEFAULT_ITEM_PAGE_SIZE }) => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const navigate = useNavigate();
  const {
    isLoading,
    loadingError,
    runAsync: getItemsAsync,
  } = useAsync(getItems);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const handleLoad = useCallback(
    async (options) => {
      const result = await getItemsAsync(options);
      if (!result) return;

      setItems(result.list);
      setTotalCount(result.totalCount);
    },
    [getItemsAsync]
  );

  const handleDropdownSelect = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  useEffect(() => {
    handleLoad({
      pageSize,
      orderBy: ITEMS_ORDER_MAP[order],
      keyword,
    });
  }, [pageSize, order, keyword, handleLoad]);

  return (
    <div css={ProductListStyle}>
      <div className="item-list-header">
        <SectionTitle title={title} />
        <Button
          type="button"
          variant="primary"
          size="sm"
          className="add-item-btn"
          onClick={() => navigate("/products/addProduct")}
        >
          상품 등록하기
        </Button>
        <InputSearch
          keyword={keyword}
          onSearch={setSearchParams}
          className="item-list-header-search"
          placeholder="검색할 상품을 입력해주세요"
        />
        <Dropdown
          menu={dropdownMenuItems}
          onClickMenu={handleDropdownSelect}
          defaultSelected={order}
          iconType="orderIcon"
        />
      </div>
      <ProductListResults
        items={items}
        pageSize={pageSize}
        isLoading={isLoading}
        isError={loadingError}
        isEmpty={() => setSearchParams("")}
      />
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        handleLoad={handleLoad}
        orderStatus={ITEMS_ORDER_MAP[order]}
        searchKeyword={keyword}
      />
    </div>
  );
};

export default ProductList;

export const ProductListStyle = css`
  padding-bottom: 40px;

  .item-list-ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(48%, 1fr));
    gap: 32px 8px;
  }

  .item-list img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .item-list-ul.best {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 24px;
  }

  .item-list-ul.best .item-list {
    flex-grow: 1;
  }

  .item-list-header .item-list-title {
    margin-bottom: 0;
  }

  .item-list-header {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--list-header-gap);
    margin-bottom: 24px;
  }

  .item-list-header-search {
    width: calc(100% - var(--dropdown-min-width) - var(--list-header-gap));
  }

  .item-list-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    gap: 8px;
  }

  @media (min-width: 600px) {
    .item-list-ul.best {
      gap: 40px 10px;
    }

    .item-list-ul.best .item-list {
      width: calc(50% - 10px);
    }
  }

  @media (min-width: 720px) {
    .item-list-ul {
      grid-template-columns: repeat(3, minmax(30%, 1fr));
      gap: 40px 16px;
    }

    .item-list-header {
      flex-wrap: nowrap;
    }

    .item-list-header-search {
      width: 242px;
    }
  }

  @media (min-width: 1200px) {
    .item-list-ul {
      grid-template-columns: repeat(5, minmax(220px, 1fr));
      gap: 40px 24px;
    }

    .item-list-ul.best {
      gap: 40px 24px;
    }

    .item-list-ul.best .item-list {
      width: calc(25% - 24px);
      flex-grow: 1;
    }

    .item-list-header-search {
      width: 324px;
    }
  }
`;
