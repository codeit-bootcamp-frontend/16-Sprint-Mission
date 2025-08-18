import {
  TodoResponseType,
  TodoItemType,
  UpdateTodoData,
} from "@/types/todoTypes";

const API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;
const API_END_POINT = process.env.NEXT_PUBLIC_SERVER_COMMON_END_POINT;
const BASE_URL = `${API_URL}${API_END_POINT}`;

export async function getTodoList(): Promise<TodoItemType[]> {
  const res = await fetch(`${BASE_URL}/items`);

  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();

  return data;
}

export async function createTodoItem(name: string): Promise<TodoResponseType> {
  const res = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });

  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();

  return data;
}

export async function updateTodoItem(
  id: number,
  updateData: UpdateTodoData
): Promise<TodoResponseType> {
  const res = await fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();

  return data;
}

export async function getTodoDetail(itemId: string): Promise<TodoResponseType> {
  const res = await fetch(`${BASE_URL}/items/${itemId}`);

  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();

  return data;
}

export async function postImage(formData: FormData): Promise<{ url: string }> {
  const res = await fetch(`${BASE_URL}/images/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();

  return data;
}
