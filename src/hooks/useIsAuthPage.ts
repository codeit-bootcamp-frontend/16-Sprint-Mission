import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useIsAuthPage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "");

  useEffect(() => {
    if (currentPath === "login" || currentPath === "signUp") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [currentPath]);

  return isAuth;
};

export default useIsAuthPage;
