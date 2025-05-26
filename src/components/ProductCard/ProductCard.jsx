/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import likeImg from "../../assets/images/ic-like.svg";
import pandaLogoImg from "../../assets/images/logo-panda.svg";

const ProductCard = ({ data, loading = "lazy" }) => {
  const { images, name, description, price, favoriteCount } = data;

  return (
    <div css={ProductCardStyle}>
      <Link to="/items">
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
            <img className="ico-img" src={likeImg} alt="좋아요" />
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

  .btn-like-ico .ico-img {
    height: 100%;
    object-fit: contain;
  }
`;
