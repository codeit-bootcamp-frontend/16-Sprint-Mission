import { Link } from 'react-router-dom';
import './Header.css';
import './Items.css';
import { getItems } from '../../apis/api';
import { useEffect, useState } from 'react';

const ItemComponent = ({ id, imageUrl, name, price, favoriteCount }) => {
  return (
    <div className={'item-container'}>
      <img className={'item-image'} src={imageUrl} width={282} />
      <div className={'item-context'}>
        <h3 className={'item-title'}>{name}</h3>
        <p className={'item-price'}>{price}</p>
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

const updateDeviceType = (width) => {
  if (width >= 1200) return 'lg';
  else if (width >= 768) return 'md';
  else return 'sm';
};

const getDataSizeBestItems = (type) => {
  switch (type) {
    case 'lg':
      return 4;
    case 'md':
      return 2;
    case 'sm':
      return 1;
  }
};

const getDataSizeAllItems = (type) => {
  switch (type) {
    case 'lg':
      return 10;
    case 'md':
      return 6;
    case 'sm':
      return 4;
  }
};

const Items = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bestItems, setBestItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [pageIndexList, setPageIndexList] = useState([1]);
  const [pagesCount, setPagesCount] = useState(1);
  const [selectedPageIndex, setSelectedPageIndex] = useState(1);
  const [order, setOrder] = useState('recent');
  const [deviceType, setDeviceType] = useState(
    updateDeviceType(window.innerWidth)
  );

  const loadBestItems = async (options) => {
    const results = await getItems(options);
    if (!results) return;
    const { list } = results;
    setBestItems((prev) => (list.every((v, i) => v === prev[i]) ? prev : list));
  };

  const loadAllItems = async (options) => {
    const results = await getItems(options);
    if (!results) return;
    const { totalCount, list } = results;
    setAllItems((prev) => (list.every((v, i) => v === prev[i]) ? prev : list));
    setPagesCount(Math.ceil(totalCount / getDataSizeAllItems(deviceType)));
  };

  const handleSearchOrderChange = (e) => {
    setOrder(e.target.value);
    setSelectedPageIndex(1);
  };

  //prettier-ignore
  const handlePaginationButtonClick = (e) => setSelectedPageIndex(Number(e.target.value));
  const handlePaginationNext = () => setSelectedPageIndex((prev) => prev + 1);
  const handlePaginationPrev = () => setSelectedPageIndex((prev) => prev - 1);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setDeviceType(updateDeviceType(windowWidth));
  }, [windowWidth]);

  useEffect(() => {
    loadBestItems({
      page: 1,
      pageSize: getDataSizeBestItems(deviceType),
      orderBy: 'favorite',
    });
  }, [deviceType]);

  useEffect(() => {
    loadAllItems({
      page: selectedPageIndex,
      pageSize: getDataSizeAllItems(deviceType),
      orderBy: order,
    });
  }, [deviceType, selectedPageIndex, order]);

  useEffect(() => {
    const pageGroupStartIndex = Math.floor((selectedPageIndex - 1) / 5) * 5 + 1;
    const pageGroupSize =
      pagesCount - pageGroupStartIndex + 1 < 5
        ? pagesCount - pageGroupStartIndex + 1
        : 5;
    //prettier-ignore
    const newPageList = new Array(pageGroupSize).fill(pageGroupStartIndex).map((v, i) => v + i);
    setPageIndexList((prev) =>
      JSON.stringify(prev) === JSON.stringify(newPageList) ? prev : newPageList
    );
  }, [pagesCount, selectedPageIndex]);

  const prevItemExist = selectedPageIndex > 1;
  const nextItemExist = selectedPageIndex < pagesCount;

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
            {bestItems.map((item) => {
              return (
                <ItemComponent
                  key={item.id}
                  id={item.id}
                  imageUrl={item.images}
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
              ></input>
            </div>

            <button className={'search-submit button-style'}>
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
            {allItems.map((item) => {
              return (
                <ItemComponent
                  key={item.id}
                  id={item.id}
                  imageUrl={item.images}
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
          onClick={handlePaginationPrev}
          disabled={!prevItemExist}
        >
          <img
            className={'pagination-button-image'}
            src={'./images/ic_prevPageClick_active.png'}
            width={16}
          />
        </button>
        {pageIndexList.map((pageIndex) => {
          const ButtonClassName =
            selectedPageIndex === pageIndex ? 'selected' : '';
          return (
            <button
              key={pageIndex}
              value={pageIndex}
              className={`pagination-button ${ButtonClassName}`}
              onClick={handlePaginationButtonClick}
            >
              {pageIndex}
            </button>
          );
        })}
        <button
          className={'pagination-button next-page'}
          onClick={handlePaginationNext}
          disabled={!nextItemExist}
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
