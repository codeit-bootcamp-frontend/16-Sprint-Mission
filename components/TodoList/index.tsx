import Image from "next/image";
import Badge from "@/components/Badge";
import ListItem from "@/components/ListItem";
import { Item, ItemListProps } from "@/types/todo";
import { TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

const TodoList = ({ items, onChange }: ItemListProps) => {
  const handleDone = async (todo: Item) => {
    // 화면 먼저 업데이트
    onChange?.({ ...todo, isCompleted: true });

    // 서버 요청
    const updatedTodo = {
      name: todo.name,
      memo: todo.memo || "",
      imageUrl: todo.imageUrl || "",
      isCompleted: true, // 완료 처리
    };

    await axios.patch(`/${TENANT_ID}/items/${todo.id}`, updatedTodo);
  };

  const isEmpty = !items || items.length === 0;

  return (
    <div className="w-full">
      <Badge text="TO DO" variant="todo" />

      {isEmpty && <ListEmpty />}
      {items && (
        <ul>
          {items.map((todo) => (
            <ListItem
              key={todo.id}
              item={todo}
              variant="todo"
              onClick={handleDone}
            />
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
