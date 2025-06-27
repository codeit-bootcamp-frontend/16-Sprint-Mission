import { useState, useCallback, useEffect } from "react";
import useAsync from "./useAsync";
import { getComments } from "@/services/get/getComments";
import { updateComment } from "@/services/patch/updateComment";
import { deleteComment } from "@/services/delete/deleteComment";

const DELAY_LOADING_MS = 2000;

const useComment = (productId) => {
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
  const [showFallback, setShowFallback] = useState(false);

  // 댓글 페이지네이션 (커서 기반)
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadError, setIsLoadError] = useState(null);

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

  const handleCommentLoad = useCallback(
    async (currentCursor = null, setNextCursorFromPagination) => {
      try {
        setIsLoading(true);
        setIsLoadError(null);
        const result = await getComments(productId, currentCursor);
        if (!result) return;
        setComments(result.list);

        setNextCursor(result.nextCursor);
        setNextCursorFromPagination?.(result.nextCursor);
      } catch (err) {
        setIsLoadError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [productId]
  );

  // 초기 댓글 목록 로드
  const [isCommentPageReady, setIsCommentPageReady] = useState(false);

  useEffect(() => {
    handleCommentLoad(null); // 초기에는 커서 없이 호출
    setIsCommentPageReady(true); // 페이지네이션 준비 완료 표시
  }, [productId, handleCommentLoad]);

  // 댓글 로딩 오래 걸릴 때만 fallback UI 표시
  useEffect(() => {
    if (!isLoading) {
      setShowFallback(false);
      return;
    }

    const timer = setTimeout(() => {
      if (isLoading) setShowFallback(true);
    }, DELAY_LOADING_MS);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return {
    // 상태
    comments,
    nextCursor,
    isEditCommentId,
    dropdownCommentId,
    isCommentPageReady,

    // 로딩/에러
    isLoading,
    isLoadError,
    updatingComment,
    updateCommentError,
    deletingComment,
    deleteCommentError,
    showFallback,

    // 핸들러
    handleCommentLoad,
    handleUpdateComment,
    handleUpdateCommentCancel,
    toggleDropdown,
    handleDropdownSelect,
  };
};

export default useComment;
