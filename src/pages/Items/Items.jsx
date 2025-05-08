import { Link } from 'react-router-dom';
import './Header.css';
import './Items.css';
import { getItems } from '../../apis/api';
import { useEffect, useState } from 'react';
import debounce from './debounce';

const ItemComponent = ({ id, imageUrl, name, price, favoriteCount }) => {
  return (
    <div className={['item-container']}>
      <img className={['item-image']} src={imageUrl} width={282} />
      <div className={['item-context']}>
        <h3 className={['item-title']}>{name}</h3>
        <p className={['item-price']}>{price}</p>
        <div className={['item-favorite-container']}>
          <img
            className={['item-favorite-image inactive']}
            src={'./images/img_favorite_inactive.png'}
            width={13.4}
          />
          <p className={['item-favorite-count']}>{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

const Items = () => {
  const [bestItems, setBestItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [pageIndexList, setPageIndexList] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [selectedPageIndex, setSelectedPageIndex] = useState(1);
  const [order, setOrder] = useState('recent');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pageSizes, setPageSizes] = useState({ bestItems: 1, allItems: 4 });

  useEffect(() => {
    if (windowWidth >= 1200) {
      setPageSizes({ bestItems: 4, allItems: 10 });
    } else if (windowWidth >= 768 && windowWidth < 1200) {
      setPageSizes({ bestItems: 2, allItems: 6 });
    } else if (windowWidth < 768) {
      setPageSizes({ bestItems: 1, allItems: 4 });
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const debounceResize = debounce(handleResize, 200);
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const loadBestItems = async (options) => {
    const results = await getItems(options);
    if (!results) return;
    const { list } = results;
    setBestItems(list);
  };

  const loadAllItems = async (options) => {
    const results = await getItems(options);
    if (!results) return;
    const { totalCount, list } = results;
    setAllItems(list);
    setPagesCount(Math.ceil(totalCount / pageSizes.allItems));
  };

  const handleSearchOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handlePaginationButtonClick = (e) => {
    setSelectedPageIndex(Number(e.target.value));
  };

  const handlePaginationNext = () => {
    setSelectedPageIndex((prev) => prev + 1);
  };

  const handlePaginationPrev = () => {
    setSelectedPageIndex((prev) => prev - 1);
  };

  useEffect(() => {
    loadBestItems({
      page: 1,
      pageSize: 4,
      orderBy: 'favorite',
    });
  }, [pageSizes]);

  useEffect(() => {
    loadAllItems({
      page: selectedPageIndex,
      pageSize: 10,
      orderBy: order,
    });
    const pageGroupStartIndex = Math.floor((selectedPageIndex - 1) / 5) * 5 + 1;
    const pageGroupSize =
      pagesCount - pageGroupStartIndex + 1 < 5
        ? pagesCount - pageGroupStartIndex + 1
        : 5;
    setPageIndexList(
      new Array(pageGroupSize).fill(pageGroupStartIndex).map((v, i) => v + i)
    );
  }, [selectedPageIndex, order, pagesCount, pageSizes]);

  const prevItemExist = selectedPageIndex > 1;
  const nextItemExist = selectedPageIndex < pagesCount;

  //const bestItems = mockItems.slice(0, 4);
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
