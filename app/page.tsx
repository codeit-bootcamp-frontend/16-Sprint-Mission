import TodoClient from "@/components/Todos/TodoClient";
import { getTodos } from "@/lib/api";
import { Suspense } from "react";
import TodoLoading from "@/components/Loader/TodoLoading";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <Suspense fallback={<TodoLoading />}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoClient />
      </HydrationBoundary>
    </Suspense>
  );
};

export default Home;
