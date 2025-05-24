import { useEffect, useState } from "react";
import { getLimitFromWindowWidth } from "../../../utils/getLimitFromWindowWidth";

export default function useResponsiveLimit(itemsPerDevice) {
  const [limit, setLimit] = useState(() =>
    getLimitFromWindowWidth(
      itemsPerDevice.desktop,
      itemsPerDevice.tablet,
      itemsPerDevice.mobile
    )
  );

  useEffect(() => {
   let timeoutId;

  const update = () => {
    // 디바운싱 추가
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const newLimit = getLimitFromWindowWidth(
        itemsPerDevice.desktop,
        itemsPerDevice.tablet,
        itemsPerDevice.mobile
      );
      setLimit(prev => {
        if (prev !== newLimit) return newLimit;
        return prev;
      });
    }, 120); // 리사이즈 멈춘 뒤 120ms 후에만 실행
  };

  update();
  window.addEventListener("resize", update);
  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener("resize", update);
  };
  }, [itemsPerDevice]);

  return limit;
}
