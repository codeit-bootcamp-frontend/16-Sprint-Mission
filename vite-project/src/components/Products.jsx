import { useEffect, useState } from "react";
import { getAllProducts } from "../api/allProducts";
import { getBestProducts } from "../api/bestProducts";

import BestProducts from "./BestProducts";
import AllProducts from "./AllProducts";
import styled from "styled-components";
const CommonCss_Style = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1200px;
  width: 100%;
  padding: 0 10px;

  place-items: unset;

  // @media (max-width: 768px) {
  //   padding: 0 24px;
  // }
`;

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setbestProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setAllProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getBestProducts()
      .then((data) => setbestProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <CommonCss_Style>
      <BestProducts products={bestProducts} />
      <AllProducts products={allProducts} />
    </CommonCss_Style>
  );
}
export default Products;
