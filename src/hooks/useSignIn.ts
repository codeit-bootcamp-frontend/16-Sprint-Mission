import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const { setIsSignedIn } = useAuth();
  const navigate = useNavigate();

  return () => {
    setIsSignedIn(true);
    navigate("/products");
  };
};

export default useSignIn;
