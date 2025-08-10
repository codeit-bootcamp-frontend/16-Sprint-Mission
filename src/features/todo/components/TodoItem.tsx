import CheckItem from "@/components/CheckItem";
import { TodoItemType } from "@/types/todoTypes";

const TodoItem = ({ name, id, isCompleted }: TodoItemType) => {
  return (
    <li className="mt-4">
      <CheckItem name={name} id={id} isCompleted={isCompleted} />
    </li>
  );
};

export default TodoItem;
