/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import avatarImg from "@/assets/images/img-avatar.png";
import pandaLogoImg from "@/assets/images/logo-panda.svg";
import Textarea from "@/components/ui/Textarea";
import FormControl from "@/components/ui/Form/FormControl";
import FormLabel from "@/components/ui/Form/FormLabel";
import useForm from "@/hooks/useForm";
import Button from "@/components/ui/Button";
import useAsync from "@/hooks/useAsync";
import { getComments } from "@/services/get/getComments";
import kebabIcon from "@/assets/images/ic_kebab.svg";
import inquiryEmptyImg from "@/assets/images/img_inquiry_empty.png";
import arrowLeftIcon from "@/assets/images/ic_arrow_left.svg";
import Dropdown from "@/components/ui/Dropdown";
import { updateComment } from "@/services/patch/updateComment";
import { deleteComment } from "@/services/delete/deleteComment";

const dropdownMenuItems = ["수정하기", "삭제하기"];

const ProductDetailPage = () => {
  const location = useLocation();
  const {
    id,
    images,
    name,
    description,
    price,
    favoriteCount,
    tags,
    ownerNickname,
    createdAt,
  } = location.state;

  const formRef = useRef(null);
  const { handleBlur, isFormValid } = useForm(formRef);

  const [comments, setComments] = useState([]);
  const [isEditCommentId, setIsEditCommentId] = useState(null);
  const {
    isLoading: updateCommentLoading,
    loadingError: updateCommentError,
    runAsync: updateCommentAsync,
  } = useAsync(updateComment);
  const {
    isLoading,
    loadingError,
    runAsync: getCommentAsync,
  } = useAsync(getComments);
  const {
    isLoading: deleteCommentLoading,
    loadingError: deleteCommentError,
    runAsync: deleteCommentAsync,
  } = useAsync(deleteComment);

  const handleCommentLoad = useCallback(async () => {
    try {
      const result = await getCommentAsync(id);
      if (!result) return;
      setComments(result.list);
    } catch (err) {
      console.log(err);
    }
  }, [getCommentAsync, id]);

  const [dropdownCommentId, setDropdownCommentId] = useState(null);

  const toggleDropdown = (commentId) => {
    setDropdownCommentId((prevId) => (prevId === commentId ? null : commentId));
  };

  const handleDropdownSelect = (value, commentId) => {
    if (value === "수정하기") {
      setIsEditCommentId((prevId) => (prevId === commentId ? null : commentId));
    }
    if (value === "삭제하기") {
      deleteCommentAsync(commentId);
    }
  };

  const handleUpdateComment = (commentId) => {
    const textarea = document.querySelector(`[data-comment-id="${commentId}"]`);
    const updated = textarea?.value;
    if (!updated) return;

    updateCommentAsync(commentId, updated);
  };

  useEffect(() => {
    handleCommentLoad();
  }, [handleCommentLoad]);

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
          <div className="profile-area">
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
        <ol className="comments">
          {isLoading && <p>댓글 로딩중...</p>}
          {loadingError && <p>댓글을 불러오는 데 문제가 발생했습니다.</p>}
          {!isLoading && comments.length === 0 && (
            <div className="inquiry-empty">
              <img
                src={inquiryEmptyImg}
                alt="전화기 들고 물음표 띄우는 판다 이미지"
              />
              <p>아직 문의가 없어요</p>
            </div>
          )}
          {comments?.map((cmt) => (
            <li className="comment" key={cmt.id}>
              {isEditCommentId === cmt.id ? (
                <div className="comment-edit">
                  <Textarea
                    defaultValue={cmt.content}
                    data-comment-id={cmt.id}
                  />
                  <span>commentId: {cmt.id}</span>
                  <div className="comment-edit-actions">
                    <Button onClick={() => setIsEditCommentId(null)}>
                      취소
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleUpdateComment(cmt.id)}
                    >
                      수정 완료
                    </Button>
                  </div>
                </div>
              ) : (
                <p>{cmt.content}</p>
              )}
              <div className="profile-area">
                <div className="profile">
                  <img src={cmt.image || avatarImg} alt="기본 프로필 이미지" />
                  <span className="owner-name">{cmt.writer.nickname}</span>
                  <span className="createAt">{cmt.createdAt}</span>
                </div>
                <button
                  type="button"
                  className="kebab-btn"
                  onClick={() => toggleDropdown(cmt.id)}
                >
                  <img src={kebabIcon} alt="댓글 수정/삭제하기" />
                </button>
                {dropdownCommentId === cmt.id && (
                  <Dropdown
                    menu={dropdownMenuItems}
                    onClickMenu={(value) => handleDropdownSelect(value, cmt.id)}
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
        <Button variant="primary" size="sm">
          목록으로 돌아가기 <img src={arrowLeftIcon} alt="왼쪽 화살표" />
        </Button>
      </section>
    </PageContent>
  );
};

export default ProductDetailPage;

const ProductInfoStyle = css``;

const ProductCommentStyle = css``;
