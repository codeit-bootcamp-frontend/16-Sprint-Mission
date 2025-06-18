import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // 페이지 전환 시 스크롤 위치 맨위로
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname, navigationType]);
};

export default useScrollToTop;
