import { useEffect, useState } from "react";

const useInnerWidth = () => {
  const [innerWidthVal, setInnerWidthVal] = useState<number>(0);

  useEffect(() => {
    setInnerWidthVal(window.innerWidth);
    const handleResize = () => {
      setInnerWidthVal(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return innerWidthVal;
};

export default useInnerWidth;
