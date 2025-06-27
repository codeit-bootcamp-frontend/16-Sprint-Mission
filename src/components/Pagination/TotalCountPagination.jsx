import { useEffect, useRef } from "react";
import usePaginationTotalCount from "@/hooks/usePaginationTotalCount";
import Pagination from "./Pagination";

const TotalCountPagination = ({
  totalCount,
  pageSize,
  handleLoad,
  orderStatus,
  searchKeyword,
}) => {
  const { pageData, pageActions } = usePaginationTotalCount({
    pageSize,
    totalCount,
    onPageChange: (page) => {
      handleLoad({
        page,
        pageSize,
        orderBy: orderStatus,
        keyword: searchKeyword,
      });
    },
  });
  const { goToPage, updatePageWithResize } = pageActions;

  // 정렬 바뀌면 첫번째 페이지로 이동
  const prevOrderStatusRef = useRef(orderStatus);
  useEffect(() => {
    // goToPage 무한 루프 방지
    if (prevOrderStatusRef.current !== orderStatus) {
      prevOrderStatusRef.current = orderStatus;
      goToPage(1);
    }
  }, [orderStatus, goToPage]);

  // resize시 보고 있던 페이지 유지
  useEffect(() => {
    updatePageWithResize(pageSize);
  }, [pageSize, updatePageWithResize]);

  return <Pagination pageData={pageData} pageActions={pageActions} />;
};

export default TotalCountPagination;
