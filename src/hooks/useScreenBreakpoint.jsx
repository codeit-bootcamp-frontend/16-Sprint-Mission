import { useEffect, useState } from "react";

const DEFAULT_BREAKPOINT = "sm";

export const useScreenBreakpoint = () => {
  const getBreakPoint = (width) => {
    if (width >= 1200) return "lg";
    else if (width >= 768) return "md";
    else return "sm";
  };

  //prettier-ignore
  const [breakPoint, setBreakPoint] = useState(() => getBreakPoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const nextBreakPoint = getBreakPoint(window.innerWidth);
      setBreakPoint((prev) =>
        prev === nextBreakPoint ? prev : nextBreakPoint
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("useEffect cleanup");
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { breakPoint };
};
