import { useAuthStore } from "@/stores/authStore";

interface User {
  id: number;
  email: string;
  image: null | string;
  nickname: string;
  updatedAt: string;
  createdAt: string;
}

interface SignInProps {
  user: User;
  accessToken: string;
  refreshToken: string;
}

const useSignIn = ({ user, accessToken, refreshToken }: SignInProps) => {
  const setUser = useAuthStore.getState().setUser;
  setUser(user);

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export default useSignIn;
