import { useState, useEffect } from "react";

function usePagination({ fetchData, pageSize, initialPage = 1, isEnabled = true }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(5); //전체 페이지 수 관리
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEnabled || !pageSize) return; // 없으면 API를 아예 호출하지 않게 차단한다.

    const loadData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchData({ page: currentPage, pageSize });
        setData(result.list);

        if (result.totalPages) {
          setTotalPages(result.totalPages);
        } else if (result.totalCount) {
          setTotalPages(Math.ceil(result.totalCount / pageSize));
        }
      } catch (err) {
        setError(err);
        console.error("데이터 불러오기 실패:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [fetchData, currentPage, pageSize, isEnabled]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    data,
    isLoading,
    error,
    goToPage,
    nextPage,
    prevPage,
    setCurrentPage,
  };
}

export default usePagination;
