import { useLocation } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import avatarImg from "@/assets/images/img-avatar.png";

const ProductDetailPage = () => {
  const location = useLocation();
  const {
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
      <img
        src={images}
        alt={name}
        className="item-img"
        // onError={(e) => {
        //   e.currentTarget.src = pandaLogoImg;
        // }}
        // loading={loading}
      />
      <h5>{name}</h5>
      <h3>{price}</h3>
      <div className="description-area">
        <span className="description-title">상품 소개</span>
        <p>{description}</p>
      </div>
      <div className="description-area">
        <span className="description-title">상품 태그</span>
        <div className="tag-list">{tags}</div>
      </div>
      <div className="owner-profile">
        <div className="profile">
          <img src={avatarImg} alt="기본 프로필 이미지" />
          <span className="owner-name">{ownerNickname}</span>
          <span className="createAt">{createdAt}</span>
        </div>
        <span className="favorite-count">{favoriteCount}</span>
      </div>
    </PageContent>
  );
};

export default ProductDetailPage;
