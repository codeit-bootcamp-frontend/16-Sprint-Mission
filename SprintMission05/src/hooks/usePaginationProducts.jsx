import { useEffect, useState } from "react";
import { getProducts } from "./api";

const LIMIT = 10;

export default function usePaginationProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const offset = (page - 1) * LIMIT;
      const data = await getProducts({ offset, limit: LIMIT });
      setProducts(data);

      // 다음 페이지가 존재하는지 확인
      setHasNextPage(data.length === LIMIT);
    };
    fetch();
  }, [page]);

  return {
    products,
    page,
    setPage,
    hasNextPage,
  };
}
