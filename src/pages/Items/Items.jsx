import { Link } from 'react-router-dom';
import './Header.css';
import './Items.css';
import { getItems } from '../../apis/api';
import { useEffect, useState } from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';
import { formatPriceKRW } from '../../modules/formatPrice';
import { useNavigate } from 'react-router';

const ItemComponent = ({
  id,
  imageUrl,
  imageDefaultUrl,
  name,
  price,
  favoriteCount,
}) => {
  return (
    <div className={'item-container'}>
      <img
        className={'item-image'}
        src={imageUrl}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = imageDefaultUrl;
        }}
        alt={name}
        width={282}
      />
      <div className={'item-context'}>
        <h3 className={'item-title'}>{name}</h3>
        <p className={'item-price'}>{formatPriceKRW(price)}</p>
        <div className={'item-favorite-container'}>
          <img
            className={'item-favorite-image inactive'}
            src={'./images/img_favorite_inactive.png'}
            width={13.4}
          />
          <p className={'item-favorite-count'}>{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

const pageSizeByDevice = {
  best: (deviceType) => {
    return deviceType === 'lg'
      ? 4
      : deviceType === 'md'
      ? 2
      : deviceType === 'sm'
      ? 1
      : 0;
  },
  current: (deviceType) => {
    return deviceType === 'lg'
      ? 10
      : deviceType === 'md'
      ? 6
      : deviceType === 'sm'
      ? 4
      : 0;
  },
};

const getCurrentPageState = (
  offset,
  pageSize,
  totalDataCount,
  maxVisiblePageCount = 5
) => {
  //총페이지가 307일때
  //pagesize가 10이고 offset이 13이면?
  //현재페이지: 2, pagenumbers = 1,2,3,4,5
  const currentPageNumber = Math.ceil(offset / pageSize);
  const paginationStartPage = Math.floor((currentPageNumber - 1) / 5) * 5 + 1;
  const lastPageNumber = Math.ceil(totalDataCount / pageSize);
  const remainingPageCount = lastPageNumber - paginationStartPage + 1;
  const visiblePageCount =
    remainingPageCount >= maxVisiblePageCount
      ? maxVisiblePageCount
      : remainingPageCount;
  const visiblePageNumbers = new Array(visiblePageCount)
    .fill(0)
    .map((v, i) => v + i + paginationStartPage);
  return { currentPageNumber, visiblePageNumbers };
};

const Items = () => {
  const { deviceType } = useDeviceType();

  const [offset, setOffset] = useState(1);
  const [order, setOrder] = useState('recent');
  const [keyword, setKeyword] = useState('');

  const [bestItemList, setBestItemList] = useState([]);
  const [currentItemList, setCurrentItemList] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [lastPageIndex, setLastPageIndex] = useState(1);

  const [searchInputValue, setSearchInputValue] = useState('');

  const onCreateNewItemNavigate = useNavigate();

  const prevPageEnable = currentPageNumber > 1;
  const nextPageEnable = currentPageNumber < lastPageIndex;

  const handleSearchOrderChange = (e) => {
    setOffset(1);
    setOrder(e.target.value);
  };

  const loadBestItemList = async (options) => {
    const result = await getItems(options);
    if (!result) return;
    const { list } = result;
    setBestItemList(list);
  };

  const loadCurrentItemList = async (option) => {
    const result = await getItems(option);
    if (!result) return;
    const { list, totalCount } = result;
    setCurrentItemList(list);
    setLastPageIndex(Math.ceil(totalCount / option.pageSize));
    const currentPageState = getCurrentPageState(
      option.offset,
      option.pageSize,
      totalCount
    );
    setPageNumbers((prev) => {
      const nextPageNumbers = currentPageState.visiblePageNumbers;
      return JSON.stringify(prev) === JSON.stringify(nextPageNumbers)
        ? prev
        : nextPageNumbers;
    });
    setCurrentPageNumber(currentPageState.currentPageNumber);
  };

  const handleSearchInputChange = (e) => setSearchInputValue(e.target.value);
  const handleSearchInputEnterPress = (e) => {
    if (e.key === 'Enter') {
      setOffset(1);
      setKeyword(searchInputValue);
    }
  };

  //prettier-ignore
  const handlePageNumberClick = (e) => onPaginationButtonClick(Number(e.target.value));
  const handlePagePrev = () => onPaginationButtonClick(currentPageNumber - 1);
  const handlePageNext = () => onPaginationButtonClick(currentPageNumber + 1);
  const onPaginationButtonClick = (nextPageNumber) =>
    setOffset((nextPageNumber - 1) * pageSizeByDevice.current(deviceType) + 1);

  const handleCreateNewItemClick = (e) => {
    e.preventDefault();
    onCreateNewItemNavigate('/additem');
  };

  useEffect(() => {
    (async () => {
      await loadBestItemList({
        offset: 1,
        pageSize: pageSizeByDevice.best(deviceType),
        orderBy: 'favorite',
        keyword: '',
      });
    })();
  }, [deviceType]);

  useEffect(() => {
    (async () => {
      await loadCurrentItemList({
        offset: offset,
        pageSize: pageSizeByDevice.current(deviceType),
        orderBy: order,
        keyword: keyword,
      });
    })();
  }, [deviceType, order, offset, keyword]);

  return (
    <>
      <header className={'page-header'}>
        <nav className={'nav-container'} aria-label="메인 페이지로 이동">
          <Link to="/" className={'nav-logo-container'}>
            <img
              className={'nav-logo-img'}
              src={'./images/Img_logo.png'}
              width={40}
              alt={'판다마켓 로고'}
              title={'판다마켓 로고'}
            />
            <span className={'nav-logo-text'}>판다마켓</span>
          </Link>
          <div className={'nav-link-container'}>
            <Link to="/items" className={'nav-link'}>
              자유게시판
            </Link>
            <Link to="/items" className={'nav-link'}>
              중고마켓
            </Link>
          </div>
          <img
            className={'nav-profile'}
            src={'./images/icon_profile.png'}
            width={40}
          />
        </nav>
      </header>
      <main className={'items-page-main'}>
        <section id={'cards-best'} className={'cards-section'}>
          <div className={'section-header-container'}>
            <h2 className={'section-title'}>베스트 상품</h2>
          </div>
          <div className={'items-container'}>
            {bestItemList.map((item) => {
              return (
                <ItemComponent
                  key={item.id}
                  id={item.id}
                  imageUrl={item.images?.[0]}
                  name={item.name}
                  price={item.price}
                  favoriteCount={item.favoriteCount}
                />
              );
            })}
          </div>
        </section>

        <section id={'cards-all'} className={'cards-section'}>
          <div className={'section-header-container'}>
            <h2 className={'section-title'}>전체 상품</h2>

            <div className={'search-input-container'}>
              <img
                className={'search-input-icon'}
                src={'./images/ic_search.png'}
                width={24}
              />
              <input
                className={'search-input'}
                placeholder="검색할 상품을 입력해주세요"
                value={searchInputValue}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchInputEnterPress}
              ></input>
            </div>

            <button
              className={'search-submit button-style'}
              onClick={handleCreateNewItemClick}
            >
              상품 등록하기
            </button>
            <select
              value={order}
              className={'search-select'}
              onChange={handleSearchOrderChange}
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>

          <div className={'items-container'}>
            {currentItemList.map((item) => {
              return (
                <ItemComponent
                  key={item.id}
                  id={item.id}
                  imageUrl={item.images}
                  imageDefaultUrl={'./images/img_items_default_md.png'}
                  name={item.name}
                  price={item.price}
                  favoriteCount={item.favoriteCount}
                />
              );
            })}
          </div>
        </section>
      </main>
      <nav className={'items-pagination'}>
        <button
          className={'pagination-button prev-page'}
          onClick={handlePagePrev}
          disabled={!prevPageEnable}
        >
          <img
            className={'pagination-button-image'}
            src={'./images/ic_prevPageClick_active.png'}
            width={16}
          />
        </button>
        {pageNumbers.map((pageIndex) => {
          const ButtonClassName =
            currentPageNumber === pageIndex ? 'selected' : '';
          return (
            <button
              key={pageIndex}
              value={pageIndex}
              className={`pagination-button ${ButtonClassName}`}
              onClick={handlePageNumberClick}
            >
              {pageIndex}
            </button>
          );
        })}
        <button
          className={'pagination-button next-page'}
          onClick={handlePageNext}
          disabled={!nextPageEnable}
        >
          <img
            className={'pagination-button-image'}
            src={'./images/ic_nextPageClick_active.png'}
            width={16}
          />
        </button>
      </nav>
    </>
  );
};

export default Items;
