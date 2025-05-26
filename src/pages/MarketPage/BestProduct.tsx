import React, { useEffect } from 'react';
import style from './BestProducts.module.scss';
import getMediaCount from '@/utils/getMediaCount';

// 베스트 상품 컴포넌트
function BestProducts() {
  // 미디어 쿼리에서 베스트 상품의 개수를 가져옵니다.
  const { bestProductsCount } = getMediaCount();

  // 베스트 상품 데이터를 가져오는 API 호출
  useEffect(() => {}, []);

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
