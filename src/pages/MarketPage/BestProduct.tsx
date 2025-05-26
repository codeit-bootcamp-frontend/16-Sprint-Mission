import React, { use, useEffect } from 'react';
import style from './BestProducts.module.scss';
import getMediaCount from '@/utils/getMediaCount';
import useApi from '@/hooks/useApi';
import { fetchProducts, Product } from '@/api/products';
import ProductCard from '@/components/Cards/ProductCard';
import SkeletonCard from '@/components/Cards/SkeletonCard';
// 베스트 상품 컴포넌트
function BestProducts() {
  // 미디어 쿼리에서 베스트 상품의 개수를 가져옵니다.
  const { bestProductsCount } = getMediaCount();
  // API를 호출하여 베스트 상품을 가져옵니다.
  const { data, loading, error } = useApi(
    () => fetchProducts(1, bestProductsCount, 'favorite', ''),
    [bestProductsCount]
  );

  if (error) {
    console.error('베스트 상품을 불러오는 중 오류 발생:', error);
  }
  const products: Product[] = data?.list ?? [];
  console.log('베스트 상품:', products);
  return (
    <div className={style['best-products']}>
      <h2 className={style['best-products__title']}>베스트 상품</h2>
      <div className={style['best-products__list']}>
        {loading
          ? Array.from({ length: bestProductsCount }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}

export default BestProducts;
