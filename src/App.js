/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Header from "./components/Header";
import BestProductsItems from "./components/BestProducts";
import ProductsList from "./components/ProductsList";
import { getBestProducts, getProducts } from "./API/api";
import { useEffect, useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import Buttons from "./components/Buttons";

function App() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [size, setSize] = useState(1);

  useEffect(() => {
    //베스트 상품 fetch 함수
    async function fetchBestProducts() {
      try {
        const result = await getBestProducts({ size });
        setBestProducts(result.list);
      } catch (error) {
        console.error("베스트 상품 불러오기 실패");
      }
    }

    fetchBestProducts();
  }, [size]);

  useEffect(() => {
    //전체상품 fetch 함수
    async function fetchProducts() {
      const result = await getProducts();
      if (!result) return;
      setProducts(result.list);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <section css={mainSection}>
        <BestProductsItems bestProducts={bestProducts} />
        <ProductsList products={products} />
      </section>
      <Buttons />
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
