import { useState, useCallback, useRef } from "react";

const useAsync = (asyncFunc) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const asyncFuncRef = useRef(asyncFunc);

  const runAsync = useCallback(async (...args) => {
    try {
      setIsLoading(true);
      setLoadingError(null);
      const result = await asyncFuncRef.current(...args);
      setData(result);
      return await asyncFuncRef.current(...args);
    } catch (err) {
      setLoadingError(err);
      return;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetError = useCallback(() => {
    setLoadingError(null);
  }, []);

  return { isLoading, loadingError, runAsync, resetError, data };
};

export default useAsync;
