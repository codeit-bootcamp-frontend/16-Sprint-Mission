import { getTodoList } from "@/features/todo/services/todoApi";
import { queryOptions } from "@tanstack/react-query";

export const todoQueries = {
  all: () => ["todos"],
  list: () => [...todoQueries.all(), "list"],
  listOptions: () =>
    queryOptions({
      queryKey: [...todoQueries.list()],
      queryFn: getTodoList,
    }),
};
