/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import pandaLogoImg from "@/assets/images/logo-panda.svg";
import Textarea from "@/components/ui/Textarea";
import FormControl from "@/components/ui/Form/FormControl";
import FormLabel from "@/components/ui/Form/FormLabel";
import useForm from "@/hooks/useForm";
import Button from "@/components/ui/Button";
import useAsync from "@/hooks/useAsync";
import { getComments } from "@/services/get/getComments";
import inquiryEmptyImg from "@/assets/images/img_inquiry_empty.png";
import arrowLeftIcon from "@/assets/images/ic_arrow_left.svg";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import { updateComment } from "@/services/patch/updateComment";
import { deleteComment } from "@/services/delete/deleteComment";
import CursorPagination from "@/components/Pagination/CursorPagination";
import ProfileSummary from "@/components/ProfileSummary/ProfileSummary";
import KebabButton from "@/components/ui/Button/KebabButton";
import { BREAKPOINTS } from "@/constants/responsive";
import Divider from "@/components/ui/Divider/Divider";
import TagList from "@/components/ui/Tag/TagList";
// import HeartIcon from "@/assets/images/ic-like.svg";
import { ReactComponent as HeartIcon } from "@/assets/images/ic-like.svg";

const dropdownItems = ["수정하기", "삭제하기"];

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

  const formRef = useRef(null);
  const { handleBlur, isFormValid } = useForm(formRef);

  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [isCommentPageReady, setIsCommentPageReady] = useState(false);
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

  const handleCommentLoad = useCallback(
    async (currentCursor = null, setNextCursorFromPagination) => {
      try {
        const result = await getCommentAsync(productId, currentCursor);
        if (!result) return;
        setComments(result.list);

        setNextCursor(result.nextCursor);
        setNextCursorFromPagination?.(result.nextCursor);
      } catch (err) {
        console.log(err);
      }
    },
    [getCommentAsync, productId]
  );

  const handleUpdateComment = (commentId) => {
    const textarea = document.querySelector(`[data-comment-id="${commentId}"]`);
    const updated = textarea?.value;
    if (!updated) return;

    updateCommentAsync(commentId, updated);
  };

  const [dropdownCommentId, setDropdownCommentId] = useState(null);

  const toggleDropdown = (commentId) => {
    setDropdownCommentId((prevId) => (prevId === commentId ? null : commentId));
  };

  const handleDropdownSelect = ({ target }, commentId) => {
    const value = target.textContent;
    if (value === "수정하기") {
      setIsEditCommentId((prevId) => (prevId === commentId ? null : commentId));
    }
    if (value === "삭제하기") {
      deleteCommentAsync(commentId);
    }
  };

  const handleUpdateCommentCancel = () => {
    setIsEditCommentId(null);
    setDropdownCommentId(null);
  };

  useEffect(() => {
    const loadInitialComments = async () => {
      try {
        const result = await getCommentAsync(productId, null);
        if (!result) return;

        setComments(result.list);
        setNextCursor(result.nextCursor);
        setIsCommentPageReady(true); // 최초 렌더링 준비 완료
      } catch (err) {
        console.error(err);
      }
    };

    loadInitialComments();
  }, [getCommentAsync, productId]);

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
                  <div className="comment-edit-actions">
                    <Button onClick={handleUpdateCommentCancel}>취소</Button>
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

              <div className="comment-container">
                <ProfileSummary
                  name={cmt.writer.nickname}
                  imgSrc={cmt.image}
                  createdAt={cmt.createdAt}
                />
                <KebabButton
                  onClick={() => toggleDropdown(cmt.id)}
                  alt="댓글 수정/삭제"
                />
                {dropdownCommentId === cmt.id && (
                  <Dropdown
                    items={dropdownItems}
                    onClick={(e) => handleDropdownSelect(e, cmt.id)}
                    isDropdownOpen={dropdownCommentId === cmt.id}
                  />
                )}
              </div>
            </li>
          ))}
        </ol>

        {isCommentPageReady && (
          <CursorPagination
            firstCursor={nextCursor}
            handleLoad={handleCommentLoad}
          />
        )}

        <Button variant="primary" size="sm">
          목록으로 돌아가기 <img src={arrowLeftIcon} alt="왼쪽 화살표" />
        </Button>
      </section>
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

const ProductCommentStyle = css`
  .comment-container {
    position: relative;
  }
`;
