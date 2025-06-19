import { useEffect, useState } from "react";

//Hydration 불일치 오류 방지 초기값 설정
const DEFAULT_BP = "mobile";

function getBreakpoint() {
  const w = window.innerWidth;
  if (w >= 1200) return "desktop";
  if (w >= 768) return "tablet";
  return "mobile";
}

function useBreakpoint() {
  const [bp, setBp] = useState(DEFAULT_BP);

  useEffect(() => {
    const updateBp = () => {
      setBp(getBreakpoint());
    };

    window.addEventListener("resize", updateBp); //resize 이벤트 감지 시 실행
    updateBp(); //마운트 시점 동기화

    return () => {
      //클린업 이벤트 제거
      window.removeEventListener("resize", updateBp);
    };
  }, []);

  return bp;
}

export default useBreakpoint;
