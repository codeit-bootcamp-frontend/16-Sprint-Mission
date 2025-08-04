/** @jsxImportSource @emotion/react */
import DetailDropdown from "@pages/ProductDetailPage/components/DetailDropdown/DetailDropdown";
import ProductInfoItem from "@pages/ProductDetailPage/components/ProductInfo/ProductInfoItem";
import UserProfile from "@pages/ProductDetailPage/components/UserProfile/UserProfile";
import { formatDate, formatPrice } from "@utils/formatters";
import { ProductItemType } from "types/productType";
import TagList from "@pages/ProductDetailPage/components/ProductInfo/TagList";
import FavoriteButton from "@pages/ProductDetailPage/components/ProductInfo/FavoriteButton";
import styled from "@emotion/styled/macro";
import { mq } from "@styles/mixins";
import { css } from "@emotion/react";

interface Props {
  productInfo: ProductItemType;
}

const ProductInfoContent = ({ productInfo }: Props) => {
  const {
    name,
    description,
    price,
    tags,
    favoriteCount,
    createdAt,
    ownerNickname,
    isFavorite,
  } = productInfo;

  const date = formatDate(new Date(createdAt));

  return (
    <>
      <InfoHeader>
        <h2 className="product_name">{name}</h2>
        <strong className="product_price">{formatPrice(price)}원</strong>
        <DetailDropdown
          onDelete={() => console.log("삭제하기")}
          onEdit={() => console.log("수정하기")}
          css={DropdownCustom}
        />
      </InfoHeader>
      <ProductInfoItem title="상품 소개">
        <p className="desc">{description}</p>
      </ProductInfoItem>
      <ProductInfoItem title="상품 태그">
        <TagList tags={tags} />
      </ProductInfoItem>
      <PostInfo>
        <UserProfile ownerNickname={ownerNickname} date={date} />
        <div className="heartButtonBox">
          <FavoriteButton
            favoriteCount={favoriteCount}
            isFavorite={isFavorite}
          />
        </div>
      </PostInfo>
    </>
  );
};

const InfoHeader = styled.div`
  position: relative;

  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  padding-bottom: 16px;

  ${mq["tablet"]} {
    margin-bottom: 16px;
  }

  .product_name {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray800};
    line-height: 1.3;

    ${mq["tablet"]} {
      margin-bottom: 8px;
      font-size: 20px;
    }

    ${mq["mobile"]} {
      font-size: 16px;
    }
  }

  .product_price {
    display: block;
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray800};
    line-height: 1.2;

    ${mq["tablet"]} {
      font-size: 32px;
    }

    ${mq["mobile"]} {
      font-size: 24px;
    }
  }
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 62px;

  ${mq["tablet"]} {
    margin-top: 40px;
  }

  .heartButtonBox {
    position: relative;
    margin-left: 24px;
    padding-left: 24px;
    flex: 0 0 auto;

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 34px;
      transform: translateY(-50%);
      background: ${({ theme }) => theme.colors.gray200};
      content: "";
    }
  }
`;

const DropdownCustom = css`
  position: absolute;
  top: 0;
  right: 0;
`;

export default ProductInfoContent;
