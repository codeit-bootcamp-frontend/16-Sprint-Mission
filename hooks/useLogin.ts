import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/authStore";
import { LoginFormValues } from "@/types/form";

const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginFormValues) => {
      const res = await axios.post("/api/auth/login", data, {
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: (data) => {
      setUser(data.user);
      router.push("/");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        alert(err.response?.data?.message || "로그인에 실패했습니다.");
      } else {
        alert("알 수 없는 에러가 발생했습니다.");
      }
    },
  });
};

export default useLogin;
