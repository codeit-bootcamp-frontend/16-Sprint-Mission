import { MouseEvent } from "react";
import Image from "next/image";
import { ItemProps, Item } from "@/types/todo";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const ListItemBase = ({ item, variant = "todo", onBulletClick }: ItemProps) => {
  const router = useRouter();

  const handleBulletClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onBulletClick(item);
  };

  const handleListClick = (item: Item) => {
    router.push(`/items/${item.id}`);
  };

  return (
    <li
      className={clsx("item-base", {
        "item-todo": variant === "todo",
        "item-done": variant === "done",
      })}
      onClick={() => handleListClick(item)}
    >
      <button
        className={clsx("bullet-base", {
          "bullet-todo": variant === "todo",
          "bullet-done": variant === "done",
        })}
        onClick={handleBulletClick}
      >
        {variant === "done" && (
          <Image
            src="/images/ico-check-wt.svg"
            alt="완료된 할 일"
            width="20"
            height="20"
          />
        )}
      </button>
      {item.name}
    </li>
  );
};

const ListItem = {
  Todo: ({ item, onBulletClick }: ItemProps) => (
    <ListItemBase item={item} variant="todo" onBulletClick={onBulletClick} />
  ),
  Done: ({ item, onBulletClick }: ItemProps) => (
    <ListItemBase item={item} variant="done" onBulletClick={onBulletClick} />
  ),
};

export default ListItem;
