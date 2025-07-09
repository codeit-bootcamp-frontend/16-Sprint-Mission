import { useState, useCallback } from 'react';

const useAsync = (asyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      let result;
      try {
        setError(null);
        setLoading(true);
        result = await asyncFunction(...args);
      } catch (error) {
        setError(error);
        return;
      } finally {
        setLoading(false);
      }

      return result;
    },
    [setLoading, setError, asyncFunction]
  );

  return [loading, error, wrappedFunction];
};

export default useAsync;
