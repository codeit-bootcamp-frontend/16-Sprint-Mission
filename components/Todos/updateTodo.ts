import { BASE_URL, TENANT_ID } from "@/constants/constants";
import { UpdateItem } from "@/types/todo";

interface UpdateTodoProps {
  itemId: string | number | undefined;
  bodyData: UpdateItem;
}

const updateTodo = async ({
  itemId,
  bodyData,
}: UpdateTodoProps): Promise<UpdateItem> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (!res.ok) {
      throw new Error("투두 업데이트에 실패했습니다.");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default updateTodo;
