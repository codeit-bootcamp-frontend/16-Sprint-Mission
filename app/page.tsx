import TodoClient from "@/components/Todos/TodoClient";
import { getTodos } from "@/lib/api";
import { Suspense } from "react";
import TodoLoading from "@/components/Loader/TodoLoading";

const Home = async () => {
  const initialItems = await getTodos();

  return (
    <Suspense fallback={<TodoLoading />}>
      <TodoClient initialItems={initialItems} />
    </Suspense>
  );
};

export default Home;
