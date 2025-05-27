import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api";
import Item from "./Item";
import SortMethod from "./SortMethod";
import searchicon from "../../assets/searchicon.svg";
import sorticon from "../../assets/sorticon.svg";
import PageBar from "./PageBar";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    //mobile
    return 4;
  } else if (width < 1280) {
    //tablet
    return 6;
  } else {
    //desktop
    return 10;
  }
};

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [totalPage, setTotalPage] = useState();
  const [isToggleVisible, setIsToggleVisible] = useState(false);

  const fetchData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPage(Math.ceil(products.totalCount / pageSize));
  };

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsToggleVisible(false);
  };

  useEffect(() => {
    const handleSize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleSize);
    fetchData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [orderBy, page, pageSize]);

  const toggleDown = () => {
    setIsToggleVisible(!isToggleVisible);
  };

  const onPageChange = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div>
      <div className="allItemHeaderWrapper">
        <h1 className="allItemTitle">전체 상품</h1>
        <Link to="/additem" className="registerButton">
          상품 등록하기
        </Link>

        <div className="searchBarContainer">
          <img src={searchicon} alt="검색버튼"></img>
          <input
            className="searchInput"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>

        <div className="sortButtonContainer">
          <button className="sortIconButton" onClick={toggleDown}>
            <img src={sorticon} alt="정렬버튼" />
          </button>
          {isToggleVisible && (
            <SortMethod onSortSelection={handleSortSelection} />
          )}

          <button className="sortTextButton" onClick={toggleDown}>
            최신순 ▼
          </button>
          {isToggleVisible && (
            <SortMethod onSortSelection={handleSortSelection} />
          )}
        </div>
      </div>

      <div className="allItemSection">
        {itemList?.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>

      <div className="pageNavigationBar">
        <PageBar
          totalPage={totalPage}
          activePage={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default AllItemsSection;
