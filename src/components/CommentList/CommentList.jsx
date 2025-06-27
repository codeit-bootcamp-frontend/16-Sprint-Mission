/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import inquiryEmptyImg from "@/assets/images/img_inquiry_empty.png";
import Button from "@/components/ui/Button";
import ProfileSummary from "@/components/ProfileSummary";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import CursorPagination from "@/components/Pagination/CursorPagination";
import KebabButton from "@/components/ui/Button/KebabButton";
import Textarea from "@/components/ui/Textarea";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { BREAKPOINTS } from "@/constants/responsive";
import useComment from "@/hooks/useComment";

const dropdownItems = ["수정하기", "삭제하기"];

const CommentList = ({ productId }) => {
  const {
    // 상태
    comments,
    nextCursor,
    isEditCommentId,
    dropdownCommentId,
    isCommentPageReady,

    // 로딩/에러
    isLoading,
    loadingError,
    updatingComment,
    updateCommentError,
    showFallback,

    // 핸들러
    handleCommentLoad,
    handleUpdateComment,
    handleUpdateCommentCancel,
    toggleDropdown,
    handleDropdownSelect,
  } = useComment(productId);

  const isLoadingDelayed = isLoading && showFallback;

  return (
    <div css={CommentListStyle}>
      {isLoadingDelayed && <p>댓글 로딩중...</p>}
      {loadingError && <p>댓글을 불러오는 데 문제가 발생했습니다.</p>}
      {!isLoading && comments.length === 0 && <CommentEmpty />}

      <ol className="comments">
        {comments?.map((cmt) => (
          <li className="comment" key={cmt.id}>
            {isEditCommentId === cmt.id ? (
              <CommentUpdate
                content={cmt.content}
                commentId={cmt.id}
                onUpdate={handleUpdateComment}
                onUpdateCancel={handleUpdateCommentCancel}
                isUpdating={updatingComment}
                isError={updateCommentError}
              />
            ) : (
              <p className="comment-content">{cmt.content}</p>
            )}

            {isEditCommentId !== cmt.id && (
              <KebabButton
                onClick={() => toggleDropdown(cmt.id)}
                alt="댓글 수정/삭제"
              />
            )}

            {dropdownCommentId === cmt.id && isEditCommentId !== cmt.id && (
              <Dropdown
                items={dropdownItems}
                onClick={(e) => handleDropdownSelect(e, cmt.id)}
                isDropdownOpen={dropdownCommentId === cmt.id}
                isCommentDropdown={true}
              />
            )}

            <div className="comment-container">
              <ProfileSummary
                name={cmt.writer.nickname}
                imgSrc={cmt.image}
                createdAt={cmt.updatedAt}
                size="sm"
              />
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
    </div>
  );
};

export default CommentList;

const CommentListStyle = css`
  .comments > li {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--gray300);
  }

  .kebab-btn {
    position: absolute;
    right: -12px;
    top: -4px;
    padding: 10px 12px;
  }

  .comment-content {
    margin-bottom: 24px;
    font-size: 14px;
  }
`;

const CommentUpdate = ({
  content,
  commentId,
  onUpdate,
  onUpdateCancel,
  isUpdating,
  isError,
}) => {
  return (
    <div css={CommentUpdateStyle}>
      <Textarea
        id={commentId}
        name="comment-content"
        defaultValue={content}
        data-comment-id={commentId}
      />
      <div className="comment-actions">
        {isError && <p className="error-msg">댓글 수정에 실패했습니다.</p>}
        <Button size="sm" onClick={onUpdateCancel}>
          취소
        </Button>
        <Button variant="primary" size="sm" onClick={() => onUpdate(commentId)}>
          {isUpdating ? "수정중" : "수정 완료"}
        </Button>
      </div>
    </div>
  );
};

const CommentUpdateStyle = css`
  textarea {
    width: 100%;
    max-height: 80px;
    margin-bottom: 16px;
  }

  button {
    padding: 14px 20px;
  }

  .comment-actions {
    position: absolute;
    right: 0;
    bottom: 16px;
    z-index: 1;
    display: flex;
    gap: 8px;
    align-items: center;

    .error-msg {
      margin-right: 20px;
      font-size: 14px;
      color: var(--error-color);
    }
  }
`;

const CommentEmpty = () => {
  const { width: innerWidth } = useWindowDimensions();

  return (
    <div css={CommentEmptyStyle}>
      <img
        src={inquiryEmptyImg}
        alt="전화기 들고 물음표 띄우는 판다 이미지"
        width={innerWidth > BREAKPOINTS.desktop ? 174 : 124}
        height={innerWidth > BREAKPOINTS.desktop ? 138 : 98}
      />
      <p className="txt">아직 문의가 없어요</p>
    </div>
  );
};

const CommentEmptyStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 30px 0 0;

  .txt {
    color: var(--gray400);
    font-size: 16px;
  }
`;
