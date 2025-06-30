import { useEffect, useState } from "react";

const useFetch = (asyncFunction, options) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const getAsyncResult = async (options) => {
    let data = null;
    try {
      setIsLoading(true);
      setError(false);
      data = await asyncFunction(options);
      setResult(data);
    } catch (e) {
      setError(e);
      setResult(null)
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAsyncResult(options);
  }, [options, asyncFunction]);

  return { isLoading, error, result };
};

export default useFetch