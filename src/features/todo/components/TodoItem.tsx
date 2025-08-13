import CheckItem from "@/components/CheckItem";
import { TodoItemType } from "@/types/todoTypes";

interface Props extends TodoItemType {
  onUpdate: (id: number) => void;
}

const TodoItem = ({ name, id, isCompleted, onUpdate }: Props) => {
  return (
    <li className="mt-4">
      <CheckItem
        name={name}
        id={id}
        isCompleted={isCompleted}
        onUpdate={onUpdate}
      />
    </li>
  );
};

export default TodoItem;
