import React from 'react';
import style from './BestProducts.module.scss';

// 베스트 상품 컴포넌트
function BestProducts() {
  return (
    <div className={style['best-products']}>
      <h2 className={style['best-products__title']}>베스트 상품</h2>
      <div className={style['best-products__list']}>
        {/* 베스트 상품 리스트를 여기에 추가 */}
      </div>
    </div>
  );
}

export default BestProducts;
