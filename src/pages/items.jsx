import { useEffect, useState } from "react";
import axios from "axios";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Items() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [sortType, setSortType] = useState("updatedAt"); // "updatedAt" or "favoriteCount"
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const width = useWindowWidth();

  let bestCount;
  if (width >= 1280) {
    bestCount = 4;
  } else if (width >= 768) {
    bestCount = 2;
  } else {
    bestCount = 1;
  }

  let itemsPerPage;
  if (width >= 1280) {
    itemsPerPage = 10;
  } else if (width >= 768) {
    itemsPerPage = 6;
  } else {
    itemsPerPage = 4;
  }

  useEffect(() => {
    axios.get("https://panda-market-api.vercel.app/products").then((res) => {
      const list = res.data.list;
      console.log(res.data.list);
      // 좋아요순 정렬 → 베스트 상품용
      const best = [...list]
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, 4); // 데스크탑 기준, JS로 개수 조절할 수도 있음
      setBestItems(best);

      // 정렬 기준 따라 전체 상품용
      const sorted = sortItems(list, sortType);
      setItems(sorted);
    });
  }, [sortType]);

  const sortItems = (items, type) => {
    return [...items].sort((a, b) => {
      if (type === "updatedAt") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (type === "favoriteCount") {
        return b.favoriteCount - a.favoriteCount;
      }
      return 0;
    });
  };

  const displayedBestItems = bestItems.slice(0, bestCount);
  // const bestItems = items.slice(0, 1); // 베스트 1개만 표시
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="wrapper">
      <h2>베스트 상품</h2>
      <div className="item-grid-best">
        {displayedBestItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      <div className="controls">
        <h2>전체 상품</h2>

        <a href="/additem" className="button primary-button">
          상품 등록하기
        </a>

        <div className="search-box">
          <img src="/src/assets/ic-search.svg" alt="검색 아이콘" />
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="sort-dropdown">
          <button onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}>
            <img
              src="/src/assets/btn-sort.svg"
              alt="정렬 아이콘"
              className="sort-button"
            />
            <div className="sort-button-text">
              최신순
              <img src="src/assets/ic-arrow-down.svg" />
            </div>
          </button>
          {isSortMenuOpen && (
            <ul className="sort-menu">
              <li onClick={() => setSortType("updatedAt")}>최신순</li>
              <li onClick={() => setSortType("favoriteCount")}>좋아요순</li>
            </ul>
          )}
        </div>
      </div>

      <div className="item-grid-general">
        {currentItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      <Pagination
        total={items.length}
        perPage={itemsPerPage}
        current={currentPage}
        setCurrent={setCurrentPage}
      />
    </div>
  );
}

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.images[0]} alt={item.name} />
      <div className="item-info">
        <p className="name">{item.name}</p>
        <p className="price">{item.price.toLocaleString()}원</p>
        <p className="like">
          <img src="/src/assets/ic-heart-off.svg" alt="하트 아이콘" />{" "}
          {item.favoriteCount}
        </p>
      </div>
    </div>
  );
}

function Pagination({ total, perPage, current, setCurrent }) {
  const pages = Math.ceil(total / perPage);

  const isFirst = current === 1;
  const isLast = current === pages;

  const handlePrev = () => {
    if (!isFirst) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (!isLast) setCurrent(current + 1);
  };

  return (
    <div className="pagination">
      {/* 왼쪽 화살표 */}
      <button
        className="page-button arrow"
        onClick={handlePrev}
        disabled={isFirst}
      >
        <img
          src={
            isFirst
              ? "/src/assets/btn-right-inactive.svg"
              : "/src/assets/btn-right-active.svg"
          }
          alt="이전 페이지"
        />
      </button>

      {/* 페이지 번호 */}
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          className={`page-button ${current === i + 1 ? "active" : ""}`}
          onClick={() => setCurrent(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {/* 오른쪽 화살표 */}
      <button
        className="page-button arrow"
        onClick={handleNext}
        disabled={isLast}
      >
        <img
          src={
            isLast
              ? "/src/assets/btn-left-inactive.svg"
              : "/src/assets/btn-left-active.svg"
          }
          alt="다음 페이지"
        />
      </button>
    </div>
  );
}
