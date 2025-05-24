import { useState, useEffect } from "react";
import { getProducts } from "../service/api"

export function useLoadItems(queryStrings) {
  const [loadFail, setLoadFail] = useState("");
  const [result, setResult] = useState({});

  useEffect(() => {
    if (!queryStrings?.pageSize) return

    async function loadItemsByQuery() {
      try {
        const result = await getProducts(queryStrings);
        setResult(result);
        setLoadFail("");
      } catch (err) {
        setLoadFail('fail')
      }
    }

    loadItemsByQuery();
  }, [queryStrings])

  return [loadFail, result];
}
