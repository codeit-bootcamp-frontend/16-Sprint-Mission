export const addTodo = async (name: string): Promise<void> => {
  const res = await fetch(
    "https://assignment-todolist-api.vercel.app/api/jinsunkim/items",
    {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!res.ok) throw new Error("할 일 추가 실패");
};
