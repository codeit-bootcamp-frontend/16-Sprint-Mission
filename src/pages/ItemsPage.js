import Card from "../components/Card";
import "../css/pages/ItemsPage.css";
import { useState, useEffect } from "react";
import { getFavoriteItems, getAllItems } from "../api/Items.js";
import { Link } from "react-router-dom";
import searchIcon from "../img/search.svg";
import sortIcon from "../img/sort.svg";
import arrowDownIcon from "../img/arrow_down.svg";
import arrowLeftButtonActive from "../img/arrow_button_left_active.svg";
import arrowLeftButtonInactive from "../img/arrow_button_left_inactive.svg";
import arrowRightButtonActive from "../img/arrow_button_right_active.svg";
import arrowRightButtonInactive from "../img/arrow_button_right_inactive.svg";

function ItemsPage() {
  const INITIAL_BEST_ITEM_PARAMS = {
    page: 1,
    pageSize: 4,
    orderBy: "favorite",
    keyword: "",
  };
  const INITIAL_ALL_ITEM_PARAMS = {
    page: 1,
    pageSize: 10,
    orderBy: "recent",
    keyword: "",
  };
  const [orderBy, setOrderBy] = useState({
    name: "최신순",
    value: "recent",
  });

  const [keyword, setKeyword] = useState("");

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

  const [totalCount, setTotalCount] = useState(0);

  const [pageSize, setPageSize] = useState(10);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownList = [
    { value: "recent", name: "최신순" },
    { value: "favorite", name: "좋아요순" },
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

  const onClickDropdownItem = (value) => {
    setOrderBy(value);
  };

  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const onClickSearch = () => {
    fetchAllItems({
      page: 1,
      pageSize: 10,
      orderBy: orderBy.value,
      keyword,
    });
  };

  useEffect(() => {
    fetchFavoriteItems({
      page: 1,
      pageSize: 4,
      orderBy: "favorite",
    });
    fetchAllItems({
      page: 1,
      pageSize: 10,
      orderBy: orderBy.value,
      keyword,
    });
  }, [orderBy]);

  return (
    <div>
      {/* 메인 영역*/}
      <main className="items__container">
        <div className="items__container__inner">
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
          <section>
            <div className="items__container__all__header">
              <div className="items__container__title">전체 상품</div>

              <div className="items__container__search__bar">
                <input
                  className="items__container__search__input input-search"
                  placeholder="검색할 상품을 입력해주세요"
                  value={keyword}
                  onInput={onKeywordChange}
                  onKeyDown={onClickSearch}
                />
                <img
                  src={searchIcon}
                  className="items__container__search__bar__icon"
                  alt="검색 아이콘"
                  onClick={onClickSearch}
                />
              </div>

              <div className="items__container__register">
                <button className="btn btn-register">
                  <Link to="addItem">상품 등록하기</Link>
                </button>
              </div>

              <div
                className="items__container__dropdown"
                onClick={onClickDropdown}
              >
                <div className="items__container__dropdown__button dropdown">
                  <span className="items__container__dropdown__text">
                    {orderBy.name}
                  </span>
                  <img
                    src={arrowDownIcon}
                    alt="드롭다운 아이콘"
                    className="items__container__dropdown__button__icon"
                  />
                  <img
                    src={sortIcon}
                    alt="분류아이콘"
                    className="items__container__dropdown__sort__icon"
                  />
                </div>
                {showDropdown && (
                  <ul className="items__container__dropdown__list">
                    {dropdownList?.map((item) => (
                      <li
                        key={item.value}
                        onClick={() => onClickDropdownItem(item)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <ul className="items__container__all__list">
              {allItems?.map((item, index) => (
                <li key={index}>
                  <Card data={item} />
                </li>
              ))}
            </ul>

            <div className="items__container__pagination">
              <img src={arrowRightButtonActive} alt="페이지 네이션 이전 버튼" />
              <div className="items__container__pagination__button">1</div>
              <img src={arrowLeftButtonActive} alt="페이지 네이션 다음 버튼" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ItemsPage;
