import usePaginationCursor from "@/hooks/usePaginationCursor";
import Pagination from "./Pagination";

const CursorPagination = ({ firstCursor = null, handleLoad }) => {
  const { pageData, pageActions } = usePaginationCursor({
    firstCursor,
    onCursorChange: (nextCursor) => {
      handleLoad(nextCursor, pageActions.setNextCursor);
    },
  });

  return <Pagination pageData={pageData} pageActions={pageActions} />;
};

export default CursorPagination;
