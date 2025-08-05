import TodoClient from "@/components/Todos/TodoClient";
import getTodos from "@/components/Todos/getTodos";
import { Suspense } from "react";
import TodoLoading from "@/components/Todos/TodoLoading";

const Home = async () => {
  const initialItems = await getTodos();

  return (
    <Suspense fallback={<TodoLoading />}>
      <TodoClient initialItems={initialItems} />
    </Suspense>
  );
};

export default Home;
