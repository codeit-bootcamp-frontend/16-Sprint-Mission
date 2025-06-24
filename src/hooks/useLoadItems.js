import { useState, useEffect } from 'react';
import { getProducts } from '../service/api';

export function useLoadItems(queryStrings) {
  const [loadFailed, setLoadFailed] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (!queryStrings?.pageSize) return; //pageSize 반영되기 전에 오는 경우 막기

    async function loadItemsByQuery() {
      try {
        const result = await getProducts(queryStrings);
        setResult(result);
        setLoadFailed(false);
      } catch (err) {
        setLoadFailed(true);
      }
    }

    loadItemsByQuery();
  }, [queryStrings]);

  return { loadFailed, result };
}
