import './Items.css';
import { getItems } from '../../utils/api';
import { useEffect, useState } from 'react';
import { formatPriceKRW } from '../../utils/formatPrice';
import { useNavigate } from 'react-router';
import Header from '../../components/Header';
import { usePageSizeByBreakPoint } from '../../hooks/usePageSizeByBreakPoint';
import { usePaginationByOffset } from '../../hooks/usePaginationByOffset';

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

const Items = () => {
  const { pageSizeList } = usePageSizeByBreakPoint();
  const [offset, setOffset] = useState(1);
  const [totalDataCount, setTotalDataCount] = useState(1);

  const [order, setOrder] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');

  const [bestItemList, setBestItemList] = useState([]);
  const [currentItemList, setCurrentItemList] = useState([]);

  const { totalPagesCount, currentPageNumber, visiblePageNumbers } =
    usePaginationByOffset(offset, pageSizeList.best, totalDataCount);

  const onCreateNewItemNavigate = useNavigate();

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
    setTotalDataCount(totalCount);
  };

  const handleSearchInputChange = (e) => setSearchInputValue(e.target.value);
  const handleSearchInputEnterPress = (e) => {
    if (e.key === 'Enter') {
      setOffset(1);
      setKeyword(searchInputValue);
    }
  };

  const handleCreateNewItemClick = (e) => {
    e.preventDefault();
    onCreateNewItemNavigate('/additem');
  };

  //prettier-ignore
  const handlePageNumberClick = (e) => onPaginationButtonClick(Number(e.target.value));
  const handlePagePrev = () => onPaginationButtonClick(currentPageNumber - 1);
  const handlePageNext = () => onPaginationButtonClick(currentPageNumber + 1);
  const onPaginationButtonClick = (nextPageNumber) =>
    setOffset((nextPageNumber - 1) * pageSizeList.current + 1);

  const prevPageEnable = currentPageNumber > 1;
  const nextPageEnable = currentPageNumber < totalPagesCount;

  useEffect(() => {
    if (!pageSizeList.best) return;
    (async () => {
      await loadBestItemList({
        offset: 1,
        pageSize: pageSizeList.best,
        orderBy: 'favorite',
        keyword: '',
      });
    })();
  }, [pageSizeList]);

  useEffect(() => {
    if (!pageSizeList.current) return;
    (async () => {
      await loadCurrentItemList({
        offset: offset,
        pageSize: pageSizeList.current,
        orderBy: order,
        keyword: keyword,
      });
    })();
  }, [pageSizeList, order, offset, keyword]);

  return (
    <>
      <Header currentSection={'items'} />
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
            src={
              prevPageEnable
                ? './images/ic_prevPageClick_active.png'
                : './images/ic_prevPageClick_inactive.png'
            }
            width={16}
          />
        </button>
        {visiblePageNumbers.map((pageIndex) => {
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
            src={
              nextPageEnable
                ? './images/ic_nextPageClick_active.png'
                : './images/ic_nextPageClick_inactive.png'
            }
            width={16}
          />
        </button>
      </nav>
    </>
  );
};

export default Items;
