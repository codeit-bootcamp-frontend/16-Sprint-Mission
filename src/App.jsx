import Nav from "./components/Nav";

import styles from "./css/App.module.css";
import Header from "./components/Header";
import DropDown from "./components/DropDown";
import ProductList from "./components/ProductList";
import Button from "./components/Button";
import SearchItem from "./components/SearchItem";
import Pagination from "./components/Pagination";

import { getProducts } from "./api/ProductApi";
import { useScreenSize } from "./utils/useScreenSize";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("recent");
  const [currPage, setCurrPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [bestProduct, setBestProduct] = useState(4);
  const [allProduct, setAllProduct] = useState(10);
  const [isBestProduct, setIsBestProduct] = useState(true);

  const screenSize = useScreenSize();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleOrder = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  const handlePage = (newPage) => {
    setCurrPage(newPage);
  };

  const getTotalProducts = async () => {
    try {
      const { totalCount } = await getProducts({
        orderBy: order,
        keyword: search,
      });
      setTotalProducts(totalCount);
    } catch (error) {
      console.error("전체 상품 수를 불러오는 중 오류:", error);
    }
  };

  useEffect(() => {
    let newPageSize;
    if (screenSize === "lg") {
      setBestProduct(4);
      newPageSize = 10;
    } else if (screenSize === "md") {
      setBestProduct(2);
      newPageSize = 6;
    } else {
      setBestProduct(1);
      newPageSize = 4;
    }
    if (newPageSize !== allProduct) {
      const firstItemOfCurrentPage = (currPage - 1) * allProduct;
      const newPage = Math.floor(firstItemOfCurrentPage / newPageSize) + 1;
      setCurrPage(newPage);
      setAllProduct(newPageSize);
    }
  }, [screenSize, currPage, allProduct]);

  useEffect(() => {
    getTotalProducts();
  }, []);
  return (
    <>
      <Nav />
      <div className={styles.content}>
        <Header text={"베스트 상품"} />
        <ProductList
          orderBy={"favorite"}
          pageSize={bestProduct}
          isBestProduct={isBestProduct}
        />
        <div className={styles.headers}>
          <Header text={"전체 상품"} />
          <SearchItem value={search} onChange={handleSearch} />
          <Button href={"#"} buttonText={"상품등록하기"} />
          <DropDown onChangeOrder={handleOrder} />
        </div>
        <ProductList
          orderBy={order}
          pageSize={allProduct}
          keyword={search}
          page={currPage}
        />
        <Pagination
          currPage={currPage}
          totalProducts={totalProducts}
          pageSize={allProduct}
          handlePage={handlePage}
        />
      </div>
    </>
  );
}

export default App;
