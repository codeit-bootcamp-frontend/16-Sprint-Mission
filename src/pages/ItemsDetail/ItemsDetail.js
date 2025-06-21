import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByProductId } from "../../api/products";
import profileImage from "../../assets/images/profile-image.png";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./ItemsDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemsDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const load = async () => {
      try {
        const res = await getProductByProductId({ productId });
        setProduct(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    load();
    console.log(product);
  }, [productId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>상품을 불러오는 중 오류가 발생했습니다.</p>;

  return (
    <section>
      <h1>아이템 디테일 페이지 ID:{productId}</h1>
      <div className={styles.productInfoContainer}>
        <img
          className={styles.productImage}
          src={product.images[0]}
          alt={product.name}
        />
        <div className={styles.productInfo}>
          <h4>{product.name}</h4>
          <strong>{product.price.toLocaleString()}원</strong>
        </div>
        <hr className={styles.divider} />
        <div className={styles.productMeta}>
          <div className={styles.productMeta1}>
            <h4>상품 소개</h4>
            <p>{product.description}</p>
          </div>
          <div className={styles.productMeta2}>
            <h4>상품 태그</h4>
            <div className={styles.tags}>
              {product.tags.map((value) => {
                return <p key={value}>#{value}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfo}>
          <img
            src={profileImage}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <div className={styles.profileInfo}>
            <p>{product.ownerNickname}</p>
            <p>{product.updatedAt.slice(0, 10).replace(/-/g, "/")}</p>
          </div>
        </div>
        <div className={styles.favourite}>
          <FontAwesomeIcon icon={farHeart} />
          <p>{product.favoriteCount}</p>
        </div>
      </div>
      <hr className={styles.divider2} />
    </section>
  );
}
