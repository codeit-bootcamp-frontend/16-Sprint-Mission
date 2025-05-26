//src/component/Cards/ProductCard.tsx
import { useState } from 'react';
import { Product } from '@/api/products';
import style from './ProductCard.module.scss';
import Heart from '@/assets/icon/heart.png';
import HeartFill from '@/assets/icon/heart-fill.png';

/**
 * 상품 카드 컴포넌트
 * @param {Product} product - 상품 정보
 * @returns {JSX.Element} 상품 카드 컴포넌트
 */
function ProductCard({ product }: { product: Product }) {
  const { name, price, images, favoriteCount } = product;
  const [isLike, setIsLike] = useState(false);

  return (
    <div className={style['product-card']}>
      <img
        src={images[0]}
        alt={name}
        className={style['product-card__image']}
      />
      <div className={style['product-card__info']}>
        <h3 className={style['product-card__name']}>{name}</h3>
        <p className={style['product-card__price']}>
          ₩{price.toLocaleString()}
        </p>

        <div className={style['product-card__like']}>
          <img
            src={isLike ? HeartFill : Heart}
            alt="좋아요 아이콘"
            className={style['product-card__like-icon']}
            onClick={() => setIsLike(!isLike)}
          />
          {/* 좋아요 여부에 따라 좋아요 수 증가 */}
          <span className={style['product-card__like-count']}>
            {isLike ? favoriteCount + 1 : favoriteCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
