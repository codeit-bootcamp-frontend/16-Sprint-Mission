import { TENANT_ID } from "../constants/todo";
import { Todo } from "../types/todo";
import { PatchItemPayload } from "./types";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(
    `https://assignment-todolist-api.vercel.app/api/${TENANT_ID}/items?page=1&pageSize=30`
  );
  const json = await res.json();
  return json ?? [];
};

export const patchItem = async (
  itemId: string | number,
  data: PatchItemPayload
): Promise<void> => {
  const res = await fetch(
    `https://assignment-todolist-api.vercel.app/api/${TENANT_ID}/items/${itemId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`아이템 업데이트 실패: ${error}`);
  }
};

export const addTodo = async (name: string): Promise<void> => {
  const res = await fetch(
    `https://assignment-todolist-api.vercel.app/api/${TENANT_ID}/items`,
    {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!res.ok) throw new Error("할 일 추가 실패");
};
