/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { BREAK_POINT } from "./style/BreakPoints";

import Header from "./components/Header";
import BestProductsItems from "./components/BestProducts";
import ProductsList from "./components/ProductsList";
import { getBestProducts, getProducts } from "./API/api";
import { useEffect, useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import Buttons from "./components/Buttons";
import useViewportWidth from "./hooks/useViewportWidth";

function App() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [bestPageSize, setBestPageSize] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [orderBy, setOrderBy] = useState("recent");
  const [totalCount, setTotalCount] = useState();
  const width = useViewportWidth();

  useEffect(() => {
    if (width < BREAK_POINT.md) {
      setPageSize(4);
      setBestPageSize(1);
    } else if (width < BREAK_POINT.lg) {
      setPageSize(6);
      setBestPageSize(2);
    } else {
      setPageSize(10);
      setBestPageSize(4);
    }
  }, [width]);

  useEffect(() => {
    //베스트 상품 fetch 함수
    async function fetchBestProducts() {
      try {
        const result = await getBestProducts();
        setBestProducts(result.list);
      } catch (error) {
        console.error("베스트 상품 불러오기 실패", error);
      }
    }

    fetchBestProducts();
  }, []);

  useEffect(() => {
    //전체상품 fetch 함수
    async function fetchProducts() {
      const result = await getProducts({ page, pageSize, orderBy });
      if (!result) return;
      setProducts(result.list);
      setTotalCount(result.totalCount);
    }

    fetchProducts();
  }, [page, pageSize, orderBy]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <section css={mainSection}>
        <BestProductsItems
          bestProducts={bestProducts}
          bestPageSize={bestPageSize}
        />
        <ProductsList products={products} pageSize={pageSize} />
      </section>
      <Buttons
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        totalCount={totalCount}
      />
    </>
  );
}

export default App;

const mainSection = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  gap: 24px;
`;
