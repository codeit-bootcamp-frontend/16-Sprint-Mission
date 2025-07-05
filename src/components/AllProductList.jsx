import "./AllProductList.css";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import Search from "./Search";
import Button from "./Button";
import Pagination from "./Pagination";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";

const AllProductList = ({ items, totalCount }) => {
  const [order, setOrder] = useState("createdAt");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const nav = useNavigate();

  const handleSortChange = (e) => setOrder(e.target.value); // e.target.value = createdAt or favoriteCount
  const handleSearchChange = (value) => setSearch(value);

  const { width } = useWindowDimensions(); //window width size

  //search
  const getFilteredData = () => {
    if (search === "") {
      return items;
    }
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredItems = getFilteredData();

  useEffect(() => {
    if (width >= 480 && width <= 767) setPageSize(4); // Mobile
    else if (width >= 768 && width <= 1199) setPageSize(6); // Tablet
    else setPageSize(10); // Desktop
  }, [width]);

  // 검색할 때 search 값이 변하면 page를 무조건 1로 변경(만약 page7에 있었어도 1로 변경됨)
  useEffect(() => {
    setPage(1);
  }, [search]);

  const offset = (page - 1) * pageSize; //페이지네이션에서 어떤 데이터를 잘라서 보여줄지 결정하는 계산식 ex)offset = (3 - 1) * 10 = 20번째 데이터부터 보여줌
  const visibleItems = [...filteredItems]
    .sort((a, b) => b[order] - a[order])
    .slice(offset, offset + pageSize); //ex).slice(20, 20+10)

  //검색 후 totalCount 변경
  if (filteredItems !== "") {
    totalCount = filteredItems.length;
  }
  return (
    <article className="all_product_list_wrapper">
      <div className="all_product_list_top">
        <h2>전체 상품</h2>
        <div className="all_product_list_top_right_option">
          <Search value={search} onChange={handleSearchChange} />
          <Button
            text={"상품 등록하기"}
            type={"ADD"}
            onClick={() => {
              nav("/additem");
            }}
          />
          <select
            className="all_product_list_select"
            value={order}
            onChange={handleSortChange}
          >
            <option value="createdAt">최신순</option>
            <option value="favoriteCount">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="all_product_list">
        {visibleItems.map((item) => (
          <ProductForm key={item.id} item={item} type="all" />
        ))}
      </div>
      <Pagination
        totalCount={totalCount}
        page={page}
        onPageChange={setPage}
        pageSize={pageSize}
      />
    </article>
  );
};
export default AllProductList;
