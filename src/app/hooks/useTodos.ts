import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { getTodos } from "../api/todos";

export const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: getTodos,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
