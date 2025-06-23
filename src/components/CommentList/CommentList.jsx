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

const dropdownItems = ["수정하기", "삭제하기"];

const CommentList = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [isCommentPageReady, setIsCommentPageReady] = useState(false);
  const [isEditCommentId, setIsEditCommentId] = useState(null);
  const {
    isLoading,
    loadingError,
    runAsync: getCommentAsync,
  } = useAsync(getComments);
  const {
    isLoading: updatingComment,
    loadingError: updateCommentError,
    runAsync: updateCommentAsync,
  } = useAsync(updateComment);
  const {
    isLoading: deletingComment,
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
        console.error(err);
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
    <div css={CommentListStyle}>
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
                <Textarea defaultValue={cmt.content} data-comment-id={cmt.id} />
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
              <p className="comment-content">{cmt.content}</p>
            )}

            <KebabButton
              onClick={() => toggleDropdown(cmt.id)}
              alt="댓글 수정/삭제"
            />
            {dropdownCommentId === cmt.id && (
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
                createdAt={cmt.createdAt}
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
    right: 0;
    top: 6px;
  }

  .comment-content {
    margin-bottom: 24px;
    font-size: 14px;
  }
`;
