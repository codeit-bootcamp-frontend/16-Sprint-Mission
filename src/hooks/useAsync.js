import { useState, useCallback } from "react";

const useAsync = (asyncFunc) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const runAsync = useCallback(
    async (...args) => {
      try {
        setIsLoading(true);
        setLoadingError(null);
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

  return { isLoading, loadingError, runAsync, resetError };
};

export default useAsync;
