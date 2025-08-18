/** @jsxImportSource @emotion/react */
import ProfileSummary from "@/components/ProfileSummary/ProfileSummary";
import TagList from "@/components/ui/Tag/TagList";
import { ReactComponent as HeartIcon } from "@/assets/images/ic-like.svg";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { BREAKPOINTS } from "@/constants/responsive";
import { useState } from "react";
import ImageSkeleton from "@/components/ui/Skeletons/ImageSkeleton";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ProductInfoStyle from "./ProductInfoStyle";

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

  const { width } = useWindowDimensions();

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
            size="md"
          />
          <div className="actions">
            <Button
              variant="outlined"
              shape="round"
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
                width={width >= BREAKPOINTS.desktop ? 24 : 20}
                height={width >= BREAKPOINTS.desktop ? 24 : 20}
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
