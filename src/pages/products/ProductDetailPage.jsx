/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import avatarImg from "@/assets/images/img-avatar.png";
import pandaLogoImg from "@/assets/images/logo-panda.svg";
import Textarea from "@/components/ui/Textarea";
import FormControl from "@/components/ui/Form/FormControl";
import FormLabel from "@/components/ui/Form/FormLabel";
import useForm from "@/hooks/useForm";
import Button from "@/components/ui/Button";

const ProductDetailPage = () => {
  const location = useLocation();
  const formRef = useRef(null);

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

  const { handleBlur, isFormValid } = useForm(formRef);

  return (
    <PageContent>
      <section css={ProductInfoStyle}>
        <div className="product-img">
          <img
            src={images}
            alt={name}
            className="item-img"
            // onLoad={}
            onError={(e) => {
              e.currentTarget.src = pandaLogoImg;
            }}
          />
        </div>
        <div className="product-description">
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
        </div>
      </section>
      <section css={ProductCommentStyle}>
        <form className="comment-form" ref={formRef}>
          <FormControl>
            <FormLabel size="xs" inputId="productCmt">
              문의하기
            </FormLabel>
            <Textarea
              id="productCmt"
              name="description"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onBlur={handleBlur}
            />
          </FormControl>
          <Button
            size="sm"
            variant="primary"
            disabled={!isFormValid}
            type="submit"
          >
            등록
          </Button>
        </form>
      </section>
    </PageContent>
  );
};

export default ProductDetailPage;

const ProductInfoStyle = css``;

const ProductCommentStyle = css``;
