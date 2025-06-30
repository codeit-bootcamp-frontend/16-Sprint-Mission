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
import { useState, useEffect, useCallback, useRef } from "react"; 
import { debounce } from "lodash";

const PAGE_SIZES = {
  lg: { best: 4, all: 10 },
  md: { best: 2, all: 6 },
  sm: { best: 1, all: 4 },
};

const MAX_SEARCH_LENGTH = 100;
const DEBOUNCE_DELAY = 300;

function Items() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchKeyword, setSearchKeyword] = useState(""); 
  const [order, setOrder] = useState("recent");
  const [currPage, setCurrPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [currentAllProductCount, setCurrentAllProductCount] = useState(
    PAGE_SIZES[useScreenSize()].all 
  );

  const screenSize = useScreenSize();

  
  const debouncedSearchHandler = useRef(
    debounce((value) => {
      setSearchKeyword(value);
      setCurrPage(1);
    }, DEBOUNCE_DELAY)
  ).current;

  useEffect(() => {
    
    if (searchTerm.length <= MAX_SEARCH_LENGTH) {
      debouncedSearchHandler(searchTerm);
    } else {
      
    }

    
    return () => {
      debouncedSearchHandler.cancel();
    };
  }, [searchTerm, debouncedSearchHandler]);


  useEffect(() => {
    const updateProducts = async () => {
      try {
        const { totalCount } = await getProducts({
          orderBy: order,
          
          keyword: searchKeyword,
        });
        setTotalProducts(totalCount);

        const newAllProductCount = PAGE_SIZES[screenSize].all; 

      
        if (newAllProductCount !== currentAllProductCount) {
          const firstItemOfCurrentPage = Math.max(
            0,
            (currPage - 1) * currentAllProductCount
          );
          const newPage = Math.max(
            1,
            Math.floor(firstItemOfCurrentPage / newAllProductCount) + 1
          );
          const totalPages = Math.ceil(totalCount / newAllProductCount);
          const validPage = Math.min(newPage, totalPages || 1);

          setCurrPage(validPage);
          setCurrentAllProductCount(newAllProductCount);
        } else if (currPage > Math.ceil(totalCount / newAllProductCount)) {
         
          setCurrPage(1);
        }
      } catch (error) {
        console.error("상품 정보를 불러오는 중 오류:", error);
        setTotalProducts(0);
      }
    };

    updateProducts();
  }, [screenSize, order, searchKeyword, currPage, currentAllProductCount]); 

  const handleSearchChange = (e) => { 
    const value = e.target.value;
    setSearchTerm(value); 
  };

  const handleOrder = (selectedOrder) => {
    setOrder(selectedOrder);
    setCurrPage(1);
  };

  const handlePage = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalProducts / currentAllProductCount)) {
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
          pageSize={PAGE_SIZES[screenSize].best} 
          type='large'
        />
        <div className={styles.headers}>
          <Header type='h1' text={"전체 상품"} />
          <SearchItem value={searchTerm} onChange={handleSearchChange} />
          <Button href={"additem"} buttonText={"상품등록하기"} />
          <DropDown onChangeOrder={handleOrder} />
        </div>
        <ProductList
          orderBy={order}
          pageSize={currentAllProductCount} 
          keyword={searchKeyword}
          page={currPage}
          type='small'
        />
        <Pagination
          currPage={currPage}
          totalProducts={totalProducts}
          pageSize={currentAllProductCount}
          handlePage={handlePage}
        />
      </Content>
    </>
  );
}

export default Items;