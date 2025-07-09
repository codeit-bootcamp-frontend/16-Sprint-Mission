import { useState, useEffect } from 'react';

import useAsync from './useAsync';
import { getProductsByQuery } from '../api/products';
import {
  createGetBestProductsOptions,
  createGetAllProductsOptions,
} from '../utils/createGetProductsOptions';

const useProductsLoading = (deviceType, order, keyword) => {
  const [bestProducts, setBestProducts] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isBestProductsLoading, isBestProductsError, getBestProductsAsync] =
    useAsync(getProductsByQuery);
  const [isAllProductsLoading, isAllProductsError, getAllProductsAsync] =
    useAsync(getProductsByQuery);

  useEffect(() => {
    const loadBestProducts = async () => {
      const bestProductsOptions = createGetBestProductsOptions({ deviceType });
      const { list: bestProductsList } =
        await getBestProductsAsync(bestProductsOptions);

      setBestProducts(bestProductsList);
    };

    loadBestProducts();
  }, [deviceType, getBestProductsAsync]);

  useEffect(() => {
    const loadAllProducts = async () => {
      const allProductsOptions = createGetAllProductsOptions({
        deviceType,
        order,
        keyword,
        page,
      });

      const { list: allProductsList, totalCount: total } =
        await getAllProductsAsync(allProductsOptions);

      setAllProducts(allProductsList);
      setTotal(total);
    };

    loadAllProducts();
  }, [deviceType, order, keyword, page, getAllProductsAsync]);

  return {
    bestProducts,
    allProducts,
    setPage,
    total,
    isBestProductsLoading,
    isBestProductsError,
    isAllProductsLoading,
    isAllProductsError,
  };
};

export default useProductsLoading;
