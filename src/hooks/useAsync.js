import { useState, useCallback } from "react";

const useAsync = (asyncFunc) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const runAsync = useCallback(
    async (...args) => {
      try {
        setIsLoading(true);
        setLoadingError(null);
        const result = await asyncFunc(...args);
        setData(result);
        return await asyncFunc(...args);
      } catch (err) {
        setLoadingError(err);
        return;
      } finally {
        setIsLoading(false);
      }
    },
    [asyncFunc]
  );

  const resetError = useCallback(() => {
    setLoadingError(null);
  }, []);

  return { isLoading, loadingError, runAsync, resetError, data };
};

export default useAsync;
