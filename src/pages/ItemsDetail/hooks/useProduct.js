// hooks/useProduct.ts
import { useState, useEffect } from "react";
import { getProductByProductId } from "../../../api/products";

export function useProduct(productId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;
    setLoading(true);
    setError(null);

    getProductByProductId({ productId })
      .then((prod) => setData(prod))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [productId]);

  return { data, loading, error };
}
