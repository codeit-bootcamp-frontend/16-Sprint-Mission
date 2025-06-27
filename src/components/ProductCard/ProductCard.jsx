/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from "@/assets/images/ic-like.svg";
import pandaLogoImg from "../../assets/images/logo-panda.svg";
import { getProduct } from "@/services/get/getProduct";
import { useEffect } from "react";
import useAsync from "@/hooks/useAsync";

const ProductCard = ({ productId, data, loading = "lazy" }) => {
  const { images, name, description, price, favoriteCount } = data;
  const { data: productData, runAsync: getProductAsync } = useAsync(() =>
    getProduct(productId)
  );

  useEffect(() => {
    getProductAsync();
  }, [getProductAsync]);

  return (
    <div css={ProductCardStyle}>
      <Link to={`/products/${productId}`} state={productData}>
        <span className="img-wrap">
          <img
            src={images}
            alt={name}
            className="item-img"
            onError={(e) => {
              e.currentTarget.src = pandaLogoImg;
            }}
            loading={loading}
          />
        </span>

        <h6 className="item-desc">{description}</h6>
        <h4 className="item-price">{price.toLocaleString("ko-KR")}원</h4>
        <button className="btn-like">
          <span className="btn-like-ico">
            <HeartIcon
              aria-label="좋아요 갯수"
              className="heart-icon"
              width="100%"
              height="100%"
            />
          </span>
          <span className="btn-like-count">{favoriteCount}</span>
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;

export const ProductCardStyle = css`
  .item-img {
    object-fit: cover;
    border-radius: var(--thumb-border-radius);
    margin-bottom: 16px;
  }

  .img-wrap {
    display: block;
  }

  .item-desc {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .item-price {
    margin-bottom: 8px;
  }

  .btn-like {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .btn-like-ico {
    width: 16px;
    height: 16px;
  }

  .btn-like-ico .heart-icon {
    height: 100%;
    object-fit: contain;
    stroke: 1px solid var(--gray600);
    fill: #fff;
  }
`;
