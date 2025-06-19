// 데이터 fetch 훅
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchItems = (sortOption, currentPage) => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=10&orderBy=${sortOption}`
        );
        setItems(response.data.list);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("상품을 불러오지 못했습니다!", error);
      }
    };

    fetchItems();
  }, [sortOption, currentPage]);

  return { items, totalPages };
};

export default useFetchItems;
