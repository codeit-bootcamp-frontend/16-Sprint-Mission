/** @jsxImportSource @emotion/react */
import ProductListContainerStyle from "./ProductListContainerStyle";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { getProducts } from "@/services/get/getProducts";
import { DEFAULT_ITEM_PAGE_SIZE } from "../../constants/pagesize";
import { ITEMS_ORDER_MAP } from "../../constants/sortOptions";
import useAsync from "../../hooks/useAsync";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import InputSearch from "../ui/Input/InputSearch";
import Pagination from "../Pagination";
import ProductListResults from "./ProductListResults";

const DEFAULT_ORDER = Object.keys(ITEMS_ORDER_MAP)[0];
const dropdownMenuItems = Object.keys(ITEMS_ORDER_MAP);

const ProductListContainer = ({ title, pageSize = DEFAULT_ITEM_PAGE_SIZE }) => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const navigate = useNavigate();
  const { runAsync: getProductsAsync } = useAsync(getProducts);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const handleLoad = useCallback(
    async (options) => {
      const result = await getProductsAsync(options);
      if (!result) return;

      setProducts(result.list);
      setTotalCount(result.totalCount);
    },
    [getProductsAsync]
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
    <div css={ProductListContainerStyle}>
      <div className="product-list-header">
        <SectionTitle title={title} />
        <Button
          type="button"
          variant="primary"
          size="sm"
          className="add-product-btn"
          onClick={() => navigate("/products/addProduct")}
        >
          상품 등록하기
        </Button>
        <InputSearch
          keyword={keyword}
          onSearch={setSearchParams}
          className="product-list-header-search"
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
        products={products}
        pageSize={pageSize}
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

export default ProductListContainer;
