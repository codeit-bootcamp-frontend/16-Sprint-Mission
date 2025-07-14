import Image from "next/image";
import Badge from "@/components/Badge";
import ListItem from "@/components/ListItem";

interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
  memo?: string;
  imageUrl?: string;
  tenantId?: string;
}
interface TodoListProps {
  todos: Todo[] | undefined;
  onDone: () => void;
}

const TodoList = ({ todos, onDone }: TodoListProps) => {
  const handleDone = async (todo: Todo) => {
    const updatedTodo = {
      name: todo.name,
      memo: todo.memo || "",
      imageUrl: todo.imageUrl || "",
      isCompleted: true, // 완료 처리
    };

    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/sdsample/items/${todo.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      }
    );

    if (!res.ok) {
      console.error("완료 처리 실패:", await res.text());
    }

    onDone();
  };

  return (
    <div className="w-full">
      <Badge text="TO DO" variant="todo" />

      {!todos && <ListEmpty />}
      {todos && (
        <ul>
          {todos.map((todo) => (
            <ListItem key={todo.id} todo={todo} onClick={handleDone} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

const ListEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/todo-empty.png"
        alt="연필 들고 있는 두잇 캐릭터"
        width="240"
        height="240"
      />
      <p className="text-gray-400 text-base text-center">
        할 일이 없어요.
        <br />
        TODO를 새롭게 추가해주세요!
      </p>
    </div>
  );
};
