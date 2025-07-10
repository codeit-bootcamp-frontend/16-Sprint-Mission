import { Link, useParams } from "react-router-dom";
import { CommentList } from "./components/CommentList";
import { useProduct } from "./hooks/useProduct";
import styles from "./ItemsDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInputField from "../additem/components/TextInputField";
import profileImage from "../../assets/images/profile-image.png";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft";
import { useState } from "react";

export default function ItemsDetail() {
  const { productId } = useParams();
  const { data: product, loading, error } = useProduct(productId);
  const [inquiry, setInquiry] = useState("");
  const isValid = inquiry.trim() !== "";

  if (loading) return <p>로딩 중…</p>;
  if (error) return <p>오류: {error.message}</p>;

  return (
    <section>
      <div className={styles.productInfoContainer}>
        <img
          className={styles.productImage}
          src={product.images[0]}
          alt={product.name}
        />
        <div className={styles.productInfoWrapper}>
          <div className={styles.productInfo}>
            <h4 className={styles.pageTitle}>{product.name}</h4>
            <h5 className={styles.productPrice}>
              {product.price.toLocaleString()}원
            </h5>
          </div>
          <hr className={styles.divider} />
          <div className={styles.productMeta}>
            <div className={styles.productMeta1}>
              <h5 className={styles.categoryTitle}>상품 소개</h5>
              <p className={styles.categoryText}>{product.description}</p>
            </div>
            <div className={styles.productMeta2}>
              <h5 className={styles.categoryTitle}>상품 태그</h5>
              <div className={styles.tags}>
                {product.tags.map((value) => {
                  return (
                    <p className={styles.tagText} key={value}>
                      #{value}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.userInfoContainer}>
            <div className={styles.userInfo}>
              <img
                src={profileImage}
                alt="프로필 이미지"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <div className={styles.profileInfo}>
                <p>{product.ownerNickname}</p>
                <p className={styles.writerUpdatedAt}>
                  {product.updatedAt.slice(0, 10).replace(/-/g, "/")}
                </p>
              </div>
            </div>
            <div className={styles.favouriteContainer}>
              <div className={styles.verticalDivider}></div>
              <div className={styles.favourite}>
                <FontAwesomeIcon icon={faHeart} />
                <p>{product.favoriteCount}</p>
              </div>
            </div>
          </div>
          <hr className={styles.divider2} />
        </div>
      </div>
      <div className={styles.inquiryContainer}>
        <TextInputField
          as="textarea"
          label="문의하기"
          labelClass={styles.pageTitle}
          name="productInquiryMessage"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          wrapperClass={styles.inputWrapper}
          textAreaClass={styles.textArea}
          errorClass={styles.errorText}
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
        />
        <div className={styles.submitButtonWrapper}>
          <button
            className={`${styles.submitButton} ${isValid ? styles.active : ""}`}
            disabled={!isValid}
          >
            등록
          </button>
        </div>
      </div>
      <CommentList productId={productId} />
      <Link to="/items" className={styles.backButton}>
        목록으로 돌아가기 <FontAwesomeIcon icon={faCircleArrowLeft} />
      </Link>
    </section>
  );
}
