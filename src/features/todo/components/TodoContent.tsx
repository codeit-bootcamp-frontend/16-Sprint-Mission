import TodoList from "@/features/todo/components/TodoList";
import { TodoItemType } from "@/types/todoTypes";
import Image from "next/image";
import { ComponentType } from "react";

interface Props {
  titleSrc: string;
  titleWidth: number;
  titleHeight: number;
  titleAlt: string;
  dataList: TodoItemType[];
  EmptyComponent: ComponentType;
  onUpdate: (id: number) => void;
}

const TodoContent = ({
  titleSrc,
  titleWidth,
  titleHeight,
  titleAlt,
  dataList,
  EmptyComponent,
  onUpdate,
}: Props) => {
  const isEmpty = dataList.length === 0;

  return (
    <div>
      <Image
        src={titleSrc}
        width={titleWidth}
        height={titleHeight}
        alt={titleAlt}
      />
      {isEmpty ? (
        <EmptyComponent />
      ) : (
        <TodoList dataList={dataList} onUpdate={onUpdate} />
      )}
    </div>
  );
};

export default TodoContent;
