/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useCallback } from "react";
import useAsync from "@/hooks/useAsync";
import { getComments } from "@/services/get/getComments";
import { updateComment } from "@/services/patch/updateComment";
import { deleteComment } from "@/services/delete/deleteComment";
import inquiryEmptyImg from "@/assets/images/img_inquiry_empty.png";
import Button from "@/components/ui/Button";
import ProfileSummary from "@/components/ProfileSummary";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import CursorPagination from "@/components/Pagination/CursorPagination";
import KebabButton from "@/components/ui/Button/KebabButton";
import Textarea from "@/components/ui/Textarea";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { BREAKPOINTS } from "@/constants/responsive";

const dropdownItems = ["수정하기", "삭제하기"];

const CommentList = ({ productId }) => {
  const {
    isLoading,
    loadingError,
    runAsync: getCommentAsync,
  } = useAsync(getComments);
  const {
    isLoading: updatingComment,
    loadingError: updateCommentError,
    runAsync: updateCommentAsync,
    resetError: resetUpdateError,
  } = useAsync(updateComment);
  const {
    isLoading: deletingComment,
    loadingError: deleteCommentError,
    runAsync: deleteCommentAsync,
  } = useAsync(deleteComment);

  // 댓글 페이지네이션 (커서 기반)
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  const handleCommentLoad = useCallback(
    async (currentCursor = null, setNextCursorFromPagination) => {
      try {
        const result = await getCommentAsync(productId, currentCursor);
        if (!result) return;
        setComments(result.list);

        setNextCursor(result.nextCursor);
        setNextCursorFromPagination?.(result.nextCursor);
      } catch (err) {
        console.error(err);
      }
    },
    [getCommentAsync, productId]
  );

  // 댓글 수정
  const [isEditCommentId, setIsEditCommentId] = useState(null);

  const handleUpdateComment = (commentId) => {
    const textarea = document.querySelector(`[data-comment-id="${commentId}"]`);
    const updated = textarea?.value;
    if (!updated) return;

    updateCommentAsync(commentId, updated);
  };

  const handleUpdateCommentCancel = () => {
    setIsEditCommentId(null);
    setDropdownCommentId(null);
    resetUpdateError(null);
  };

  // 댓글 드롭다운
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
      if (deleteCommentError) alert("댓글 삭제에 실패했습니다.");
    }
  };

  // 초기 댓글 목록 로드
  const [isCommentPageReady, setIsCommentPageReady] = useState(false);

  useEffect(() => {
    const loadInitialComments = async () => {
      try {
        const result = await getCommentAsync(productId, null);
        if (!result) return;

        setComments(result.list);
        setNextCursor(result.nextCursor);
        setIsCommentPageReady(true); // 댓글 목록 받은 이후 댓글 페이지네이션 렌더 준비
      } catch (err) {
        console.error(err);
      }
    };

    loadInitialComments();
  }, [getCommentAsync, productId]);

  return (
    <div css={CommentListStyle}>
      {isLoading && <p>댓글 로딩중...</p>}
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
                imgSize={32}
                metaSize={12}
                imgInfoGap={8}
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
