import TodoAddForm from "@/features/todo/components/TodoAddForm";
import TodoListArea from "@/features/todo/components/TodoListArea";

export default function Home() {
  return (
    <div className="pt-6">
      <TodoAddForm />
      <TodoListArea />
    </div>
  );
}
