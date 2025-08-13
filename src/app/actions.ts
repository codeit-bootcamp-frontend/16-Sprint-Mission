"use server";

import { revalidateTag } from "next/cache";

import { createTodoItem } from "@/features/todo/services/todoApi";

export async function createTodoItemAction(_: any, formData: FormData) {
  const name = formData.get("name")?.toString();

  if (!name) return;

  try {
    const data = await createTodoItem(name);

    revalidateTag("todoList");

    return data;
  } catch (err) {
    console.log(err);
    return;
  }
}
