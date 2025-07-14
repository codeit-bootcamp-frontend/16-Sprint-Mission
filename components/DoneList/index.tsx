import Image from "next/image";
import Badge from "@/components/Badge";
import ListItem from "@/components/ListItem";
import { Item, ItemListProps } from "@/types/todo";
import { TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

const DoneList = ({ items, onChange }: ItemListProps) => {
  const cancelDone = async (todo: Item) => {
    // 화면 먼저 업데이트
    onChange?.({ ...todo, isCompleted: false });

    // 서버 요청
    const updatedTodo = {
      name: todo.name,
      memo: todo.memo || "",
      imageUrl: todo.imageUrl || "",
      isCompleted: false, // 완료 취소
    };

    await axios.patch(`/${TENANT_ID}/items/${todo.id}`, updatedTodo);
  };

  const isEmpty = !items || items.length === 0;

  return (
    <div className="w-full">
      <Badge text="DONE" variant="done" />

      {isEmpty && <ListEmpty />}
      {items && (
        <ul>
          {items.map((done) => (
            <ListItem
              key={done.id}
              item={done}
              variant="done"
              onClick={cancelDone}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoneList;

const ListEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/done-empty.png"
        alt="머리 긁는 두잇 캐릭터"
        width="240"
        height="240"
      />
      <p className="text-gray-400 text-base text-center">
        아직 다 한 일이 없어요.
        <br />
        해야 할 일을 체크해보세요!
      </p>
    </div>
  );
};
