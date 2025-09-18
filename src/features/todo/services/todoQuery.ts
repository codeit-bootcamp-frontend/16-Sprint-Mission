import { getTodoDetail, getTodoList } from "@/features/todo/services/todoApi";
import { queryOptions } from "@tanstack/react-query";

export const todoQueries = {
  all: () => ["todos"],
  list: () => [...todoQueries.all(), "list"],
  listOptions: () =>
    queryOptions({
      queryKey: [...todoQueries.list()],
      queryFn: getTodoList,
    }),
  detail: (itemId: string) => [...todoQueries.all(), "details", itemId],
  detailOptions: (itemId: string) =>
    queryOptions({
      queryKey: [...todoQueries.detail(itemId)],
      queryFn: () => getTodoDetail(itemId),
    }),
};
