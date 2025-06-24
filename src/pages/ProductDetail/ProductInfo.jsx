import { useEffect, useState } from 'react';
import heartIcon from '@assets/icon/ic_heart.png';
import UserProfileCard from '@components/userProfileCard';
import { getProductDetail } from '@service/api.js';
import styles from './styles/ProductInfo.module.css';

function formatDate(time) {
  if (!time) return;

  return time.slice(0, 10).replaceAll('-', '. ');
}

function ProductInfo({ productId }) {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    async function getFetch() {
      const productInfo = await getProductDetail(productId);
      setProductDetail(productInfo);
    }
    getFetch();
  }, []);

  return (
    <div className={styles.productInfo}>
      <img src={productDetail.images} alt="상품이미지" />
      <section className={styles.productText}>
        <article className={styles.title}>
          <h2>{productDetail.name}</h2>
          <div>{productDetail.price?.toLocaleString('ko-KR')}원</div>
        </article>
        <article className={styles.description}>
          <h3>상품 소개</h3>
          <p>{productDetail.description}</p>
        </article>
        <article className={styles.tags}>
          <h3>상품태그</h3>
          <ul>
            {productDetail.tags?.map((tag, i) => (
              <li key={`tag-${i}`}>#{tag}</li>
            ))}
          </ul>
        </article>
        <div className={styles.userInfo}>
          <UserProfileCard
            authority={'post'}
            name={productDetail.ownerNickname}
            time={formatDate(productDetail.updatedAt)}
          />
          <div className={styles.buttonContainer}>
            <button>
              <img src={heartIcon} alt="하트 아이콘" />
              {productDetail.favoriteCount}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductInfo;
