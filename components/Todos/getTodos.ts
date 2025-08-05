import { Item } from "@/types/todo";
import { BASE_URL, TENANT_ID } from "@/constants/constants";

const getTodos = async (): Promise<Item[]> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("투두 리스트 가져오기에 실패했습니다.");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getTodos;
