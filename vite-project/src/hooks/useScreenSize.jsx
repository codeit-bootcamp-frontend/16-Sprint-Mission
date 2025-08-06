import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function updateScreenSize() {
      const width = window.innerWidth;

      setIsDesktop(width >= 1200);
      setIsTablet(width < 1200 && width >= 768);
      setIsMobile(width < 768);
    }
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return { isDesktop, isTablet, isMobile };
};
