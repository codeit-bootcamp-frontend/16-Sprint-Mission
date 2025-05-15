import { useEffect, useState } from 'react';
import { useScreenBreakpoint } from './useScreenBreakpoint';

export const usePageSizeByBreakPoint = () => {
  const { breakPoint } = useScreenBreakpoint();
  const [pageSizeList, setPageSizeList] = useState({});

  useEffect(() => {
    const pageSizeListObject = {
      best: { lg: 4, md: 2, sm: 1 },
      current: { lg: 10, md: 6, sm: 4 },
    };

    const nextPageSizeList = {};

    for (const [key, sizeList] of Object.entries(pageSizeListObject)) {
      nextPageSizeList[key] = sizeList[breakPoint];
    }

    setPageSizeList((prev) => {
      return JSON.stringify(prev) === JSON.stringify(nextPageSizeList)
        ? prev
        : nextPageSizeList;
    });
  }, [breakPoint]);

  return { pageSizeList };
};
