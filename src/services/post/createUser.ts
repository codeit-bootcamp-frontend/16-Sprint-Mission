import { ReqData } from "@/types/form";

const createUser = async (userData: ReqData) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("회원가입에 실패했습니다.");
  }

  const data = await res.json();
  return data;
};

export default createUser;
