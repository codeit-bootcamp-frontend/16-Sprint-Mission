import { BASE_URL, TENANT_ID } from "@/constants/constants";
import { Item, UpdateItem } from "@/types/todo";

export const getTodos = async (): Promise<Item[]> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items`);

    if (!res.ok) {
      throw new Error("투두 리스트 가져오기에 실패했습니다.");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getTodo = async (itemId: string): Promise<Item> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items/${itemId}`);

    if (!res.ok) {
      throw new Error("투두 아이템 가져오기에 실패했습니다.");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
};

export const addTodo = async (name: string) => {
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

interface UpdateTodoProps {
  itemId: string | number | undefined;
  bodyData: UpdateItem;
}

export const updateTodo = async ({
  itemId,
  bodyData,
}: UpdateTodoProps): Promise<UpdateItem> => {
  console.log(bodyData);

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
    throw err;
  }
};
