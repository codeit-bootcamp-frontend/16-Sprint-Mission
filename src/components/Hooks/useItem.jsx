import { useState, useEffect } from "react";
import fetchItems from "../../api/itemApi";

function useItem({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  name = "",
} = {}) {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchItems({ page, pageSize, orderBy, name });
        setItems(data.list);
        setTotalCount(data.totalCount);
      } catch (err) {
        console.error("상품 데이터 불러오기 실패:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadItems();
  }, [page, pageSize, orderBy, name]);

  return { items, totalCount, loading, error };
}

export default useItem;
