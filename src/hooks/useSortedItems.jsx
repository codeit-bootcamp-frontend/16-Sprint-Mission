import { useMemo } from "react";

export function useSortedItems(products, sortKey) {
  const sortedItems = useMemo(() => {
    if (!products) return [];

    // 원본 products를 직접 정렬하면 React가 상태가 바뀌었다고 인식하지 못해서 화면이 다시 렌더링되지 않는 일이 생긴다.
    return [...products].sort((a, b) => {
      if (sortKey === "updatedAt") {
        return new Date(a[sortKey]) - new Date(b[sortKey]);
      }
      if (sortKey === "favoriteCount") {
        return b[sortKey] - a[sortKey];
      }
      return 0;
    });
  }, [products, sortKey]);

  return sortedItems;
}
