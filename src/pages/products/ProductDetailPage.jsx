/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import pandaLogoImg from "@/assets/images/logo-panda.svg";
import Button from "@/components/ui/Button";
import arrowLeftIcon from "@/assets/images/ic_arrow_left.svg";
import ProfileSummary from "@/components/ProfileSummary/ProfileSummary";
import { BREAKPOINTS } from "@/constants/responsive";
import Divider from "@/components/ui/Divider/Divider";
import TagList from "@/components/ui/Tag/TagList";
import { ReactComponent as HeartIcon } from "@/assets/images/ic-like.svg";
import ProductComments from "@/components/ProductComments/ProductComments";

const ProductDetailPage = () => {
  const location = useLocation();
  const {
    id: productId,
    images,
    name,
    description,
    price,
    favoriteCount,
    tags,
    ownerNickname,
    createdAt,
  } = location.state;

  return (
    <PageContent>
      <section css={ProductInfoStyle}>
        <div className="product-img">
          <img
            src={images}
            alt={name}
            className="item-img"
            width="486"
            height="486"
            // onLoad={}
            onError={(e) => {
              e.target.onerror = null;
              e.currentTarget.src = pandaLogoImg;
            }}
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
              >
                <HeartIcon
                  aria-label="좋아요 갯수"
                  width="24"
                  height="24"
                  style={{ stroke: "var(--gray500)" }}
                />
                <span className="favorite-count">{favoriteCount}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Divider style={{ marginBottom: 40 }} />

      <ProductComments productId={productId} />

      <Button variant="primary" size="sm">
        목록으로 돌아가기 <img src={arrowLeftIcon} alt="왼쪽 화살표" />
      </Button>
    </PageContent>
  );
};

export default ProductDetailPage;

const ProductInfoStyle = css`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    gap: 24px;
  }

  .product-img {
    aspect-ratio: 1/1;
    border-radius: var(--thumb-border-radius);
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      object-fit: cover;
    }

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      max-width: 486px;
      max-height: 486px;
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
`;
