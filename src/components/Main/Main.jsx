import { useState } from "react";
import BestProducts from "./Products/BestProducts";
import AllProducts from "./Products/AllProducts";
import Footer from "../Footer/Footer";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1); //페이지 번호 상태 관리

  return (
    <>
      <BestProducts />
      <AllProducts currentPage={currentPage} />
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Main;
