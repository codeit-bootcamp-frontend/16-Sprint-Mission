import Empty from "@/components/Empty";
import TodoList from "@/features/todo/components/TodoList";
import { TodoItemType } from "@/types/todoTypes";
import Image from "next/image";

const mockDataTodo: TodoItemType[] = [
  {
    id: 1,
    name: "맥주 마시기",
    isCompleted: false,
  },
  {
    id: 2,
    name: "아침 운동하기",
    isCompleted: false,
  },
  {
    id: 3,
    name: "인공눈물 넣기",
    isCompleted: false,
  },
];

const mockDataDone: TodoItemType[] = [
  {
    id: 4,
    name: "아침밥 먹기",
    isCompleted: true,
  },
  {
    id: 5,
    name: "점심에 산책하기",
    isCompleted: true,
  },
  {
    id: 6,
    name: "8시 티켓팅",
    isCompleted: true,
  },
];

const TodoListArea = () => {
  return (
    <div className="flex gap-6 mt-10">
      <div className="grow-1">
        <Image
          src="/images/TodoTitle.svg"
          width={101}
          height={36}
          alt="TO DO title"
        />
        {mockDataTodo.length === 0 ? (
          <Empty
            src="/images/TodoEmptyIcon.svg"
            width={240}
            height={240}
            alt="할 일이 없어요."
          >
            할 일이 없어요. <br />
            TODO를 새롭게 추가해주세요!
          </Empty>
        ) : (
          <TodoList dataList={mockDataTodo} />
        )}
      </div>

      <div className="grow-1">
        <Image
          src="/images/DoneTitle.svg"
          width={97}
          height={36}
          alt="Done title"
        />
        {mockDataDone.length === 0 ? (
          <Empty
            src="/images/DoneEmptyIcon.svg"
            width={240}
            height={240}
            alt="아직 다 한 일이 없어요."
          >
            아직 다 한 일이 없어요. <br />
            해야 할 일을 체크해보세요!
          </Empty>
        ) : (
          <TodoList dataList={mockDataDone} />
        )}
      </div>
    </div>
  );
};

export default TodoListArea;
