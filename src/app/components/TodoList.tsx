import Image from "next/image";
import TodoTitle from "@/app/ui/image/img-todo.png";
import DoneTitle from "@/app/ui/image/img-done.png";
import EmptyTodoList from "@/app/ui/image/empty-todo.png";
import EmptyDoneList from "@/app/ui/image/empty-done.png";
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
    data: filtered = [],
    isLoading,
    error,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos", isDone],
    queryFn: getTodos,
    select: (todos) => todos.filter((t) => t.isCompleted === isDone),
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생</p>;

  // 빈 리스트인지 확인
  const isEmpty = filtered.length === 0;

  return (
    <article className="flex flex-col w-full gap-4  min-h-[300px]">
      <Image
        src={isDone ? DoneTitle : TodoTitle}
        alt="투두리스트의 타이틀 이미지"
        width={100}
        height={35}
        style={{ width: 100, height: 35 }}
        priority
      />
      {isEmpty ? (
        // filtered가 비어 있을 때 보여줄 이미지
        <div className="flex flex-col justify-center items-center">
          <Image
            src={isDone ? EmptyDoneList : EmptyTodoList}
            alt={isDone ? "완료된 할 일이 없습니다" : "할 일이 없습니다"}
            width={240}
            height={240}
            style={{ width: 240, height: 240 }}
            priority
          />
          <p className="text-slate-400 font-bold text-center">
            {isDone ? "아직 다 한 일이 없어요." : "할 일이 없어요."}
            <br />
            {isDone
              ? "해야 할 일을 체크해보세요!"
              : "TODO를 새롭게 추가해주세요!"}
          </p>
        </div>
      ) : (
        // 항목이 있을 때 기존 목록 렌더링
        <TodoItems isDone={isDone} dataList={filtered} />
      )}
    </article>
  );
}
