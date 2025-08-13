import TodoAddForm from "@/features/todo/components/TodoAddForm";
import TodoListArea from "@/features/todo/components/TodoListArea";
import { getTodoList } from "@/features/todo/services/todoApi";

export default async function Home() {
  const data = await getTodoList();

  return (
    <div className="pt-6">
      <TodoAddForm />
      <TodoListArea data={data} />
    </div>
  );
}
