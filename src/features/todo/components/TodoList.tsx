import TodoItem from "@/features/todo/components/TodoItem";
import { TodoItemType } from "@/types/todoTypes";

interface Props {
  dataList: TodoItemType[];
  onUpdate: (id: number) => void;
}

const TodoList = ({ dataList, onUpdate }: Props) => {
  return (
    <ul>
      {dataList.map((item) => (
        <TodoItem
          key={`${item.name}_${item.id}`}
          {...item}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
