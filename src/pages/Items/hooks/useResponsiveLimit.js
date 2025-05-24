import { useEffect, useState } from "react";
import { getLimitFromWindowWidth } from "../../../utils/getLimitFromWindowWidth";

export default function useResponsiveLimit(itemsPerDevice) {
  const DEFAULT_RESPONSIVE_LIMIT = itemsPerDevice?.tablet || 6;
  // 아주 최소 연산으로만 초기limit값 처리
  const [limit, setLimit] = useState(() => {
    // 아주 최소 연산만 처리
    // SSR 대응
    return typeof window === "undefined"
      ? DEFAULT_RESPONSIVE_LIMIT // 아주 보수적인 default
      : null;
  });

  useEffect(() => {
    //window 접근 못 할 경우 return;
    if (typeof window === "undefined") return;

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
        setLimit((prev) => (prev !== newLimit ? newLimit : prev));
      }, 120); // 리사이즈 멈춘 뒤 120ms 후에만 실행
    };

    update(); // mount 시 1회 실행
    window.addEventListener("resize", update);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", update);
    };
  }, [itemsPerDevice]);

  return limit;
}
