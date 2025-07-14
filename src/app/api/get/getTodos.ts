type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(
    "https://assignment-todolist-api.vercel.app/api/jinsun/items?page=1&pageSize=20"
  );
  const json = await res.json();
  console.log("✅ 응답 구조 확인:", json);
  return json ?? [];
};
