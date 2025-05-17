// hooks/useBestProducts.js
import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';

export default function useBestProducts(limit) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchProducts();
      const sorted = res.sort((a, b) => b.favoriteCount - a.favoriteCount);
      setProducts(sorted.slice(0, limit));
    };
    load();
  }, [limit]);

  return products;
}
