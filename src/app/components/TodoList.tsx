import Image from "next/image";
import TodoTitle from "@/app/ui/image/img-todo.png";
import DoneTitle from "@/app/ui/image/img-done.png";
import { getTodos } from "../api/get/getTodos";
import TodoItems from "./TodoItems";
import { useQuery } from "@tanstack/react-query";

type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
};

interface Props {
  isDone: boolean;
}

export default function TodoList({ isDone }: Props) {
  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery<Todo[], Error>({ queryKey: ["todos"], queryFn: getTodos });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생</p>;

  const filtered = todos.filter((t) => t.isCompleted === isDone);

  return (
    <article className="flex flex-col w-full gap-4">
      <Image
        src={isDone ? DoneTitle : TodoTitle}
        alt="TODO라는 초록색 글씨에 연두색 바탕의 타원형 이미지"
        width={100}
        height={35}
        style={{ width: 100, height: 35 }}
        priority
      />
      <TodoItems isDone={isDone} dataList={filtered} />
    </article>
  );
}
