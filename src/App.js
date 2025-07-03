import Header from "./components/Header";
import BestProductsItems from "./components/BestProducts";
import ProductsList from "./components/ProductsList";
import { getBestProducts, getProducts } from "./API/api";
import { useEffect, useState } from "react";
import GlobalStyle from "./style/GlobalStyle";

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
      <BestProductsItems bestProducts={bestProducts} />
      <ProductsList products={products} />
    </>
  );
}

export default App;
