import Nav from "../../components/Nav/Nav.jsx";

import styles from "./Items.module.css";
import Content from "../../components/Content/Content.jsx";
import Header from "../../components/Header/Header.jsx";
import DropDown from "../../components/DropDown/DropDown.jsx";
import ProductList from "../../components/ProductLIst/ProductList.jsx";
import Button from "../../components/Button/Button.jsx";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

import { getProducts } from "../../api/ProductApi.jsx";
import { useScreenSize } from "../../utils/useScreenSize.jsx";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

const PAGE_SIZES = {
  lg: { best: 4, all: 10 },
  md: { best: 2, all: 6 },
  sm: { best: 1, all: 4 },
};

const MAX_SEARCH_LENGTH = 100;
const DEBOUNCE_DELAY = 300;

function Items() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("recent");
  const [currPage, setCurrPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [bestProductCount, setBestProductCount] = useState(0);
  const [allProductCount, setAllProductCount] = useState(0);

  const screenSize = useScreenSize();

  useEffect(() => {
    const { best, all } = PAGE_SIZES[screenSize];
    setBestProductCount(best);
    setAllProductCount(all);
  }, [screenSize]);

  useEffect(() => {
    const updateProducts = async () => {
      try {
        const { totalCount } = await getProducts({
          orderBy: order,
          keyword: search,
        });
        setTotalProducts(totalCount);

        const { all } = PAGE_SIZES[screenSize];
        if (all !== allProductCount) {
          const firstItemOfCurrentPage = Math.max(
            0,
            (currPage - 1) * allProductCount
          );
          const newPage = Math.max(
            1,
            Math.floor(firstItemOfCurrentPage / all) + 1
          );
          const totalPages = Math.ceil(totalCount / all);
          const validPage = Math.min(newPage, totalPages || 1);

          setCurrPage(validPage);
          setAllProductCount(all);
        } else if (currPage > Math.ceil(totalCount / allProductCount)) {
          setCurrPage(1);
        }
      } catch (error) {
        console.error("상품 정보를 불러오는 중 오류:", error);
        setTotalProducts(0);
      }
    };

    updateProducts();
  }, [screenSize, order, search, currPage, allProductCount]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, DEBOUNCE_DELAY),
    []
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_SEARCH_LENGTH) {
      debouncedSearch(value);
    }
  };

  const handleOrder = (selectedOrder) => {
    setOrder(selectedOrder);
    setCurrPage(1);
  };

  const handlePage = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalProducts / allProductCount)) {
      setCurrPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav />
      <Content>
        <Header type='h1' text={"베스트 상품"} />
        <ProductList
          orderBy={"favorite"}
          pageSize={bestProductCount}
          type='large'
        />
        <div className={styles.headers}>
          <Header type='h1' text={"전체 상품"} />
          <SearchItem value={search} onChange={handleSearch} />
          <Button type='button' href={"#"} buttonText={"상품등록하기"} />
          <DropDown onChangeOrder={handleOrder} />
        </div>
        <ProductList
          orderBy={order}
          pageSize={allProductCount}
          keyword={search}
          page={currPage}
          type='small'
        />
        <Pagination
          currPage={currPage}
          totalProducts={totalProducts}
          pageSize={allProductCount}
          handlePage={handlePage}
        />
      </Content>
    </>
  );
}

export default Items;
