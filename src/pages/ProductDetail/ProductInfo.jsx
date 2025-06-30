import { useEffect, useState } from 'react';
import heartIcon from '@assets/icon/ic_heart.png';
import emptyImg from '@assets/images/loadFailImg.png';
import KebabMenu from '@components/KebabMenu';
import UserProfileCard from '@components/userProfileCard';
import { getProductDetail } from '@service/api.js';
import styles from './styles/ProductInfo.module.css';

function ProductInfo({ productId }) {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    async function getFetch() {
      try {
        const productInfo = await getProductDetail(productId);
        setProductDetail(productInfo);
      } catch (err) {
        console.log('상품 정보 불러오기 실패', err);
      }
    }
    getFetch();
  }, [productId]);

  function onSelect(selector) {
    //프로덕트인포 컴포넌트에서 케밥에 내려줄 함수
    if (selector === '수정하기') alert('준비 중인 기능입니다(게시글 수정)');
    else if (selector === '삭제하기')
      alert('준비 중인 기능입니다(게시글 삭제)');
  }

  return (
    <div className={styles.productInfo}>
      <img
        src={productDetail.images}
        onError={(e) => (e.currentTarget.src = emptyImg)}
        alt="상품이미지"
      />
      <section className={styles.productText}>
        <section className={styles.title}>
          <h2>{productDetail.name}</h2>
          <div>{productDetail.price?.toLocaleString('ko-KR')}원</div>
        </section>
        <KebabMenu onSelect={onSelect} />
        <section className={styles.description}>
          <h3>상품 소개</h3>
          <p>{productDetail.description}</p>
        </section>
        <section className={styles.tags}>
          <h3>상품태그</h3>
          <ul>
            {productDetail.tags?.map((tag, i) => (
              <li key={`tag-${i}`}>#{tag}</li>
            ))}
          </ul>
        </section>
        <div className={styles.userInfo}>
          <UserProfileCard
            authority={'post'}
            name={productDetail.ownerNickname}
            time={formatDate(productDetail.updatedAt)}
          />
          <div className={styles.buttonContainer}>
            <button onClick={() => alert('준비 중인 기능입니다(좋아요 수정)')}>
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

function formatDate(time) {
  if (!time) return;

  return time.slice(0, 10).replaceAll('-', '. ');
}
