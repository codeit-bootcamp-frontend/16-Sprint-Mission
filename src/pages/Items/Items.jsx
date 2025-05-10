import { Link } from 'react-router-dom';
import './Header.css';
import './Items.css';
import { getItems } from '../../apis/api';
import { useEffect, useState } from 'react';
import favoriteItems from './mockItems.json';
import currentItems from './mockItems.json';

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

const getDeviceType = (width) => {
  if (width >= 1200) return 'lg';
  else if (width >= 768) return 'md';
  else return 'sm';
};

const Items = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //prettier-ignore
  const [deviceType, setDeviceType] = useState(getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setDeviceType(getDeviceType(windowWidth));
  }, [windowWidth]);

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
            {favoriteItems.map((item) => {
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
              // value={order}
              className={'search-select'}
              // onChange={handleSearchOrderChange}
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>

          <div className={'items-container'}>
            {currentItems.map((item) => {
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
          // onClick={handlePaginationPrev}
          // disabled={!prevItemExist}
        >
          <img
            className={'pagination-button-image'}
            src={'./images/ic_prevPageClick_active.png'}
            width={16}
          />
        </button>
        {/* {pageIndexList.map((pageIndex) => {
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
        </button> */}
      </nav>
    </>
  );
};

export default Items;
