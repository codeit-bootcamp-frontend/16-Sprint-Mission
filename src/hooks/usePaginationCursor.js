import { useState, useCallback } from "react";

const usePaginationCursor = ({ firstCursor, onCursorChange }) => {
  const [cursorStack, setCursorStack] = useState([]); // 이전 커서 저장
  const [currentCursor, setCurrentCursor] = useState(null); // 첫번째 커서 = null (첫번째 페이지)
  const [nextCursor, setNextCursor] = useState(firstCursor);

  const goToNext = useCallback(() => {
    if (nextCursor && nextCursor !== currentCursor) {
      setCursorStack((prev) => [...prev, currentCursor]);
      setCurrentCursor(nextCursor);
      onCursorChange(nextCursor);
    }
  }, [currentCursor, nextCursor, onCursorChange]);

  const goToPrev = useCallback(() => {
    if (cursorStack.length > 0) {
      const prevStack = [...cursorStack];
      const prevCursor = prevStack.pop();
      setCursorStack(prevStack);
      setCurrentCursor(prevCursor);
      onCursorChange(prevCursor, "prev");
    }
  }, [cursorStack, onCursorChange]);

  const resetCursor = useCallback(() => {
    setCursorStack([]);
    setCurrentCursor(null);
    onCursorChange(null, "reset");
  }, [onCursorChange]);

  return {
    pageData: {
      currentCursor,
      hasNext: !!nextCursor,
      hasPrev: cursorStack.length > 0,
    },
    pageActions: { goToNext, goToPrev, resetCursor, setNextCursor },
  };
};

export default usePaginationCursor;
