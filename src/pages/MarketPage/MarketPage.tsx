import React from 'react';
import style from './MarketPage.module.scss';
import BestProducts from './BestProduct';
import AllProducts from './AllProducts';
function MarketPage() {
  return (
    <div className={style['market-page']}>
      <BestProducts />
      <AllProducts />
    </div>
  );
}
export default MarketPage;
