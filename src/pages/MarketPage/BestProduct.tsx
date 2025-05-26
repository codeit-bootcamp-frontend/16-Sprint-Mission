import React, { use, useEffect } from 'react';
import style from './BestProducts.module.scss';
import getMediaCount from '@/utils/getMediaCount';
import useApi from '@/hooks/useApi';
import { fetchProducts, Product } from '@/api/products';

// 베스트 상품 컴포넌트
function BestProducts() {
  // 미디어 쿼리에서 베스트 상품의 개수를 가져옵니다.
  const { bestProductsCount } = getMediaCount();
  const { data, loading, error } = useApi(
    () => fetchProducts(1, bestProductsCount, 'favorite', ''),
    [bestProductsCount]
  );
  const products: Product[] = data.list;
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
