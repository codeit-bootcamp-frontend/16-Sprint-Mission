import { ReqData } from "@/types/form";

const loginUser = async (userData: ReqData) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("로그인에 실패했습니다. 계정 정보를 정확히 입력해주세요.");
  }

  const data = await res.json();
  return data;
};

export default loginUser;
