import { useState, useEffect } from "react";

export async function getProducts({ page = 1, pageSize = 1 } = {}) {
  const params = new URLSearchParams();
  if (page) params.append("page", page);
  if (page && pageSize) params.append("pageSize", pageSize);
  const response = await fetch(`https://panda-market-api.vercel.app/products?${params}`);

  if (!response.ok) {
    throw new Error("상품을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  // console.log("API 응답:", body);
  return body;
}

export function useProductData({ page, pageSize, isPageinated = true }) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(5); //전체 페이지 수 관리

  useEffect(() => {
    if (!pageSize) return; // pageSize가 없으면 API를 아예 호출하지 않게 차단한다.
    const fetchData = async () => {
      try {
        const query = isPageinated ? { page, pageSize } : { pageSize };
        const data = await getProducts(query);
        setProducts(data.list);
        console.log("getProducts 결과:", data.list);

        if (isPageinated) {
          if (data.totalPages) {
            setTotalPages(data.totalPages);
          } else if (data.totalCount) {
            setTotalPages(Math.ceil(data.totalCount / pageSize));
          }
        }
      } catch (error) {
        console.error("상품 불러오기 실패", error);
      }
    };

    fetchData();
  }, [page, pageSize, isPageinated]);

  return isPageinated ? { products, totalPages } : { products };
}
