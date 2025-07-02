import { useEffect, useState } from "react";
import { throttle } from "lodash";
export const useWindowWidth = (throttleMs = 200) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = throttle(
      () => setWidth(window.innerWidth),
      throttleMs
    );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [throttleMs]);
  return width;
};
