import TodoItem from "@/features/todo/components/TodoItem";
import { TodoItemType } from "@/types/todoTypes";

interface Props {
  dataList: TodoItemType[];
}

const TodoList = ({ dataList }: Props) => {
  return (
    <ul>
      {dataList.map((item) => (
        <TodoItem key={`${item.name}_${item.id}`} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
