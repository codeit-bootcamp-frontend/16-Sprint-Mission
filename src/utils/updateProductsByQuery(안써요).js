import { useState } from "react";
import { getProducts } from "../service/api";

// 공통되는 부분을 묶을지? 아니면 상태를 set하는 모습을 드러낼지? 고민이네
export function loadItems(queryStrings, setItems, setError, setTotal = null) {
    async function fetchAndSetItems() {
        try {
            const result = await getProducts(queryStrings);
            setItems(result.list);
            if (setTotal) setTotal(result.totalCount);
        } catch (err) {
            setError(err);
        }
    }
    fetchAndSetItems();
}




export function useLoadItems(queryStrings,option){
    const [loadFail,setLoadFail] = useState();
    const [result, setResult] = useState();


    async function loadItemsByQuery() {
      try {
        const result = await getProducts(queryStrings);
        setResult(result);
      } catch (err) {
        setLoadFail(err);
      }
    }
    loadItemsByQuery();


    return [ loadFail, result];
}