import { useState, useCallback } from "react";

const useAsync = (asyncFunc) => {
  const [isLoading, setIsLoading] = useState(true);
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

  return { isLoading, loadingError, runAsync };
};

export default useAsync;
