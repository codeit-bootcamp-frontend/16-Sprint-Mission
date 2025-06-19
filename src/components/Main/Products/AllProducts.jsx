import { useEffect, useState } from "react";
import SearchIcon from "../../../images/SearchLogo.svg";
import Heart from "../../../images/HeartLogo.svg";
import PlaceHolder from "../../../images/placeholder.png";
import "./AllProducts.css";

//단일 상품 카드 컴포넌트
const AllProductCard = ({ item }) => {
  return (
    <div className="AllProducts__Card">
      <img
        className="AllProducts__card--image"
        src={item.images}
        alt={item.description}
        onError={(e) => {
          e.target.onerror = null; // 무한 루프 방지
          e.target.src = PlaceHolder; // 기본 대체 이미지
        }}
      />
      <p>{item.description}</p>
      <p className="AllProducts__card--price">
        {item.price.toLocaleString()}원
      </p>
      <div className="AllProducts__card--likes">
        <button>
          <img src={Heart} alt="좋아요" width={16} height={16} />
        </button>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
};

//전체 상품 목록 컴포넌트
const AllProducts = ({ currentPage }) => {
  const [allItems, setAllItems] = useState([]); // 상품 목록 상태태
  const [sortType, setSortType] = useState("recent"); //recent or favorite
  const [open, setOpen] = useState(false); //드롭다운 열림 여부

  //정렬 버튼 핸들러
  const handleSortChange = (e) => {
    const selected = e.target.innerText;
    if (selected === "최신순") setSortType("recent");
    else if (selected === "좋아요순") setSortType("favorite");
    setOpen(false); //선택 후 드롭다운 닫기
  };

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=10&orderBy=${sortType}`
        );
        const data = await res.json();
        setAllItems(data.list);
      } catch (err) {
        console.error("상품 불러오기 실패:", err);
      }
    };

    fetchAllItems();
  }, [currentPage, sortType]);

  return (
    <div className="AllProducts">
      <div className="AllProducts__nav">
        <h3 className="AllProducts__title">전체 상품</h3>
        <div className="AllProducts__search">
          <img src={SearchIcon} alt="돋보기 로고" />
          <input placeholder="검색할 상품을 입력해주세요"></input>
        </div>
        <button
          className="AllProducts__register"
          onClick={() => (window.location.href = "/additem")}
        >
          상품 등록하기
        </button>
        <div className="AllProducts__sort">
          <button onClick={() => setOpen((prev) => !prev)}>
            {sortType === "recent" ? "최신순" : "좋아요순"} ▼
          </button>

          {open && (
            <div className="AllProducts__dropdown">
              <div onClick={handleSortChange}>최신순</div>
              <div onClick={handleSortChange}>좋아요순</div>
            </div>
          )}
        </div>
      </div>
      <div className="AllProducts__list">
        {allItems.map((item) => (
          <AllProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
