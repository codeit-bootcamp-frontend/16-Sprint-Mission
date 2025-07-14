import Image from "next/image";
import Badge from "@/components/Badge";
import ListItem from "@/components/ListItem";
import { Item, ItemListProps } from "@/types/todo";
import { BASE_URL, TENANT_ID } from "@/constants/constants";

const DoneList = ({ items, onDone }: ItemListProps) => {
  const isEmpty = !items || items.length === 0;

  const cancelDone = async (todo: Item) => {
    const updatedTodo = {
      name: todo.name,
      memo: todo.memo || "",
      imageUrl: todo.imageUrl || "",
      isCompleted: false, // 완료 취소
    };

    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    if (!res.ok) {
      console.error("완료 처리 실패:", await res.text());
    }

    onDone();
  };

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
