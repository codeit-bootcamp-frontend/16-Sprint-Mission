import { BASE_URL, TENANT_ID } from "@/constants/constants";

const addTodo = async (name: string) => {
  const newTodo = { name };

  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error("투두 추가에 실패했습니다.");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
};

export default addTodo;
