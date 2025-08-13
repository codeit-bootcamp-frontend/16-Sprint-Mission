import TodoClient from "@/components/Todos/TodoClient";
import { getTodos } from "@/lib/api";
import { Suspense } from "react";
import TodoLoading from "@/components/Loader/TodoLoading";
import PrefetchHydration from "@/components/PrefetchHydration";

const Home = async () => {
  return (
    <Suspense fallback={<TodoLoading />}>
      <PrefetchHydration queries={[{ queryKey: ["todos"], queryFn: getTodos }]}>
        <TodoClient />
      </PrefetchHydration>
    </Suspense>
  );
};

export default Home;
