import Image from "next/image";
import Badge from "@/components/Badge";
import ListItem from "@/components/ListItem";
import { Item, ItemListProps } from "@/types/todo";
import { TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

interface ItemListBaseProps extends ItemListProps {
  badgeTxt: string;
  emptyImg: string;
  emptyMsg: string;
}

const ItemListBase = ({
  items,
  variant,
  badgeTxt,
  emptyImg,
  emptyMsg,
  onClick,
}: ItemListBaseProps) => {
  const handleClick = async (item: Item) => {
    const isCompleted = variant === "todo";

    // 화면 업데이트 데이터
    const updatedItem = {
      id: item.id,
      name: item.name,
      isCompleted,
    };

    // api 요청 데이터
    const bodyData = {
      name: item.name,
      memo: item.memo || "",
      imageUrl: item.imageUrl || "",
      isCompleted,
    };

    // 화면 먼저 업데이트
    onClick?.(updatedItem);

    // 서버 요청
    await axios.patch(`/${TENANT_ID}/items/${item.id}`, bodyData);
  };

  const isEmpty = !items || items.length === 0;

  return (
    <div className="w-full">
      <Badge text={badgeTxt} variant={variant} />

      {isEmpty && <EmptyList emptyImg={emptyImg} emptyMsg={emptyMsg} />}

      {!isEmpty && (
        <ul>
          {items.map((item) => (
            <ListItem
              key={`${variant}-${item.id}`}
              item={item}
              variant={variant}
              onClick={handleClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const ItemList = {
  Todo: ({ items, onClick }: ItemListProps) => {
    return (
      <ItemListBase
        items={items}
        variant="todo"
        badgeTxt="TO DO"
        emptyImg="/images/todo-empty.png"
        emptyMsg="할 일이 없어요.
        \n
        TODO를 새롭게 추가해주세요!"
        onClick={onClick}
      />
    );
  },
  Done: ({ items, onClick }: ItemListProps) => {
    return (
      <ItemListBase
        items={items}
        variant="done"
        badgeTxt="DONE"
        emptyImg="/images/done-empty.png"
        emptyMsg="아직 다 한 일이 없어요.
        \n
        해야 할 일을 체크해보세요!"
        onClick={onClick}
      />
    );
  },
};

export default ItemList;

const EmptyList = ({
  emptyImg,
  emptyMsg,
}: Pick<ItemListBaseProps, "emptyImg" | "emptyMsg">) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={emptyImg} alt="비어 있는 리스트" width="240" height="240" />
      <p className="text-gray-400 text-base text-center">{emptyMsg}</p>
    </div>
  );
};
