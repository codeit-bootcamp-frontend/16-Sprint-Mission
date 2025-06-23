/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ProfileSummary from "@/components/ProfileSummary/ProfileSummary";
import TagList from "@/components/ui/Tag/TagList";
import { ReactComponent as HeartIcon } from "@/assets/images/ic-like.svg";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { BREAKPOINTS } from "@/constants/responsive";
import { useState } from "react";
import ImageSkeleton from "@/components/ui/Skeletons/ImageSkeleton";

const ProductInfo = ({ product, thumbSize }) => {
  const {
    name,
    images,
    price,
    description,
    tags,
    ownerNickname,
    createdAt,
    favoriteCount,
  } = product;

  const [addFavorite, setAddFavorite] = useState(false);
  const toggleFavoriteCount = () => {
    setAddFavorite((prev) => !prev);
  };

  return (
    <section css={ProductInfoStyle({ thumbSize, addFavorite })}>
      <div className="product-img">
        <ImageSkeleton
          src={images}
          alt={name}
          width={thumbSize}
          height={thumbSize}
        />
      </div>
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <h3 className="product-price">{price.toLocaleString("ko-KR")}원</h3>
        <Divider />
        <div className="product-description">
          <div className="description-item">
            <span className="description-title">상품 소개</span>
            <p className="description">{description}</p>
          </div>
          <div className="description-item">
            <span className="description-title">상품 태그</span>
            <TagList tags={tags} isFormTag={false} />
          </div>
        </div>

        <div className="product-info-footer">
          <ProfileSummary
            name={ownerNickname}
            createdAt={createdAt}
            favoriteCount={favoriteCount}
            size={40}
            style={{ marginTop: "auto" }}
          />
          <div className="actions">
            <Button
              variant="outlined"
              round={true}
              size="sm"
              className="btn-favorite"
              style={{
                padding: "8px 14px",
                minWidth: "88px",
                height: "auto",
              }}
              onClick={toggleFavoriteCount}
            >
              <HeartIcon
                aria-label="좋아요 갯수"
                className="heart-icon"
                width="24"
                height="24"
              />
              <span className="favorite-count">
                {addFavorite ? favoriteCount + 1 : favoriteCount}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;

const ProductInfoStyle = ({ thumbSize, addFavorite }) => css`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (min-width: ${BREAKPOINTS.tablet + 120}px) {
    flex-wrap: nowrap;
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    gap: 24px;
  }

  .product-img {
    width: ${typeof thumbSize === "number" ? `${thumbSize}px` : thumbSize};
    height: ${typeof thumbSize === "number" ? `${thumbSize}px` : thumbSize};
    aspect-ratio: 1/1;
    border-radius: var(--thumb-border-radius);
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .product-name {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--secondary-color);

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      font-size: 20px;
    }

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      font-size: 24px;
      margin-bottom: 16px;
    }
  }

  .product-price {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--secondary-color);

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      font-size: 32px;
    }

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      font-size: 40px;
    }
  }

  .product-description {
    margin-bottom: 16px;
  }

  .description-item {
    margin-bottom: 24px;

    .description-title {
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
      color: var(--text-primary);
      font-weight: 600;

      @media (min-width: ${BREAKPOINTS.desktop}px) {
        margin-bottom: 16px;
        font-size: 16px;
      }
    }

    .description {
      color: var(--secondary-color);
    }
  }

  .product-info-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    .actions {
      margin-left: 24px;
      padding-left: 24px;
      border-left: 1px solid var(--gray300);
    }
  }

  .btn-favorite {
    border-color: ${addFavorite ? "var(--primary-color)" : "var(--gray300)"};
    color: ${addFavorite ? "var(--primary-color)" : "var(--gray500)"};

    &:hover {
      border-color: var(--primary-color);
    }
  }
  .heart-icon {
    fill: ${addFavorite ? "var(--primary-color)" : "#fff"};
    stroke: ${addFavorite
      ? "1px solid transparent"
      : "1px solid var(--gray500)"};
  }
`;
