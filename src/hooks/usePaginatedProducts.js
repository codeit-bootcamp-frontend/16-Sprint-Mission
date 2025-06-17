import { useEffect, useState } from "react";
import { fetchPaginatedProducts } from "../api/products";

export default function usePaginatedProducts({ page, limit, sort }) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const load = async () => {
      const res = await fetchPaginatedProducts({ page, pageSize: limit });
      let data = res.list || [];

      if (sort === "likes") {
        data.sort((a, b) => b.favoriteCount - a.favoriteCount);
      } else {
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }

      setProducts(data);
      setTotalPages(Math.ceil(res.totalCount / limit));
    };

    if (page && limit) load();
  }, [page, limit, sort]);

  return { products, totalPages };
}
