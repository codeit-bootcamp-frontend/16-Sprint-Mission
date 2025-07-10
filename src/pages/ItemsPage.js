import "./css/ItemListPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFavoriteItems, getAllItems } from "../api/Items.js";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput.js";
import Button from "../components/Button.js";
import Pagination from "../components/Pagination.js";
import usePagination from "../hooks/usePagination.js";
import SortDropdown from "../components/SortDropdown.js";

const ItemListPage = () => {
  const navigate = useNavigate();

  const [orderBy, setOrderBy] = useState({
    name: "최신순",
    value: "recent",
  });

  const [searchValue, setSearchValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const [totalCount, setTotalCount] = useState(0);

  /* usePagination: 페이지네이션 훅 */
  const {
    onClickNextPage,
    onClickPrevPage,
    onClickPage,
    paginationCurrentPage,
    setPaginationCurrentPage,
  } = usePagination();

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
    } finally {
    }
  };

  const fetchAllItems = async (queryParams) => {
    try {
      const { list, totalCount } = await getAllItems(queryParams);
      setAllItems(list);
      setTotalCount(totalCount);
    } catch (error) {
    } finally {
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
    onCloseDropdown();
  };

  const onCloseDropdown = () => {
    setShowDropdown(false);
  };

  const onKeywordChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const onClickSearch = async () => {
    setPaginationCurrentPage(1);
    setKeyword(searchValue);
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

  // 상품 등록페이지로 이동
  const handleOnClickRegister = () => {
    navigate("/additem");
  };

  // 상품 상세페이지로 이동
  const onClickListItem = (id) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    fetchFavoriteItems({
      page: 1,
      pageSize: bestPageSize,
      orderBy: "favorite",
    });
  }, [deviceType, bestPageSize]);

  useEffect(() => {
    fetchAllItems({
      page: paginationCurrentPage,
      pageSize: allPageSize,
      orderBy: orderBy.value,
      keyword,
    });
  }, [deviceType, orderBy.value, paginationCurrentPage, allPageSize, keyword]);

  useEffect(() => {
    const handleResize = () => {
      const newDeviceType = calcBreakPoint(window.innerWidth);
      setDeviceType(newDeviceType);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <li key={index} onClick={() => onClickListItem(item.id)}>
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
                value={searchValue}
                onInput={onKeywordChange}
                onKeyDown={onKeyDown}
                onClick={onClickSearch}
                className="items__container__search__input"
              />
              <Button
                className="items__container__registerBtn"
                type="register"
                onClick={handleOnClickRegister}
              >
                상품 등록하기
              </Button>
              <SortDropdown
                className="items__container__dropdown"
                onClickDropdown={onClickDropdown}
                onClickDropdownItem={onClickDropdownItem}
                onCloseDropdown={onCloseDropdown}
                dropdownList={dropdownList}
                showDropdown={showDropdown}
                value={orderBy}
              />
            </div>
            <ul className="items__container__all__list">
              {allItems?.map((item, index) => (
                <li key={index} onClick={() => onClickListItem(item.id)}>
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
};

export default ItemListPage;
