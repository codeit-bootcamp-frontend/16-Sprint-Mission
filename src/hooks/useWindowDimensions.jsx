import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width } = window; //"비구조화 + 이름 변경" 또는 "별칭 할당(aliasing)" const width = window.innerWidth;
  return { width };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize); // 컴포넌트 마운트 시 resize 이벤트 등록
    return () => window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 이벤트 제거
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;
