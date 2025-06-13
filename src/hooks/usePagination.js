import { useCallback, useMemo } from "react";

/*
맨처음에 useCallback이랑 useMemo로 메모이제이션 하면 더 좋을까 하고 만들고 보니까
사실 상 어딜 눌러도 pageStart나 page가 변해서 의미가 없는 것 같음 -> 일단 재사용이라도 가능하게 뽑아두자.
-> 아니면 합성 컴포넌트? 이걸 알아볼까?
 */
export function usePagination(
  queryStrings,
  setQueryStrings,
  total,
  PAGINATION_MAX,
) {
  const { page, pageSize } = queryStrings;

  const maxPageLength = useMemo(() => {
    return Math.ceil(total / pageSize);
  }, [total, pageSize]); //이건 자주 안 바뀌니까 해도 되겠다.

  const pageStart =
    Math.floor((page - 1) / PAGINATION_MAX) * PAGINATION_MAX + 1;

  //이전, 다음 버튼 활성, 비활성 이미지용
  const isPrevDisabled = pageStart <= 1; /*훅에서 반환할 꺼 */
  const isNextDisabled =
    pageStart + PAGINATION_MAX > maxPageLength; /*훅에서 반환할 꺼 */

  const pageList = []; /*훅에서 반환할 꺼 */

  for (let i = 0; i < PAGINATION_MAX; i++) {
    if (pageStart + i > maxPageLength) break;
    pageList.push(pageStart + i);
  }

  const handlePrevBtn = () => {
    /*훅에서 반환할 꺼 */
    const prevPageStart = pageStart - PAGINATION_MAX;

    if (prevPageStart >= 1) {
      setQueryStrings((prev) => ({
        ...prev,
        page: prevPageStart,
      }));
    }
  };

  const handleNextBtn = () => {
    /*훅에서 반환할 꺼 */
    const nextPageStart = pageStart + PAGINATION_MAX;

    if (maxPageLength >= nextPageStart) {
      setQueryStrings((prev) => ({
        ...prev,
        page: nextPageStart,
      }));
    }
  };

  const handlePageRequest = useCallback(
    (e) => {
      /*훅에서 반환할 꺼 */
      const targetPage = Number(e.target.textContent);

      setQueryStrings((prev) => ({
        ...prev,
        page: targetPage,
      }));
    },
    [setQueryStrings],
  );

  return {
    pageList,
    handlePageRequest,
    handleNextBtn,
    handlePrevBtn,
    isPrevDisabled,
    isNextDisabled,
  };
}
