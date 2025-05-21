import { useState, useCallback } from "react";

const useAsync = (asyncFunc) => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const runAsync = useCallback(
    async (...args) => {
      try {
        setIsLoading(true);
        setError(null);
        return await asyncFunc(...args);
      } catch (err) {
        setError(err);
        return;
      } finally {
        setIsLoading(false);
      }
    },
    [asyncFunc]
  );

  return { loading, error, runAsync };
};

export default useAsync;
