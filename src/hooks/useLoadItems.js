import { useState, useEffect } from "react";
import { getProducts } from "../service/api"

export function useLoadItems(queryStrings) {
  const [loadFail, setLoadFail] = useState("");
  const [result, setResult] = useState({});

  useEffect(() => {
    if (!queryStrings?.pageSize) return //pageSize 반영되기 전에 오는 경우 막기

    async function loadItemsByQuery() {
      try {
        const result = await getProducts(queryStrings);
        setResult(result);
        setLoadFail(""); //빈 문자열 false
      } catch (err) {
        setLoadFail('fail') //문자열이니까 true
      }
    }

    loadItemsByQuery();
  }, [queryStrings])

  return [loadFail, result];
}
