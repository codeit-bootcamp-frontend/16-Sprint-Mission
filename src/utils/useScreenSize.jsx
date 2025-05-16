import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("sm");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setScreenSize("sm");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1199) {
        setScreenSize("md");
      } else if (window.innerWidth >= 1200) {
        setScreenSize("lg");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
