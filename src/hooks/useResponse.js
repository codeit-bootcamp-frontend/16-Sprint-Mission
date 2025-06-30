import { useEffect, useState } from "react";

const getResponseInfo = () => {
  const viewWidth = window.innerWidth;
  if (viewWidth <= 767) {
    // mobile 0 ~ 767
    return "MOBILE";
  } else if (viewWidth <= 1199) {
    // tablet 768 ~ 1199
    return "TABLET";
  }
  // web 1200 ~
  return "WEB";
};

const useResponse = () => {
  const [currentView, setCurrentView] = useState(getResponseInfo());

  const updateCurrentRes = () => {
    setCurrentView(getResponseInfo());
  };

  useEffect(() => {
    updateCurrentRes();
    window.addEventListener("resize", updateCurrentRes);

    return () => {
      window.removeEventListener("resize", updateCurrentRes);
    };
  }, []);

  return currentView;
};

export default useResponse;
