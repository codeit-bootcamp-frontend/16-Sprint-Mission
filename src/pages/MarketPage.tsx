import React from 'react';
import style from './MarketPage.module.scss';
function MarketPage() {
  return (
    <div className={style['market-page']}>
      <div className={style['best-products']}>
        <h2>베스트 상품</h2>
        <div className={style['best-products__list']}>
          {/* 베스트 상품 리스트를 여기에 추가 */}
        </div>
      </div>
      <div className={style['all-products']}>
        <div className={style['all-products__header']}>
          <h2>전체 상품</h2>
          <div className={style['all-products-filter-container']}>
            {/* 검색창 및 필터 */}
          </div>
        </div>
        {/* 전체 상품 리스트 */}
        <div className={style['all-products-list']}></div>

        {/* 페이지네이션 컴포넌트 */}
        <PageNations />
      </div>
    </div>
  );
}
export default MarketPage;
