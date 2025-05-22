import { useEffect, useState } from "react";

export const useAsync = (asyncFunction, options) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const getAsyncResult = async (options) => {
    let result = null;
    try {
      setIsLoading(true);
      setError(false);
      result = await asyncFunction(options);
      setResult(result);
    } catch (e) {
      setError(e);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAsyncResult(options);
  }, [options]);

  return { isLoading, error, result };
};
