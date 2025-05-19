import { getProducts } from "../service/api";

// 재사용 때문에 묶긴 했는데... 데이터 받기 + set하기 +set하기 +set하기 분
export function updateProductsByQuery(queryStrings, setItems, setError, setTotal = null) {
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
