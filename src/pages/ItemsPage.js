import "../css/pages/ItemListPage.css";
import { useState, useEffect, useCallback } from "react";
import { getFavoriteItems, getAllItems } from "../api/Items.js";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput.js";
import Button from "../components/Button.js";
import Dropdown from "../components/Dropdown.js";
import Pagination from "../components/Pagination.js";

function ItemListPage() {
  const [orderBy, setOrderBy] = useState({
    name: "최신순",
    value: "recent",
  });
  const [keyword, setKeyword] = useState("");

  const [totalCount, setTotalCount] = useState(0);
  const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);

  const [bestItems, setBestItems] = useState([
    {
      favoriteCount: 0,
      images: [],
      price: 0,
      description: "",
      name: "",
      id: 0,
    },
  ]);
  const [allItems, setAllItems] = useState([
    {
      favoriteCount: 0,
      images: [],
      price: 0,
      description: "",
      name: "",
      id: 0,
    },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownList = [
    { name: "최신순", value: "recent" },
    { name: "좋아요순", value: "favorite" },
  ];

  const fetchFavoriteItems = async (queryParams) => {
    try {
      const { list } = await getFavoriteItems(queryParams);
      setBestItems(list);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };

  const fetchAllItems = async (queryParams) => {
    try {
      const { list, totalCount } = await getAllItems(queryParams);
      setAllItems(list);
      setTotalCount(totalCount);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };

  const onClickDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const onClickDropdownItem = (order) => {
    if (order.value !== orderBy.value) {
      setOrderBy(order);
      setPaginationCurrentPage(1);
    }
  };

  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    setPaginationCurrentPage(1);
    fetchAllItems({
      page: paginationCurrentPage,
      pageSize: allPageSize,
      orderBy: orderBy.value,
      keyword,
    });
  };

  const calcBreakPoint = (width) => {
    if (width >= 1200) return "pc";
    if (width >= 744) return "tablet";
    return "mobile";
  };

  const [deviceType, setDeviceType] = useState(
    calcBreakPoint(window.innerWidth)
  );

  const devicePageSize = {
    mobile: {
      best: 1,
      all: 4,
    },
    tablet: {
      best: 2,
      all: 6,
    },
    pc: {
      best: 4,
      all: 10,
    },
  };

  const bestPageSize = devicePageSize[deviceType]["best"];

  const allPageSize = devicePageSize[deviceType]["all"];

  const handleResize = useCallback(() => {
    const newDeviceType = calcBreakPoint(window.innerWidth);
    setDeviceType(newDeviceType);
  }, []);

  const onClickNextPage = () => {
    setPaginationCurrentPage(paginationCurrentPage + 1);
  };

  const onClickPrevPage = () => {
    setPaginationCurrentPage(paginationCurrentPage - 1);
  };

  const onClickPage = (page) => {
    setPaginationCurrentPage(page);
  };

  useEffect(() => {
    fetchFavoriteItems({
      page: 1,
      pageSize: bestPageSize,
      orderBy: "favorite",
    });
    fetchAllItems({
      page: paginationCurrentPage,
      pageSize: allPageSize,
      orderBy: orderBy.value,
    });
  }, [
    deviceType,
    orderBy.value,
    paginationCurrentPage,
    bestPageSize,
    allPageSize,
  ]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div>
      {/* 메인 영역*/}
      <main className="items__container">
        <div className="items__container__inner">
          {/* 베스트 상품 영역 */}
          <section>
            <div className="items__container__best__header">
              <div className="items__container__title">베스트 상품</div>
            </div>
            <ul className="items__container__best__list">
              {bestItems?.map((item, index) => (
                <li key={index}>
                  <Card data={item} />
                </li>
              ))}
            </ul>
          </section>

          {/* 전체 상품 영역 */}
          <section>
            <div className="items__container__all__header">
              <div className="items__container__title">전체 상품</div>
              <SearchInput
                value={keyword}
                onInput={onKeywordChange}
                onKeyDown={onKeyDown}
                onClick={onClickSearch}
                className="items__container__search__input"
              />
              <Button
                className="items__container__registerBtn"
                type="register"
                to="addItem"
                text="상품 등록하기"
              />
              <Dropdown
                className="items__container__dropdown"
                onClickDropdown={onClickDropdown}
                onClickDropdownItem={onClickDropdownItem}
                dropdownList={dropdownList}
                showDropdown={showDropdown}
                value={orderBy}
              />
            </div>
            <ul className="items__container__all__list">
              {allItems?.map((item, index) => (
                <li key={index}>
                  <Card data={item} />
                </li>
              ))}
            </ul>

            <Pagination
              totalCount={totalCount}
              pageSize={allPageSize}
              currentPage={paginationCurrentPage}
              onClickNext={onClickNextPage}
              onClickPrev={onClickPrevPage}
              onClickPage={onClickPage}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default ItemListPage;
